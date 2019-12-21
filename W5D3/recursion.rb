require "byebug"

def range(start_num, end_num)
  start_num < end_num ? [start_num].concat(range(start_num + 1, end_num)) : []  
end

def exponent_one(b, n)
  return 1 if n == 0

  b * exponent_one(b, n-1)
end

def exponent_two(b, n)
  return 1 if n == 0
  return b if n == 1

  if n.even?
    exponent_two(b, n/2) * exponent_two(b, n/2)    
  else
    b * exponent_two( exponent_two(b, (n-1)/2) , 2)
  end
end

class Array
  def deep_dup
    self.map { |ele| ele.is_a?(Array) ? ele.deep_dup : ele.dup }
  end
end

# fibonacci(1) => [1]
# fibonacci(2) => [1,1]
# fibonacci(3) => [1,1,2]
# fibonacci(4) => [1,1,2,3]
def fibonacci(n)
  return [n] if n == 1
  return [1, 1].take(n) if n <= 2

  prev_fib = fibonacci(n-1)
  last_num = prev_fib[-1]
  two_nums_ago = prev_fib[-2]
  
  next_num = last_num + two_nums_ago

  prev_fib.push(next_num)
end


# bsearch([1, 2, 3], 1) # => 0
# bsearch([2, 3, 4, 5], 3) # => 1
# bsearch([2, 4, 6, 8, 10], 6) # => 2
# bsearch([1, 3, 4, 5, 9], 5) # => 3
# bsearch([1, 2, 3, 4, 5, 6], 6) # => 5
# bsearch([1, 2, 3, 4, 5, 6], 0) # => nil
# bsearch([1, 2, 3, 4, 5, 7], 6) # => nil

def bsearch(array, target) 
  index = array.length/2 # 1

  dif = target <=> array[index] # -1
  
  return 0 if array.empty?

  if dif == 0
    return index
  elsif dif == -1 
    bsearch(array[0...index], target)
  elsif dif == 1 
    array.length.even? ? (index + 1) + bsearch(array[index + 1..-1], target) : index + bsearch(array[index + 1..-1], target)
  end

end


def merge_sort(array)
  # base case
  case array.length 
  
  when (0..1)
    return array
  
  else
    half = array.count / 2
    first_half = array.take(half)       
    second_half = array.drop(half)

    sorted_first = merge_sort(first_half)  
    sorted_second = merge_sort(second_half) 
    
  end
  
  merge(sorted_first, sorted_second)
end

def merge(arr_1, arr_2)
  merged = []

  until arr_1.empty? || arr_2.empty?
    if arr_1.first < arr_2.first
      merged << arr_1.shift
    else
      merged << arr_2.shift
    end

  end

  merged.concat(arr_1).concat(arr_2)
end

arr = [1, 4, 6, 2, 8, 6, 5, 9, 0]
p merge_sort(arr) # => [0, 1, 2, 4, 5, 6, 6, 8, 9]
puts