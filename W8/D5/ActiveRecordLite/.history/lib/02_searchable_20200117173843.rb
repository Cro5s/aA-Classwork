require_relative 'db_connection'
require_relative '01_sql_object'

module Searchable
  def where(params)
    # self = SQLObject and inheriting classes
    
    query = DBConnection.execute(<<-SQL, *params.values)
      SELECT *
      FROM #{self.table_name}
      WHERE #{params.keys.join(" = ? AND ")} = ?
    SQL
    
    if query.empty?
      []
    else
      query.map { |el| self.new(el) }
    end

  end
end

class SQLObject
  # Mixin Searchable here...
  extend Searchable
end
