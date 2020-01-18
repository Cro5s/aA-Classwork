require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.
class SQLObject
  class << self
    attr_accessor :table_name
  end

  def self.inherited(child)
    puts child
    puts child.to_s
  end

  def self.columns
    # ...
  end

  def self.finalize!
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
    @table_name = self.class.table_name.tableize #self = instance of a class
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
