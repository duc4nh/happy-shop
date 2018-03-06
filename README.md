## Happy Shop

A sample e-commerce website using API driven approach. 

Tech stack:

* Grape for JSON API

* Postgres database

* RSpec automation test

* VueJS for client-side frontend

## API documentation

Returns multiple products with attributes for each product.

```
GET /api/v1/products
```

Parameter

* `page` page number
* `per_page` number of item per page
* `sort` sorting field, default: 'price'
* `orientation` default: 'ASC'
* `upper_price` price filter
* `lower_price` price filter
* `category` category filter

Response
```
{
	"products":[
		{
			"id":66,
			"name":"Facial Spray 1",
			"sold_out":false,
			"category":"Makeup",
			"under_sale":false,
			"price":"$14.53",
			"sale_price":"$10.00",
			"sale_text":"50% OFF"
		}
	],
	"pagination":{"page":1,"per_page":9,"total_pages":4,"count":30}
}
```

Returns data for a single product with its attributes.

```
GET /api/v1/products/:id
```

Parameter

* `id` product ID

Response
```
{
	"id":66,
	"name":"Facial Spray 1",
	"sold_out":false,
	"category":"Makeup",
	"under_sale":false,
	"price":"$14.53",
	"sale_price":"$10.00",
	"sale_text":"50% OFF"
}
```

## Testing

To test, run `rspec`

## Deployment

Site is available at https://happy-shop-duc-nguyen.herokuapp.com/