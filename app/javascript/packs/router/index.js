import Vue from 'vue'
import Router from 'vue-router'
import Products from '../components/Products'
import Product from '../components/Product'
import Product_card from '../components/Product_card'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Products',
      component: Products
    },
    {
      path: '/products/:id',
      name: 'Product',
      component: Product
    },
    {
      path: '/p/:id',
      name: 'Product_card',
      component: Product_card
    }
  ]
})