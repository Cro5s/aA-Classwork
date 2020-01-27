Rails.application.routes.draw do
  # get 'bands/index'
  # get 'bands/create'
  # get 'bands/new'
  # get 'bands/edit'
  # get 'bands/show'
  # get 'bands/update'
  # get 'bands/destroy'
  # get 'sessions/new'
  # get 'sessions/create'
  # get 'sessions/destroy'
  # get 'users/new'
  # get 'users/create'

  resources :users, only: [:show, :new, :create]
  resource :session, only: [:new, :create, :destroy]
  resources :band

  # root to: redirect(name of home page here)
end
