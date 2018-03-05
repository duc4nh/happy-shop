Product.destroy_all

(1..10).each do |n|
  Product.create(
    name: "Sugar Lip #{n}",
    sold_out: true,
    category: 'tools',
    under_sale: false,
    price: 1000 + Random.rand(9000),
    sale_price: 2500,
    sale_text: '50% OFF'
  )

  Product.create(
    name: "Facial Spray #{n}",
    sold_out: false,
    category: 'makeup',
    under_sale: false,
    price: 1000 + Random.rand(9000),
    sale_price: 2000,
    sale_text: '50% OFF'
  )

  Product.create(
    name: "Mist Spray #{n}",
    sold_out: false,
    category: 'brushes',
    under_sale: false,
    price: 1000 + Random.rand(9000),
    sale_price: 1000,
    sale_text: '50% OFF'
  )
end
