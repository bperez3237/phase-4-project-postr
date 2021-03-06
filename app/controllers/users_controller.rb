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

    def auto_login
        user = User.find_by(id: session[:user_id])
        location = Location.find_by(id: session[:location_id])
        if user
            result = {user: user, location: location}
            render json: result
        else
            render json: { error: 'User not found'}, status: :unauthorized
        end
    end

    def user_info
        user = User.find(params[:id])
        liked_posts = user.likes.map {|like| like.post}
        result = {user: user, locations: user.locations, posts: user.posts, liked_posts: liked_posts}
        render json: result
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :name)
    end
end
