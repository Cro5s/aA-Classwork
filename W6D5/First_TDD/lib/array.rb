require 'byebug'

class Array

    def my_uniq
        results = []

        self.each do |el|
            results.include?(el) ? next : results << el 
        end 

        results 
    end 

    def two_sum 
        sum = [] 

        (0...self.length).each do |i|
            ((i+1)..self.length - 1).each do |j|
                sum << [i, j] if (self[i] + self[j] == 0)
            end 
        end 

        sum 
    end 
end 