require_relative "item"

class List
  attr_accessor :label

  def initialize(label)
    @label = label
    @items = []

  end

  def add_item(title, deadline, description = "")
    new_item = Item.new(title, deadline, description)

    if Item.valid_date?(deadline)
      @items << new_item
      return true
    else
      return false
    end

  end

  def size
    @items.length
  end

  def valid_index?(index)
    (0...self.size).each { |i| return true if i == index }

    false
  end

  def swap(index_1, index_2)
    if valid_index?(index_1) && valid_index?(index_2)
      @items[index_1], @items[index_2] = @items[index_2], @items[index_1]
      return true
    else
      return false
    end

  end

  def [](index)
    if valid_index?(index)
      @items[index]
    else
      return nil
    end
  end

  def priority
    @items.first
  end

  def print
    puts "-------------------------------"
    puts "           #{@label}           "
    puts "-------------------------------"
    puts "Index  | Item      |  Deadline"
    puts "-------------------------------"
        @items.each_with_index do |item, i|
        puts "#{i}  | #{item.title} | #{item.deadline}"
        end
    puts "-------------------------------"
  end

 def print_full_item(index)
    item = @items[index]

    puts "-------------------------------"
    puts " #{item.title} #{item.deadline}"
    puts " #{item.description}           "
    puts "-------------------------------"
 end

 def print_priority
    self.print_full_item(0)
 end

  def up(index, amount = 1) 

    times = amount 
    i = index 
    
    if self.valid_index?(index)
      while times > 0 && i > 0 
        @items[i], @items[i - 1] = @items[i - 1], @items[i] 
        
        times -= 1
        i -= 1
      end

      return true
    else
      return false
    end

  end

  def down(index, amount=1)
    times = amount
    i = index

    if self.valid_index?(index)
      while times > 0 && i < @items.length
        @items[i], @items[i+1] = @items[i+1], @items[i]

        times -= 1
        i += 1
      end

      return true
    else
      return false
    end
    
  end



end