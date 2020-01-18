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
        debugger
        attributes[column]
      }
      define_method("#{column}=") { |value|
        attributes[column] = value
      }
    } # => [:id, :name, :owner_id]
    # self.singleton_class.class_exec { attr_accessor *@columns }

  end

  def self.all
    # ...
  end

  def self.parse_all(results)
    # ...
  end

  def self.find(id)
    # ...
  end

  def initialize(params = {})
    self.class.columns
  end

  def attributes
    # self = inst of Cat
    if @attributes
      @attributes
    else
      # columns = self.class.instance_variable_get(:@columns) # => [:id, :name, :owner_id]
      # attribs = Hash.new { |h,k| h[k] = self.send k }
      # columns.each { |column| attribs[column] if self.respond_to?(column) }
      # @attributes = attribs.select { |attrib| !attribs[attrib].nil? }
      @attributes = {}
    end
  end

  def attribute_values
    # ...
  end

  def insert
    # ...
  end

  def update
    # ...
  end

  def save
    # ...
  end
end
