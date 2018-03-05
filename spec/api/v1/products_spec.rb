require 'rails_helper'

require "#{Rails.root}/spec/support/api_helpers"

RSpec.configure do |c|
  c.include Helpers
end

RSpec.describe V1::Products do
  let (:product) { create(:product) }

  context 'Get product detail' do
    it 'available product detail' do
      get "/api/v1/products/#{product.id}", params: nil
      expect(response.status).to eq(200)
    end

    it 'not available product detail' do
      get '/api/v1/products/0', params: nil
      expect(response.status).to eq(404)
    end
  end

  context 'Get product list' do
    it 'return product list' do
      get '/api/v1/products', params: nil
      expect(response.status).to eq(200)
    end
  end
end
