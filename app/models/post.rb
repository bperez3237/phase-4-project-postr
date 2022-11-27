class Post < ApplicationRecord
    belongs_to :user
    belongs_to :location 
    has_many :likes
    has_many :replies
    has_many :reposts

    validates :text, presence: true
    validates :text, length: { maximum: 420 }
end
