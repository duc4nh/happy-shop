FactoryGirl.define do
  factory :product do
    name Faker::Name.first_name 
    sold_out true 
    category Faker::Company.name
    under_sale true
    price Faker::Number.number(3)
    sale_price Faker::Number.number(3) 
    sale_text Faker::Company.name
  end
end
