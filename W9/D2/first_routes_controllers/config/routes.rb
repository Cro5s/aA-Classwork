Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users do
    # provides a route to get all the artworks for a given user.
    resources :artworks, only: :index
  end

  # get '/artworks', to: 'artworks#index'
  post '/artworks', to: 'artworks#create'
  get '/artworks/:id', to: 'artworks#show'
  patch '/artworks/:id', to: 'artworks#update'
  put '/artworks/:id', to: 'artworks#update'
  delete '/artworks/:id', to: 'artworks#destroy'

  # index: GET /users/:user_id/artworks


  resources :artworkshares, only: [:create, :destroy, :index]
  # post '/artworkshares', to: 'artworkshares#create'
  # delete '/artworkshares/:id', to: 'artworkshares#destroy'
end
