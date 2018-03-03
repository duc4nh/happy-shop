# == Schema Information
#
# Table name: products
#
#  id         :integer          not null, primary key
#  name       :string
#  sold_out   :boolean
#  category   :string
#  under_sale :boolean
#  price      :integer
#  sale_price :integer
#  sale_text  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Product < ApplicationRecord
  include Sortable

  validates :name, :sold_out, :category, :under_sale, :price, :sale_price, :sale_text, presence: true
end
