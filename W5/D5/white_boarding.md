class Array
  def merge_sort(&prc)
    prc ||= Proc.new { |a,b| a <=> b }

    case self.length

    when (0..1)
      return self 

    else
      sorted_left = self[0..self.length/2]
      sorted_right = self[(self.length/2 + 1)..-1]
      sorted_left.merge_sort(&prc)
      sorted_right.merge_sort(&prc)
    end

    merge(sorted_left, sorted_right, prc)
  end

  def merge(arr_1, arr_2, prc)
    sorted = []

    until arr_1.empty? || arr_2.empty?
      if prc.call(arr_1.first, arr_2.first) 
        sorted << arr_1.shift
      else
        sorted  << arr_2.shift
      end

    end

    sorted += arr_1 + arr_2
  end

  def my_flatten(level = nil)
    level ||= self.length - level == flattened array amount

    return self if self.empty? || self.lenght == 1
    
    self.each do |ele|
      if ele.to_a?(Array)
    end
  end

  def my_inject(accumulator = nil &prc)
    arr = self

     if accumulator.nil?
      accumulator ||= self.first 
      arr[1..-1].each { |ele| accumulator = prc.call(accumulator, ele) }
    else
      arr.each { |ele| accumulator = prc.call(accumulator, ele) }
    end

    accumulator
  end 

end

class String
  def same_str?(sentence)
    self.split("").sort == sentence.split("").sort
  end
end

def fib(n)
  return [0,1].take(n) if n <= 2

  prev_num = fib(n - 1)
  two_nums_ago = prev_num[-2] + prev_num[-1]
  prev_num << two_nums_ago
  
end

