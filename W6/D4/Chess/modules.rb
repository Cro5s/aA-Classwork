#BISHOP/ROOK/QUEEN
module Slideable

    def horizontal_dirs
      Slidable::HORIZONTAL_DIRS
    end

    def diagonal_dirs
      Slidable::DIAGONAL_DIRS
    end

    def moves
      row, col = self.pos
      
      self.pos

    end

private 

HORIZONTAL_DIRS = [[0, 1], [0, -1], [-1, 0], [1, 0]]
DIAGONAL_DIRS = [[1, 1], [1, -1], [-1, -1], [-1,1]]
end