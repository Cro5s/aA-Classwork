require_relative "board"
require "Singleton"
require "modules"



class Piece

  attr_reader :color 
  attr_accessor :pos, :board

  def initialize(color, board, pos)
    @color = color
    @board = board
    @pos = pos
  end

  # def pos=(val)
  #   @pos = val
  # end

#   def valid_moves
#     val_moves = []

#     self.board.each_with_index do |row_subarray, i|
#       row_subarray.each_with_index do |el, j|
#         if el == nil
#           val_moves << [i, j]
#         end
#       end
#     end

#     val_moves
#   end

end

class NullPiece < Piece
  include Singleton

end

