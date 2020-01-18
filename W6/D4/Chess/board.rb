require_relative 'piece.rb'

class Board
  attr_accessor :rows

  def initialize
    @rows = Array.new(8) { Array.new(8) }
    @sentinel = "nullpiece"
  end

  def add_piece(piece, pos)
    self[pos] = piece
  end

  def [](position)
    row, col = position
    self.rows[row][col]
  end

  def []=(position, value)
    row, col = position
    self.rows[row][col] = value
  end

  def move_piece(start_pos, end_pos)
    self[start_pos].board = self
    
    raise "There is no piece here" if self[start_pos].nil?
    
    if !valid_pos?(end_pos)
      raise "Not a valid end position"
    end
    
    #Sets Board
    self[end_pos] = self[start_pos]
    self[start_pos] = nil
    #Sets Piece
    self[end_pos].pos = end_pos
  end

  def valid_pos?(pos)
    row, col = pos
    if (row < 0 || row > 7 || col < 0 || col > 7) || !self[pos].nil?
      return false
    end

    true
  end

private
  attr_reader :sentinel

end