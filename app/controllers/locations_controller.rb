class LocationsController < ApplicationController
    skip_before_action :authorized, only: [:index,:show]

    def index
        locations = Location.all.map{|location| location.with_posts}
        render json: locations
    end
    
    def show
        location = Location.find(params[:id]).with_posts
        render json: location
    end
    
end
