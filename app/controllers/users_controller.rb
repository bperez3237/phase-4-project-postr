class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :show]
    
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
        user = User.find_by(id: session[:user_id])
        location = Location.find_by(id: session[:location_id])
        if user
            result = {user: user, location: location.with_posts}
            render json: result
        else
            render json: { error: 'User not found'}, status: :unauthorized
        end
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :name)
    end
end
