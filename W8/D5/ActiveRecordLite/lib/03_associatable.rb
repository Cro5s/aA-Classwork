require "byebug"
require_relative '02_searchable'
require 'active_support/inflector'

# Phase IIIa
class AssocOptions
  attr_accessor(
    :foreign_key,
    :class_name,
    :primary_key
  )

  def initialize(name, options = {})
    @primary_key = options[:primary_key] || :id
    @class_name = options[:class_name] || name.to_s.classify
  end

  def model_class
    Object.const_get(@class_name)
  end

  def table_name
    model_class.table_name
  end
end

class BelongsToOptions < AssocOptions
  def initialize(name, options = {})
    super
    @foreign_key = options[:foreign_key] || (name.to_s + "_id").to_sym
  end
end


class HasManyOptions < AssocOptions
  def initialize(name, self_class_name=nil, **options)
    @foreign_key = options[:foreign_key] || (self_class_name.to_s.downcase + "_id").to_sym
    super(name, options)
  end
end

module Associatable
  # Phase IIIb
  def belongs_to(name, options = {})
    # name = :human
    # we want Human, not "Human"
    options = BelongsToOptions.new(name, options)
    # class Cat 
    #   belongs_to :human, foreign_key: :owner_id
    #   finalize!
    # end
    # cat.human

    define_method(name) {
      # we want to call Human.find(our catly id)
      # we actually want: Cat.find
      klass = Object.const_get(name.to_s.capitalize)


      query = DBConnection.execute(<<-SQL)
        SELECT *
        FROM #{klass.table_name}
        WHERE #{options.primary_key} = #{self.id}
      SQL
      
      if query.empty?
        nil
      else
        klass.new(query.first)
      end
    }

  end

  def has_many(name, options = {})
    options = HasManyOptions.new(name, self.to_s, options)
    # self = Human
    

    define_method(name) {
      # name = :cats
      # self = human
      klass = Object.const_get(name.to_s.classify)

      query = DBConnection.execute(<<-SQL)
        SELECT *
        FROM #{klass.table_name}
        WHERE #{options.foreign_key} = #{self.id}
      SQL
      
      query.map { |ele| klass.new(ele) }
    }
  end

  def assoc_options
    # Wait to implement this in Phase IVa. Modify `belongs_to`, too.
  end
end

class SQLObject
  # Mixin Associatable here...
  extend Associatable
end



class Human < SQLObject
  self.table_name = 'humans'
  has_many :cats, foreign_key: :owner_id
  finalize!
end

class Cat < SQLObject
  belongs_to :human, foreign_key: :owner_id
  finalize!
end

