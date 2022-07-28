class LocationsController < ApplicationController
    skip_before_action :authorized, only: [:index,:show]

    def index
        locations = Location.all
        render json: locations
    end
    
    
end
