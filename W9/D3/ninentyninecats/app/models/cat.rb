require 'date'

class Cat < ApplicationRecord
  COLORS = ["white", "brown", "black", "tan", "gray"]
    validates :birth_date, presence: true
    validates :sex, inclusion: { in: %w(M F) }
    validates :color, inclusion: { in: Cat::COLORS }

    # include DateHelpers

    def age
        birth_year = self.birth_date.year
        age = 2020 - birth_year
    end
end
