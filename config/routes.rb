Rails.application.routes.draw do
  resources :posts, only: [:index]
  # resources :users, only: [:create,:show]
  resources :locations, only: [:show]
  


  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  


  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
      
end
