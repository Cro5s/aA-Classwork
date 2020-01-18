require_relative 'db_connection'
require_relative '01_sql_object'

module Searchable
  def where(params)
    # self = SQLObject and inheriting classes
    
    query = (<<-SQL)
      SELECT *
      FROM #{self.table_name}
      WHERE #{params.keys.join(" = ? AND ")}
    SQL

    puts query
  end
end

class SQLObject
  # Mixin Searchable here...
  extend Searchable
end
