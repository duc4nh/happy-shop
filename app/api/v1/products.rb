class V1::Products < Grape::API

  helpers ApiHelpers

  resources :products do
    desc 'Get products'
    params do
      optional :page, type: Integer, default: 1
      optional :per_page, type: Integer, default: 25
      optional :sort, type: String, default: 'price'
      optional :orientation, type: String, default: 'ASC'
      optional :upper_price, type: String
      optional :lower_price, type: String
      optional :categories, type: Array
    end
    get '/', jbuilder: 'v1/products/list' do
      @products = Product.filter(params[:upper_price], params[:lower_price], params[:categories]).sort_result(params).page(params[:page]).per(params[:per_page])
      @pagination = create_pagination_params(params[:page], params[:per_page], @products.total_pages, @products.total_count)
      status(200)
    end

    desc "Get product's detail"
    get '/:id', jbuilder: 'v1/products/detail' do
      @product = Product.find(params[:id])
      status(200)
    end
  
  end
end
