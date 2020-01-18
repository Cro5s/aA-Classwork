def my_min(list) #O(n^2)
  list.each do |el|
    min = el

    list.each do |el2|
      min = el2 if el2 < min
    end
  end
  min
end

def my_min2(list) # O(n)
  min = list.first

  list.each { |el| min = el if el < min }

  min
end

list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]

p my_min(list)  # =>  -5
p my_min2(list)  # =>  -5
puts

def largest_contiguous_subsum(list) # O(n^2)
  sub_arr = []
  (0...list.length).each do |i|
    (i...list.length).each do |j|
      sub_arr << list[i..j]
    end
  end

  max = sub_arr[0].sum
  sub_arr.each { |sub| max = sub.sum if sub.sum > max}
  max
 
end

list = [2, 3, -6, 7, -6, 7]
p largest_contiguous_subsum(list)


def largest_contiguous_subsum2(list) # O(n), O(1)
  largest_sum = list.first
  current_sum = 0
  
  list.each do |ele|
    current_sum = 0 if current_sum < 0 
    current_sum += ele
    largest_sum = current_sum if current_sum > largest_sum
  end
  largest_sum
end

list = [-2, -3, -6, -7, -6]
p largest_contiguous_subsum2(list)