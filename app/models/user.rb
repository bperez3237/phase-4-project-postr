class User < ApplicationRecord
    has_many :posts
    has_many :locations, through: :posts
    has_many :likes
    has_secure_password

    has_one_attached :avatar
    has_one_attached :banner



    validates :username, presence: true
    validates :username, uniqueness: true
end
