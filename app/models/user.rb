class User < ApplicationRecord
    has_many :posts
    has_many :locations, through: :posts
end
