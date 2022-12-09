Rails.application.routes.draw do
  # resources :reposts
  resources :replies, only: [:index, :show, :create]
  resources :posts, only: [ :create, :destroy, :show, :index ]
  resources :locations, only: [:index]
  resources :likes, only: [:create, :destroy]
  resources :users, only: [:update]

  resources :locations, only: [:show] do
    resources :posts, only: [:show, :index, :update]
  end

  get '/users/:user', to: 'users#show'
  get '/users/:username/posts', to: 'posts#index'
  get '/users/:username/likes', to: 'users#user_likes'
  

  get '/user-info/:id', to: 'users#user_info'

  post '/signup', to: 'users#create'
  get '/me', to: 'logins#auto_login'
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  

  get '/random-three-users', to: 'users#random_three'


  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
      
end
