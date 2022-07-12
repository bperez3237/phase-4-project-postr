class UsersController < ApplicationController

    private

    def user_params
        params.permit(:username, :password, :password_confirmation,:name)
    end
end
