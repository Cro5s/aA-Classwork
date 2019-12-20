## Monkey Patching

### my_flatten

# Write a method that flattens an array to the specified level. If no level
# is specified, it should entirely flatten nested arrays.

# Examples:
# Without an argument:
# [["a"], "b", ["c", "d", ["e"]]].my_flatten = ["a", "b", "c", "d", "e"]

# When given 1 as an argument:
# (Flattens the first level of nested arrays but no deeper)
# [["a"], "b", ["c", "d", ["e"]]].my_flatten(1) = ["a", "b", "c", "d", ["e"]]

class Array
  def my_flatten(level = nil)
    if level.nil?   
      flattened = []
      
      self.each do |ele|
        if ele.is_a?(Array)
          flattened += ele.my_flatten
        else
          flattened << ele
        end
      end
      
    else
      return self if level == 0
      flattened = []

      self.each do |ele| 
        if ele.is_a?(Array) 
          flattened += ele.my_flatten(level - 1)
        else
          flattened << ele
        end
      end

    end

    flattened
  end
end

p [["a"], "b", ["c", "d", ["e"]]].my_flatten # => ["a", "b", "c", "d", "e"]
p [["a"], "b", ["c", "d", ["e"]]].my_flatten(1) # => ["a", "b", "c", "d", ["e"]]
p [["a"], "b", ["c", "d", ["e"]]].my_flatten(2) # => ["a", "b", "c", "d", "e"]