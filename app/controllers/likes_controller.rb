class LikesController < ApplicationController

    def create
        like = Like.find_by(user_id: params[:user_id], post_id: params[:post_id])
        if like
            render json: {error: 'already liked'}
        else
            like = Like.create(user_id: params[:user_id], post_id: params[:post_id])
            location = Location.find(params[:location_id])
            posts = location.posts
            render json: posts, each_serializer: PostSerializer
        end
    end

    def destroy
        like = Like.find(params[:id])
        like.destroy
        location = Location.find(params[:location_id])
        posts = location.posts
        render json: posts, each_serializer: PostSerializer
    end
end
