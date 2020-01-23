require_relative '03_associatable'

# Phase IV
module Associatable
  # Remember to go back to 04_associatable to write ::assoc_options

  def has_one_through(name, through_name, source_name)
    # self = Cat
    # name = :home
    # through_name = :human
    # source_name = :house

    table = Object.const_get(through_name.to_s.classify).table_name
    # table = source_name.to_s.tableize #houses
    through = through_name.to_s.tableize #humans

    # actual query we want:
    <<-SQL
      SELECT
        houses.*
      FROM
        houses 
      JOIN
        humans ON humans.house_id = houses.id
      JOIN
        cats ON cats.owner_id = humans.id
      WHERE
        cats.id = 1
    SQL

    define_method(name) { 
      query = <<-SQL
        SELECT #{table}.*
        FROM  #{table}
        JOIN #{through} ON #{through}.#{table[0..-2] + "_id"} = #{table}.id
        JOIN 
        WHERE 
      SQL

      puts query

    }

  end
end

class Cat < SQLObject
  belongs_to :human, :foreign_key => :owner_id
  has_one_through :home, :human, :house

  finalize!
end

class Human < SQLObject
  self.table_name = "humans"

  belongs_to :house

  finalize!
end

class House < SQLObject
  finalize!
end