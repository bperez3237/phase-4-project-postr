class PostsController < ApplicationController
    skip_before_action :authorized, only: [:show]

    def index
        if params[:location_id]
            location = Location.find(params[:location_id])
            posts = location.posts 
        elsif params[:username]
            user = User.find_by(username: params[:username])
            if user
                posts = user.posts
            else 
                return render json: {error: "User not found"}, status: :not_found
            end
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
        if post.valid?
            render json: post, serializer: PostSerializer
        else
            render json: {error: "Post not created"}, status: :not_acceptable
        end
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
