class PostsController < ApplicationController

    def index
        if params[:location_id]
            location = Location.find(params[:location_id])
            posts = location.posts 
        elsif params[:username]
            user = User.find_by(username: params[:username])
            posts = user.posts
        else 
            posts = Post.all 
        end
        render json: posts, each_serializer: PostSerializer
    end

    def show
        post = Post.find(params[:id])
        render json: post, serializer: PostSerializer
    end


    def create
        post = Post.create(user_id: params[:user_id], location_id: params[:location_id], text: params[:text])
        location = Location.find(params[:location_id])
        posts = location.posts
        render json: posts, serializer: PostSerializer, status: :created
    end

    def destroy
        post = Post.find(params[:id])
        post.destroy
        head :no_content
    end


    def update
        post = Post.find(params[:id])
        post.update(text: params[:text])
        location = Location.find(params[:location_id])
        posts = location.posts
        render json: posts, include: [:user, :likes]
    end
end
