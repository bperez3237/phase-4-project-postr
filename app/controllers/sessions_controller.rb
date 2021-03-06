class SessionsController < ApplicationController
    skip_before_action :authorized, only: :create

    def create
        user = User.find_by(username: params[:username])
        location = Location.find(params[:location_id])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            session[:location_id] = location.id
            render json: user, status: :created
        else
            render json: { errors: "Invalid username or password" }, status: :unauthorized
        end
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        if user
            session.delete :user_id
            head :no_content
        else
            render json: {errors: user.errors.full_messages}, status: :unauthorized
        end
    end
end
