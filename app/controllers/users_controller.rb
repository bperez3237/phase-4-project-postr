class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :auto_login]
    
    
    def create
        user = User.create(user_params)
        location = Location.find(params[:location_id])
        if user.valid?
            session[:user_id] = user.id
            session[:location_id] = location.id
            login_state = {user: user, location: location}
            render json: login_state, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        user = User.find(params[:id])
        user.update(user_params)
        if user.valid?
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end


    def show 
        user = User.find_by(username: params[:user])
        if user.nil?
            user = User.find_by(id: params[:user])
        end
        if user.present?
            render json: user
        else
            render json: { errors: "User not found" }, status: :not_found
        end
    end

    def user_info
        user = User.find(params[:id])
        liked_posts = user.likes.map {|like| like.post}
        result = {user: user, locations: user.locations, posts: user.posts, liked_posts: liked_posts}
        render json: result
    end

    def user_likes
        user = User.find_by(username: params[:username])
        posts_liked = Post.joins(:likes).where('likes.user_id = ?', user.id)
        render json: posts_liked, each_serializer: PostSerializer
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
