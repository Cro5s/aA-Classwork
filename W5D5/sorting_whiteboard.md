class Array
  def bsearch(target)
    return nil if self.length == 0

    half = self.length / 2

    case self[half] <=> target
    when 0
      return half
    when 1
      return self.take(half).bsearch(target)
    else
      right = self.drop(half + 1).bsearch(target)
      right.nil? ? nil : half + 1 + right
    end  
  end

  def bubble_sort(&prc)
    self.dup.bubble_sort!(&prc)
  end

  def bubble_sort!(&prc)
    prc ||= Proc.new { |a, b| a <=> b }

    sorted = false

    until sorted
      sorted = true

      (0...self.length - 1).each do |i|
        next if i + 1 == self.length

        j = i + 1

        if prc.call(self[i], self[j]) == 1
          self[i], self[j] = self[j], self[i]
          sorted = false
        end
      end
    end

    self
  end

  # Bubble_sort with no proc
  def bubble_sort
    self.dup.bubble_sort!
  end

  def bubble_sort!
    sorted = false

    until sorted
      sorted = true

      (0...self.length - 1).each do |i|
        next if i + 1 == self.length

        j = i + 1

        if self[i] > self[j]
          self[i], self[j] = self[j], self[i]
          sorted = false
        end
      end
    end

    self
  end

  def quick_sort(&prc)
    return self if self.length <= 1

    prc ||= Proc.new { |a, b| a <=> b }

    pivot = self.first
    left = self[1..-1].select { |ele| prc.call(ele, pivot) == -1 }
    right = self[1..-1].select { |ele| prc.call(ele, pivot) != -1 }

    left.quick_sort(&prc) + [pivot] + right.quick_sort(&prc)
  end

  def merge_sort(&prc)
    return self if self.length <= 1

    prc ||= Proc.new { |a, b| a <=> b }

    half = self.length / 2
    sorted_left = self.take(half).merge_sort(&prc)
    sorted_right = self.drop(half).merge_sort(&prc)

    merge(sorted_left, sorted_right, &prc)
  end

  def merge(left, right, &prc)
    merged = []

    until left.empty? || right.empty?
      case prc.call(left.first, right.first)
      when (-1..0)
        merged << left.shift
      else
        merged << right.shift
      end
    end

    merged += left + right
  end

end

def jumble_sort(str, alphabet = nil)
  alphabet ||= ("a".."z").to_a

  sorted = false

  until sorted
    sorted = true

    (0...str.length - 1).each do |i|
      if alphabet.index(str[i]) > alphabet.index(str[i + 1])
        str[i], str[i + 1] = str[i + 1], str[i]
        sorted = false
      end
    end
  end 

  str
end