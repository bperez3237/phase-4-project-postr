class Location < ApplicationRecord
    has_many :posts
    has_many :users, through: :posts

    def with_posts
        new_self_posts = self.posts.map{|post| {id: post.id, user_id: post.user_id, location_id: post.location_id, text: post.text, created_at: post.created_at, updated_at: post.updated_at, username: User.find(post.user_id).username}}
        new_obj = {id: self.id, name: self.name, country: self.country, coordinates: self.coordinates, created_at: self.created_at, updated_at: self.updated_at, posts: new_self_posts}
        new_obj
    end
end
