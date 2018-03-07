Rails.application.routes.draw do
  root to: 'products#index'
  mount API => '/'
end
