class LikesController < ApplicationController

    def create
        like = Like.find_by(user_id: params[:user_id], post_id: params[:post_id])
        if like
            render json: {error: 'already liked'}
        else
            like = Like.create(user_id: params[:user_id], post_id: params[:post_id])
            render json: like
        end
    end

    def destroy
        like = Like.find(params[:id])
        like.destroy
        head :no_content
    end
end
