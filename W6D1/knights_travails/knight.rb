class KnightPathFinder
  def initialize(pos)
    @root_node = pos
    @considered_positions = [pos]
  end

  def build_move_tree
    queue = []
    queue << root_node

    until queue.empty?
      # shift / shrink (grab first)
      # check / return
      # add children to queue

    end
  end

  def self.valid_moves(pos)
  end

  def new_move_positions(pos)
    moves = KnightPathFinder.valid_moves(pos)
    new_moves = moves.reject {|pos| self.considered_positions == pos }
    considered_positions << new_moves
    considered_positions
  end

  private 
  attr_reader :root_node
  attr_accessor :considered_positions
end

if __FILE__ == $PROGRAM_NAME
  kpf = KnightPathFinder.new([0, 0])
  p kpf
end

    