class Location < ApplicationRecord
    has_many :posts
    has_many :users, through: :posts

    def with_posts
        new_obj = {id: self.id, name: self.name, country: self.country, coordinates: self.coordinates, created_at: self.created_at, updated_at: self.updated_at, posts: self.posts}
        new_obj
    end
end
