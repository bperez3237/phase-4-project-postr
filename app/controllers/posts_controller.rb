class PostsController < ApplicationController

    def index
        if params[:location_id]
            location = Location.find(params[:location_id])
            posts = location.posts 
        else 
            posts = Post.all 
        end
        render json: posts, include: [:user, :likes]
    end

    def show
        post = Post.find(params[:id])
        render json: post, include: [:user, :likes]
    end


    def create
        post = Post.create(user_id: params[:user_id], location_id: params[:location_id], text: params[:text])
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

    def update
        post = Post.find(params[:id])
        # post.update(likes: post.likes + params[:change_likes])
        location = Location.find(post.location_id).with_posts
        render json: location
    end
end
