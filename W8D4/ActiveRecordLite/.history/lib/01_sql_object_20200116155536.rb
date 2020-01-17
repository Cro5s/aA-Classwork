require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.
class Test < SQLObject

end

class SQLObject
  # self = SQLObject
  def self.tres

  end

  class << self
    attr_accessor :table_name
    # def table_name=(table_name)
    #   @table_name = table_name      
    # end

    # def table_name
    #   @table_name
    # end
  end

  def self.testee
    puts self
  end
  def testee
    # self = instance of SQLObject
    # self.singleton_class =/= SQLObject
  end

  def self.columns
    # ...
  end

  def self.finalize!
  end

  # def self.table_name=(table_name)
  #   @table_name = table_name
  #   class <<
  # end

  # def self.table_name
  #   @table_name
  # end

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
    # ...
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
