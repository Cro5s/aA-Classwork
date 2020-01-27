Rails.application.routes.draw do
  get 'sessions/new'
  get 'sessions/create'
  get 'sessions/destroy'
  get 'users/new'
  get 'users/create'

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  # root to: redirect(name of home page here)
end
