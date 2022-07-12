Rails.application.routes.draw do
  resources :posts, only: [:index]
  resources :users, only: [:create,:show]
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  


  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
      
end
