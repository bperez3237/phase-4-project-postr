Rails.application.routes.draw do
  resources :posts, only: [ :create, :destroy ]
  resources :locations, only: [:index]
  resources :likes, only: [:create, :destroy]

  resources :locations, only: [:show] do
    resources :posts, only: [:show, :index, :update]
  end
  

  get '/user-info/:id', to: 'users#user_info'

  post '/signup', to: 'users#create'
  get '/me', to: 'users#auto_login'
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  get '/random-three-users', to: 'users#random_three'

  get '/locations/:location_id/four_likes', to: 'posts#four_likes'


  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
      
end
