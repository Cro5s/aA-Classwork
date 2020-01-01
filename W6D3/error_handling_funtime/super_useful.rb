

# PHASE 2
def convert_to_int(str)

  begin
    Integer(str)
  rescue ArgumentError => e
    puts "Argument is not valid"
    return nil 
  rescue TypeError => e
    puts "Input must be a string"
    return nil 
  end 
end 

# PHASE 3
FRUITS = ["apple", "banana", "orange"]

def reaction(maybe_fruit)
  if FRUITS.include? maybe_fruit
    puts "OMG, thanks so much for the #{maybe_fruit}!"
  elsif maybe_fruit == "coffee"
      raise CoffeeError
  else
      raise FruitError 
  end
end
  
class CoffeeError < StandardError
  def message
    puts "I like coffee, but it's not a fruit!"
  end
end

class FruitError < StandardError
  def message
    puts "THIS IS NOT A FRUIT"
  end
end

def feed_me_a_fruit
  puts "Hello, I am a friendly monster. :)"

  begin 
    puts "Feed me a fruit! (Enter the name of a fruit:)"
    maybe_fruit = gets.chomp
    reaction(maybe_fruit)
  rescue CoffeeError => e
    e.message
    retry
  rescue FruitError => e
    e.message 
  end

end  



# PHASE 4
class BestFriend
  def initialize(name, yrs_known, fav_pastime)
    @name = name
    @yrs_known = yrs_known
    @fav_pastime = fav_pastime
    
    raise "Haven't known you long enough" if @yrs_known < 5
    raise "Please enter a name" if @name.length <= 0
    raise "Please enter a pastime" if @fav_pastime.length <= 0
    
    # begin 
    #   if @name.length <= 0
    #     raise LabelError
    #   elsif @fav_pastime.length <= 0
    #     raise PastTimeError
    #   elsif @yrs_known < 5
    #     raise TimeError
    #   end

    # rescue LabelError => e
    #   e.message
    # rescue PastTimeError => e
    #   e.message
    # rescue TimeError => e
    #   e.message
    # end

  end

  
  def talk_about_friendship
    puts "Wowza, we've been friends for #{@yrs_known}. Let's be friends for another #{1000 * @yrs_known}."
  end
  
  def do_friendstuff
    puts "Hey bestie, let's go #{@fav_pastime}. Wait, why don't you choose. 😄"
  end
  
  def give_friendship_bracelet
    puts "Hey bestie, I made you a friendship bracelet. It says my name, #{@name}, so you never forget me." 
  end
end

class LabelError < StandardError
  def message
    puts "Please enter a name"
  end
end

class TimeError < StandardError
  def message
    puts "Haven't known you long enough"
  end
end

class PastTimeError < StandardError
  def message
    puts "Please enter a pastime"
  end
end




