class SessionsController < ApplicationController
    skip_before_action :authorized, only: :create

    def create
        user = User.find_by(username: params[:username])
        location = Location.find(params[:location_id])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            session[:location_id] = location.id
            login_state = {user: user, location: location}
            render json: login_state, status: :created
        else
            render json: { errors: "Invalid username or password" }, status: :unauthorized
        end
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        location = Location.find_by(id: session[:location_id])
        if user && location
            session.delete :user_id
            session.delete :location_id
            head :no_content
        else
            render json: {errors: user.errors.full_messages}, status: :unauthorized
        end
    end
end
