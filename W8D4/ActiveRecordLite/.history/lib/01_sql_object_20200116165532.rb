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
    # columns = @columns
    class << self
      attr_accessor *@columns
    end
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
    
  end

  def attributes
    # ...
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
