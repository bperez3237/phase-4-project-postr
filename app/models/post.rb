class Post < ApplicationRecord
    belongs_to :user
    belongs_to :location 
    has_many :likes

    validates :text, presence: true
end
