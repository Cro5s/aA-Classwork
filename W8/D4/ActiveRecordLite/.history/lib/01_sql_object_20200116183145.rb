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
    child.columns
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
    columns = @columns
    
    self.class_exec(columns) { attr_accessor *columns }
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
    # self.class.columns
  end

  def attributes
    # self = inst of Cat
    if @attributes
      @attributes
    else
      columns = self.class.instance_variable_get(:@columns) # => [:id, :name, :owner_id]
      # unless columns      
      #   self.class.finalize! 
      #   Cat.columns
      #   columns = self.class.instance_variable_get(:@columns)
      # end
      attribs = Hash.new { |h,k| h[k] = self.send k }
      columns.each { |column| attribs[column] }
      @attributes = attribs.select { |attrib| !attribs[attrib].nil? }
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
