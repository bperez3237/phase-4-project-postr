class PostsController < ApplicationController
    def index
        posts = Post.all 
        render json: posts, include: [:user,:location]
    end

    def create
        post = Post.create(user_id: params[:user_id], location_id:params[:location_id], text: params[:text])
        location = Location.find(params[:location_id])
        render json: location, include: :posts, status: :created
    end
end
