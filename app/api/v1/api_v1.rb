# This class is the bootstrap for all API of a specific version

class V1::ApiV1 < Grape::API
  # This will ensure the URL of the API as: http://<host>/api/v1
  prefix 'api/v1'

  mount V1::Products
end
