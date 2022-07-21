class PostsController < ApplicationController
    require 'byebug'
    def index
        posts = Post.all 
        render json: posts, include: [:user,:location]
    end

    def create
        post = Post.create(user_id: params[:user_id], location_id:params[:location_id], text: params[:text])
        location = Location.find(params[:location_id]).with_posts
        render json: location, status: :created
    end

    def destroy
        post = Post.find(params[:id])
        location_id = post.location_id
        post.destroy
        location = Location.find(location_id).with_posts
        render json: location
    end

end
