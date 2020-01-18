require_relative 'db_connection'
require 'active_support/inflector'


# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.
class SQLObject
  class << self
    attr_accessor :table_name
  end

  def self.inherited(child)
    child.instance_variable_set(:@table_name, child.to_s.tableize)
  end

  def self.columns
    if @columns
      @columns
    else
      query = DBConnection::execute2(<<-SQL)
        SELECT * FROM #{self.table_name}
      SQL
  
      @columns = query.first.map(&:to_sym)
    end
  end


  def self.finalize!
    self.columns.each { |column|
      define_method(column) {
        attributes[column]
      }
      define_method("#{column}=") { |value|
        attributes[column] = value
      }
    }
  end

  def self.all
    # self = SQLObject, inherited classes
    self.parse_all(DBConnection::execute(<<-SQL)
      SELECT
        #{@table_name}.*
      FROM
        #{@table_name}
    SQL
    )
  end
  
  def self.parse_all(results)
    results.map { |qur| self.new(qur) }
  end

  def self.find(id)
    query = DBConnection::execute(<<-SQL)
      SELECT
        *
      FROM
        #{self.table_name}
      WHERE
        id = #{id}
    SQL
    if query.empty?
      nil
    else
      self.new(query.first)
    end
  end

  def initialize(params = {})
    columns = self.class.columns
    params.each { |(k,v)|
      # k = :id
      # v = 1
      unless columns.include?(k.to_sym)
        raise "unknown attribute '#{k}'"
      end
      self.send("#{k}=", v)
      
      # self.send :id=
    }

  end

  def attributes
    # self = inst of Cat
    @attributes ||= {}
  end

  def attribute_values
    @attributes.values
  end

  def insert
    # i think the connection cut out
    # self.attributes 
    
    attribs = self.class.columns.map { |col| self.send col }

    query = DBConnection.execute(<<-SQL, *attribs)
      INSERT INTO
        #{self.class.table_name} (#{self.class.columns.join(", ")}) 
      VALUES
        (#{(["?"] * self.class.columns.length).join(", ")})
    SQL

    self.id = DBConnection.last_insert_row_id
  end

  def update
    attribs = attributes.values[1..-1]
    attribs << self.id
    query = DBConnection.execute(<<-SQL, *attribs)
      UPDATE #{self.class.table_name}
      SET #{attributes.keys[1..-1].join(" = ?, ")} = ?
      WHERE id = ?
    SQL
  end

  def save
    if self.id.nil?
      self.insert
    else
      self.update
    end
  end
end
