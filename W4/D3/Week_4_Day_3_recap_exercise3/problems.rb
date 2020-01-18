def no_dupes?(arr)
  count = Hash.new(0)

  arr.each { |ele| count[ele] += 1}

  count.select { |k, v| v == 1 }.keys

end

#def no_dupes?(arr)
#
#    count = {}
#
#    arr.select do |ele|
#        if count.has_key?(ele)
#            return false
#        else
#            count[ele]
#        end
#end

# p no_dupes?([1, 1, 2, 1, 3, 2, 4])         # => [3, 4]
# p no_dupes?(['x', 'x', 'y', 'z', 'z'])     # => ['y']
# p no_dupes?([true, true, true])            # => []

def no_consecutive_repeats?(arr)
    arr.each_with_index {|ele, i| return false if arr[i] == arr[i+1]}
    true
end

# p no_consecutive_repeats?(['cat', 'dog', 'mouse', 'dog'])     # => true
# p no_consecutive_repeats?(['cat', 'dog', 'dog', 'mouse'])     # => false
# p no_consecutive_repeats?([10, 42, 3, 7, 10, 3])              # => true
# p no_consecutive_repeats?([10, 42, 3, 3, 10, 3])              # => false
# p no_consecutive_repeats?(['x'])                              # => true

def char_indices(str)
  indices = Hash.new { |h, k| h[k] = [] }

  str.each_char.with_index { |char, i| indices[char] << i }

  indices
end

# p char_indices('mississippi')   # => {"m"=>[0], "i"=>[1, 4, 7, 10], "s"=>[2, 3, 5, 6], "p"=>[8, 9]}
# p char_indices('classroom')     # => {"c"=>[0], "l"=>[1], "a"=>[2], "s"=>[3, 4], "r"=>[5], "o"=>[6, 7], "m"=>[8]}

def longest_streak(str)
    streaks = Hash.new(1) # {a = 2, b = 1, c = 1}

    return str if str.length == 1

    (0...str.length - 1).each do |i| # acccbb
        char = str[i]
      if char == str[i+1]
        streaks[char] +=1
      else
          streaks[str[i+1]] = 1
      end

    end


    array = streaks.sort_by {|k,v| v} #[[a, 1], [b,1], [c,1]]
    want = array[-1] # [c, 1]
    num = want[1]
    result = ""
    num.times do
        result += want[0]
    end
    result
end

# p longest_streak('a')           # => 'a'
# p longest_streak('accccbbb')    # => 'cccc'
# p longest_streak('aaaxyyyyyzz') # => 'yyyyy
# p longest_streak('aaabbb')      # => 'bbb'
# p longest_streak('abc')         # => 'c'


def prime?(factor)
  return false if factor < 2
  (2...factor).each { |divisor| return false if factor % divisor == 0 }

  true
end

def bi_prime?(num) 
  factor_pair = []

  (2...num).each { |factor| other_factor = num / factor }
    
    if num % factor == 0 
      factor_pair << [factor, other_factor] 
    end
  end

  factor_pair.any? { |pair| pair.all? { |factor| prime?(factor) } }
 
end

# p bi_prime?(14)   # => true
# p bi_prime?(22)   # => true
# p bi_prime?(25)   # => true
# p bi_prime?(94)   # => true
# p bi_prime?(24)   # => false
# p bi_prime?(64)   # => false

def vigenere_cipher(word, key)
    alpha = ("a".."z").to_a
    new_word = ""
    i = 0
    while i < word.length
        old_idx = alpha.index(word[i])
        new_index = old_idx + key[i % key.length]
        new_word += alpha[new_index % 26]
        i += 1
    end
    new_word
end

# p vigenere_cipher("toerrishuman", [1])        # => "upfssjtivnbo"
# p vigenere_cipher("toerrishuman", [1, 2])     # => "uqftsktjvobp"
# p vigenere_cipher("toerrishuman", [1, 2, 3])  # => "uqhstltjxncq"
# p vigenere_cipher("zebra", [3, 0])            # => "ceerd"
# p vigenere_cipher("yawn", [5, 1])             # => "dbbo"

def vowel_rotate(str) #'computer'
  vowels = "aeiou"
  vowel_indices = [] # [1, 4, 6]
  new_str = str[0..-1] #computer

  str.each_char.with_index do |char, i| #r, 7
    if vowels.include?(char)
      vowel_indices << i
    end
  end

  new_indices = vowel_indices.rotate(-1)#[6, 1, 4] = [1, 4, 6] 

  new_indices.each_with_index do |num, i| #[6, 1, 4] |6, 0|
    old_idx = num # 6 #new_indices[i]
    new_idx = vowel_indices[i] # 1
    new_str[new_idx] = str[old_idx]# computer[1] = str computer[6]
    #cemputer
  end

  new_str
end

# p vowel_rotate('computer')      # => "cempotur"
# p vowel_rotate('oranges')       # => "erongas"
# p vowel_rotate('headphones')    # => "heedphanos"
# p vowel_rotate('bootcamp')      # => "baotcomp"
# p vowel_rotate('awesome')       # => "ewasemo"

class String

    def select(&prc)
        prc ||= Proc.new {return ""}

        results = ""

        self.each_char {|char| results += char if prc.call(char)}

        results
    end


  # p "app academy".select { |ch| !"aeiou".include?(ch) }   # => "pp cdmy"
  # p "HELLOworld".select { |ch| ch == ch.upcase }          # => "HELLO"
  # p "HELLOworld".select          # => ""

  def map!(&prc)
    self.each_char.with_index { |char, i| self[i] = prc.call(char, i) } 
    
    self
  end

#   word_1 = "Lovelace"
#   word_1.map! do |ch| 
#       if ch == 'e'
#           '3'
#       elsif ch == 'a'
#           '4'
#       else
#           ch
#       end
#   end
#   p word_1        # => "Lov3l4c3"

#   word_2 = "Dijkstra"
#   word_2.map! do |ch, i|
#       if i.even?
#           ch.upcase
#       else
#           ch.downcase
#       end
#   end
#   p word_2        # => "DiJkStRa"

end

def multiply(a, b)
    return 0 if a == 0

    if a > 0
        product = multiply(a - 1, b) + b
    else
        product = multiply(a + 1, b) - b
    end
    product
end


# p multiply(3, 5)        # => 15
# p multiply(5, 3)        # => 15
# p multiply(2, 4)        # => 8
# p multiply(0, 10)       # => 0
# p multiply(-3, -6)      # => 18
# p multiply(3, -6)       # => -18
# p multiply(-3, 6)       # => -18

def lucas_sequence(length) # 3
#  return [] if length == 0
#  return [2] if length == 1
#  return [2, 1] if length == 2
  return [2, 1].take(n) if n <= 2
  
  seq = lucas_sequence(length - 1) # 2 = (3 - 1)
  next_num = seq[-1] + seq[-2] #  = +
  seq << next_num #[]

  seq
end 

# p lucas_sequence(0)   # => []
# p lucas_sequence(1)   # => [2]    
# p lucas_sequence(2)   # => [2, 1]
# p lucas_sequence(3)   # => [2, 1, 3]
# p lucas_sequence(6)   # => [2, 1, 3, 4, 7, 11]
# p lucas_sequence(8)   # => [2, 1, 3, 4, 7, 11, 18, 29]

def prime_factorization(num) # 3
  
  (2...num).each do |factor| # (2...3) |2|
    if num % factor == 0 # 3 % 2 != 0
      other_factor = num / factor # 3 = 6 / 2
      return [ *prime_factorization(factor), *prime_factorization(other_factor) ] # (3) ()
    end
  end

  [num] # [2, 2, 3]
end

# p prime_factorization(12)     # => [2, 2, 3]
# p prime_factorization(24)     # => [2, 2, 2, 3]
# p prime_factorization(25)     # => [5, 5]
# p prime_factorization(60)     # => [2, 2, 3, 5]
# p prime_factorization(7)      # => [7]
# p prime_factorization(11)     # => [11]
# p prime_factorization(2017)   # => [2017]
