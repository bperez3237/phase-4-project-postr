class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :auto_login]
    
    
    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end


    def show 
        user = User.find_by(username: params[:username])
        render json: user
    end

    def user_info
        user = User.find(params[:id])
        liked_posts = user.likes.map {|like| like.post}
        result = {user: user, locations: user.locations, posts: user.posts, liked_posts: liked_posts}
        render json: result
    end

    def user_posts
        user = User.find_by(username: params[:username])
        posts = user.posts
        render json: posts, include: [:user, :likes]
    end

    def user_likes
        user = User.find_by(username: params[:username])
        posts_liked = user.likes.map {|like| like.post}
        render json: posts_liked, include: [:user, :likes]
    end

    def random_three
        users = User.all.sample(3)
        render json: users
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :name, :avatar, :banner)
    end
end
