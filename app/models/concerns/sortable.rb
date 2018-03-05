module Sortable
  extend ActiveSupport::Concern

  included do
    scope :sort_result, ->(params, default = nil, default_order = nil) do
      params = params.deep_symbolize_keys
      sort_field = params[:sort] || default || :id
      orientation = params[:orientation] || default_order || :desc
      data = {}
      data[sort_field.to_sym] = orientation.to_sym
      return order(data) if has_attribute?(sort_field.to_sym)
      return send("sort_#{sort_field}", orientation) if respond_to?("sort_#{sort_field}")
      all
    end
  end
end
