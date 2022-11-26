class RepliesController < ApplicationController

    def show
        @reply = Reply.find(params[:id])
        render json: @reply
    end

    def index
        @replies = Reply.all
        render json: @replies
    end

    def create 
        @reply = Reply.create(reply_params)
        if @reply.valid?
            render json: @reply, status: :created
        else
            render json: { error: 'failed to create reply' }, status: :not_acceptable
        end
    end

end
