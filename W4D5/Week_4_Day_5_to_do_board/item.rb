class Item

    attr_accessor :title, :description
    attr_reader :deadline
    
    def self.valid_date?(date_string)
        parts = date_string.split("-")
        year, month, day = parts
        # year = parts[0]
        # month = parts[1]
        # day = parts[2]

        if year.length != 4
            return false
        end

        if !(month.to_i >= 1 && month.to_i <= 12) || month.length != 2
            return false
        end

        if !(day.to_i >= 1 && day.to_i <= 31) || day.length != 2
            return false
        end

        true
    end

    def initialize(title, deadline, description)
        @title = title
        @deadline = deadline
        @description = description

        raise "Not a valid date!" if !Item.valid_date?(@deadline)
    end       

    def deadline=(date)
        if Item.valid_date?(date)
            self.deadline = (date)
        else
            raise 'not a valid date'
        end
    end


end