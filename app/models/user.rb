class User < ApplicationRecord
    has_many :posts
    has_many :locations, through: :posts
    has_secure_password


    validates :username, presence: true
    validates :username, uniqueness: true
end
