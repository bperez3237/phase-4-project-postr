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
        user_by_username = User.find_by(username: params[:username]) 
        user_by_id = User.find(params[:username])
        if user_by_username
            render json: user_by_username
        elsif user_by_id
            render json: user_by_id
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
