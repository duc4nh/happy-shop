json.products do
  json.array! @products, partial: 'v1/products/_product', as: :product
end
json.partial! 'v1/_pagination', pagination: @pagination
