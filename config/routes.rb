Rails.application.routes.draw do
  get 'app/*other', to: 'app#index'
  get 'app', to: 'app#index'

  namespace 'api' do
    namespace 'v1' do
      resources :products, only: [:show, :index]
    end
  end
end
