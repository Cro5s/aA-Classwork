def bad_two_sum?(arr, target_sum) # Time: O(n^2) Space: O(1)
  arr.each_with_index do |el1, i1|
    arr.each_with_index do |el2, i2|
      return true if (el1 + el2 == target_sum) && i2 > i1
    end
  end
  false
end

arr = [0, 1, 5, 7]
p bad_two_sum?(arr, 6)
p bad_two_sum?(arr, 10)
p bad_two_sum?(arr, 8)
puts

def okay_two_sum?(arr, target_sum) # Time: O(n^2) Space: O(log n)
  sorted_arr = arr.sort
  mid_idx = arr.length / 2
  start_idx = 0
  end_idx = arr.length - 1
  
  until start_idx == end_idx
    sum = sorted_arr[start_idx] + sorted_arr[end_idx]

    case sum <=> target_sum
    when 0 
      return true
    when -1
      start_idx += 1 
    else
      end_idx -= 1
    end
  end

  false
end

arr = [3,1,5,4,2]
p okay_two_sum?(arr, 6)
p okay_two_sum?(arr, 10)
p okay_two_sum?(arr, 8)
puts

def two_sum?(arr, target_sum) # Time: O(n) Space: O(1)
  hash = {}
  
  arr.each do |ele|
    hash_ele = target_sum - ele
    return true if hash[hash_ele]
    hash[ele] = true
  end
  false
end

arr = [1,2,3,4,5]
p two_sum?(arr, 10)
p two_sum?(arr, 6)
p two_sum?(arr, 8)