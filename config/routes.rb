Rails.application.routes.draw do
  resources :posts, only: [:index, :create, :destroy, :update]
  resources :locations, only: [:show, :index]
  resources :likes, only: [:create, :destroy]
  

  get '/user-info/:id', to: 'users#user_info'

  post '/signup', to: 'users#create'
  get '/me', to: 'users#auto_login'
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  


  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
      
end
