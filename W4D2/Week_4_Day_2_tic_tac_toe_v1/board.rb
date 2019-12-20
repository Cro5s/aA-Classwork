class Board
  def initialize
    @grid = Array.new(3){ Array.new(3, '_') }

  end

  def valid?(position) # valid?([1, 2])
    row = position[0]
    col = position[1]

    if (row >= 0 && row <= @grid.length - 1) && (col >= 0 && col <= @grid.length - 1)
      # if 1 >= 0 && 1 <= 2 && 2 >= 0 && 2 <= 2
      return true
    else
      return false
    end

  end

  def empty?(position) # empty?([1, 2])
    row = position[0]
    col = position[1]

    @grid[row][col] == "_" # @grid[1][2] == '_' -> true

  end

  def place_mark(position, mark) # [1, 2], :X
    row = position[0]
    col = position[1]

    if valid?(position) && empty?(position) # valid?([1, 2]) -> true
      @grid[row][col] = mark
    else
      raise "Either this spot is used or it's not valid"
    end
  end

  def print
    @grid.each { |row| puts row.join(" ") }
  end

  def win_row?(mark)
    @grid.each do |row|
      if row.all? { |ele| ele == mark } 
        return true
      end 
    end

    false
  end

  def win_col?(mark)
    @grid.transpose.each do |col|
      if col.all? { |ele| ele == mark } 
        return true
      end 
    end

    false
  end

  def win_diagonal?(mark)
    diagonal_1 = [@grid[0][0], @grid[1][1], @grid[2][2]]
    diagonal_2 = [@grid[0][2], @grid[1][1], @grid[2][0]]

    if diagonal_1.all? { |ele| ele == mark } || diagonal_2.all? { |ele| ele == mark }
      return true
    else
      return false
    end

  end

  def win?(mark)
    self.win_row?(mark) || self.win_col?(mark) || self.win_diagonal?(mark)
  end

  def empty_positions?
    @grid.each do |row|
      if row.any? { |ele| ele == "_" }
        return true 
      end
    end

    return false
  end

  def mark_all(mark)
    row = rand(0..2)
    col = rand(0..2)
    position = [row, col]
    
    while empty_positions? 
      self.place_mark_1(position, mark)
    end

    @grid.print
  end

  def place_mark_1(position, mark)
    row = position[0]
    col = position[1]

    if valid?(position)
      @grid[row][col] = mark
    end
  end
    
  
end