class Band < ApplicationRecord
  validates :name, presence: { message: "Band name can't be blank"}
end
