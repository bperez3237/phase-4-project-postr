class LoginsController < ApplicationController

    def auto_login
        user = User.find_by(id: session[:user_id])
        location = Location.find_by(id: session[:location_id])
        if user && location
            login_state = {user: user, location: location}
            render json: login_state
        else
            render json: { error: 'User not found'}, status: :unauthorized
        end
    end
end
