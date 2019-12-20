require 'byebug'

class Array
  def my_each(&prc) # { |num| num > 1 }
    i = 0

    while i < self.length
       prc.call(self[i]) 
        
      i += 1
    end

    self
  end

  def my_select(&prc)
    selected = []
    
    self.my_each { |ele| selected << ele if prc.call(ele) }

    selected    
  end

  def my_reject(&prc)
    rejected = []

    self.my_each { |ele| rejected << ele if !prc.call(ele) }

    rejected
  end

  def my_any?(&prc)
    self.my_each do |ele| 
      return true if prc.call(ele) 
    end

    false
  end

  def my_all?(&prc) # { |num| num < 4 }
    self.my_each do |ele| 
      if !prc.call(ele)
        return false 
      end
    end
    
    true
  end

  def my_flatten # [1, 2, 3, [4, [5, 6]], [[[7]], 8]].my_flatten # => [1, 2, 3, 4, 5, 6, 7, 8]
    flattened = [] 
    #  debugger
    self.each do |ele| # [4, [5, 6]]
      # if it is an array then recurse
      if ele.is_a?(Array) 
        flattened += ele.my_flatten
      else
        # we want to add the element if its not an array
        flattened << ele 
      end

    end
    
    #return flattened
    flattened # [1, 2, 3, 4, 5, 6]
  end

  def my_zip(*ele) # [1, 2, 3].my_zip(a, b) *ele [[4, 5, 6], [7, 8, 9]]
    # New array that is the length of self
    zipped = []

    (0...self.length).each do |index| # index_1 = 0
      sub_arr = [] # [1, 4, 7]
      sub_arr << self[index]

      
      ele.my_each do |arr| # [4, 5, 6]
        sub_arr << arr[index]
      end

      zipped << sub_arr
    end
    
    zipped 
  end
  
  def my_rotate(num = 1)
    # Rotating by % of self.length allows you to only rotate 
    # if the array will change after the rotations
    self.drop(num % self.length) + self.take(num % self.length)
  end

  def my_join(char = nil)
    str = ""

    if char.nil?
      self.each { |ele| str += ele } 
    else
      self[0..-2].each { |ele| str += ele + char }
      str += self[-1]
    end

    str
  end

  def my_reverse
    arr = self.dup
    
    return [] if arr.empty?

    

  end

end


# calls my_each twice on the array, printing all the numbers twice.
return_value = [1, 2, 3].my_each do |num|
  puts num
end.my_each do |num|
  puts num
end

# => 1
#    2
#    3
#    1
#    2
#    3

p return_value  # => [1, 2, 3]
puts

a = [1, 2, 3]
p a.my_select { |num| num > 1 } # => [2, 3]
p a.my_select { |num| num == 4 } # => []
puts

a = [1, 2, 3]
p a.my_reject { |num| num > 1 } # => [1]
p a.my_reject { |num| num == 4 } # => [1, 2, 3]
puts

a = [1, 2, 3]
p a.my_any? { |num| num > 1 } # => true
p a.my_any? { |num| num == 4 } # => false
p a.my_all? { |num| num > 1 } # => false
p a.my_all? { |num| num < 4 } # => true
puts

p [1, 2, 3, [4, [5, 6]], [[[7]], 8]].my_flatten # => [1, 2, 3, 4, 5, 6, 7, 8]
puts

a = [ 4, 5, 6 ]
b = [ 7, 8, 9 ]
p [1, 2, 3].my_zip(a, b) # => [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
p a.my_zip([1,2], [8])   # => [[4, 1, 8], [5, 2, nil], [6, nil, nil]]
p [1, 2].my_zip(a, b)    # => [[1, 4, 7], [2, 5, 8]]

c = [10, 11, 12]
d = [13, 14, 15]
p [1, 2].my_zip(a, b, c, d)    # => [[1, 4, 7, 10, 13], [2, 5, 8, 11, 14]]
puts

a = [ "a", "b", "c", "d" ]
p a.my_rotate         #=> ["b", "c", "d", "a"]
p a.my_rotate(2)      #=> ["c", "d", "a", "b"]
p a.my_rotate(-3)     #=> ["b", "c", "d", "a"]
p a.my_rotate(15)     #=> ["d", "a", "b", "c"]
puts

a = [ "a", "b", "c", "d" ]
p a.my_join         # => "abcd"
p a.my_join("$")    # => "a$b$c$d"
puts

p [ "a", "b", "c" ].my_reverse   #=> ["c", "b", "a"]
p [ 1 ].my_reverse               #=> [1]