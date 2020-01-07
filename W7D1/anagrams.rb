def first_anagram?(str1, str2) #O(n!), O(n!)
    arr1 = str1.split("").permutation.to_a
    arr2 = str2.split("")

    arr1.include?(arr2)
end

p first_anagram?("gizmo", "sally")    #=> false
p first_anagram?("elvis", "lives")    #=> true
puts

def second_anagram?(str1, str2) # Time: O(n^2) Space: O(n)
  arr1 = str1.split("") # gizmo
  arr2 = str2.split("") #gizmos
  
  arr1.each do |el|
    idx = arr2.find_index(el)
    return false if idx.nil?
    arr2.delete_at(idx)
  end
  return false if !arr2.empty?
  true
end

p second_anagram?("gizmo", "sally")    #=> false
p second_anagram?("elvis", "lives")    #=> true
puts

def third_anagram?(str1, str2) # Time: O(n2) Space: O(log n)
  str1.split("").sort == str2.split("").sort
end

p third_anagram?("gizmo", "sally")    #=> false
p third_anagram?("elvis", "lives")    #=> true
puts

def hash(str)
  hash = Hash.new(0)

  str.each_char { |char| hash[char] += 1 }

  hash
end

def fourth_anagram?(str1,str2) # Time: O(n) Space : O(n)
  hash(str1) == hash(str2)
end


p fourth_anagram?("gizmo", "sally")    #=> false
p fourth_anagram?("elvis", "lives")    #=> true