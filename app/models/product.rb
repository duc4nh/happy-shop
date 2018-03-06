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

  validates :name, :category, :price, :sale_price, :sale_text, presence: true
  validates_inclusion_of :sold_out, :under_sale, in: [true, false]

  def self.filter(upper_price, lower_price, category)
    products = all
    products = products.where('category = ?', category) if category.present? && !(category == 'all')
    products = products.where('price <= ?', upper_price * 100) if upper_price.present?
    products = products.where('price >= ?', lower_price * 100) if lower_price.present?
    products
  end

  def formated_price(amount)
    "$#{sprintf('%.2f', amount / 100.0)}"
  end

  def as_json
    {
      id: id,
      name: name,
      sold_out: sold_out,
      category: category.capitalize,
      under_sale: under_sale,
      price: formated_price(price),
      sale_price: formated_price(sale_price),
      sale_text: sale_text
    }
  end
end
