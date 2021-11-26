Rails.application.routes.draw do
  devise_for :users
  root 'posts#index'
  resources :users, only:[:show, :edit, :update]
  resources :posts do
    resource :favorite, only:[:create, :destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
