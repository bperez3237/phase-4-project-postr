class Post < ApplicationRecord
    belongs_to :user
    belongs_to :location 

    validates :text, presence: true
end
