class PolyTreeNode
  attr_reader :parent, :value 
  attr_accessor :children

  def initialize(value)
    @value = value
    @parent = nil
    @children = []
  end

  
  def parent=(node = nil)

    if !self.parent.nil?
      idx = self.parent.children.index(self)
      self.parent.children.delete_at(idx)
    end

    @parent = node
      
    if !node.nil?
      node.children << self unless node.children.include?(self)
    end

  end

  def add_child(node)
    node.parent = self

    self.children << node if !self.children.include?(node)
  end

  def remove_child(node)
    raise "this node is not a child" unless self.children.include?(node)
    node.parent = nil  
  end

  def dfs(target)
    return self if self.value == target

    self.children.each do |child|
      results = child.dfs(target)
      return results if !results.nil?
    end 

    nil
  end

  def bfs(target)  
    queue = []
    queue << self

    until queue.empty?
      node = queue.shift
      return node if target == node.value

      queue.concat(node.children)
    end
    
    nil
  end

end
