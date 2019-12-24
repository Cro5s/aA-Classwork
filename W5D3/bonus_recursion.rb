#Problem 1: 

def sum_recur(array)
  return 0 if array.empty?

  sum = array.shift + sum_recur(array)
end

a = [2, 6, 3, 1, 9]
puts sum_recur(a) # -> 21

#Problem 2: 

def includes?(array, target)
  return true if array.first == target  
  return false if array.empty?

  array.shift

  includes?(array, target)
end

a = [1, 2, 3, 4, 5, 6, 7]
p includes?(a, 5) # -> true
puts includes?(a, 9) # -> false

# Problem 3: 

def num_occur(array, targett)
  return 0 if array.empty?
  
  
  count += 1 if array.first == target
  array.shift
  
  num_occur(array, target)
end

a = [1, 2, 2, 3, 5, 2]
p num_occur(a, 2) # -> 3
puts num_occur(a, 4) # -> 0

# Problem 4: 

def add_to_twelve?(array)
end

# Problem 5: 

def sorted?(array)
end

# Problem 6: 

def reverse(string)
end
