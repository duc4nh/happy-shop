<template>

  <div class="row">
    <div class="col-md-3 col-md-offset-0 col-xs-10 col-xs-offset-1">
      <div class="col-md-offset-3">
        <div class="form-group">
          <label for="orientation">Sort</label>
          <select class="form-control" id="orientation" v-model="orientation" @change="filter">
            <option class="form-option" value="asc">Price: Low to High</option>
            <option class="form-option" value="desc">Price: High to Low</option>
          </select>
        </div>

        <div class="form-group">
          <label for="category">Category</label>
          <select class="form-control" id="category" v-model="category" @change="filter">
            <option class="form-option" value="all">All</option>
            <option class="form-option" value="makeup">Makeup</option>
            <option class="form-option" value="tools">Tools</option>
            <option class="form-option" value="brushes">Brushes</option>
          </select>
        </div>

        <div class="form-group">
          <label for="lower_price">Lower Price</label>
          <input type="number" step=".01" class="form-control" id="lower_price" placeholder="0.00" v-model.number="lower_price" @change="filter">
        </div>

        <div class="form-group">
          <label for="upper_price">Upper Price</label>
          <input type="number" step=".01" class="form-control" id="upper_price" placeholder="100.00" v-model.number="upper_price" @change="filter">
        </div>
      </div>
    </div>

    <div class="col-md-9 col-xs-12">
      <div class="col-md-12 col-xs-12 pagination">
        <div class="pull-right">
          <button @click="previousPage" class="btn btn-default">Previous</button>
          <span class="page-span">Page {{ pagination.page }} of {{ pagination.total_pages}} - Total {{ pagination.count}} items</span>
          <button @click="nextPage" class="btn btn-default">Next</button>
        </div>
      </div>
      
      <div
        is="product_card"
        v-for="product in products"
        :product="product">
      </div>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  import Product_card from '../components/Product_card'

  export default {
    name: 'Products',

    components: {
      'product_card': Product_card
    },

    data() {
      return {
        products: [],
        pagination: {},
        upper_price: '',
        lower_price: '',
        orientation: 'asc',
        category: 'all',
      }
    },

    created() {
      this.fetchData()
    },

    watch: {
      '$route': 'fetchData'
    },

    methods: {
      fetchData() {
        axios.get('/api/v1/products', {
          params: {
            page: this.pagination.page,
            upper_price: this.upper_price,
            lower_price: this.lower_price,
            orientation: this.orientation,
            category: this.category
          }
        })
        .then((resp) => {
          this.products = resp.data.products;
          this.pagination = resp.data.pagination;
          console.log(resp)
        })
        .catch((err) => {
          console.log(err)
        })
      },
      previousPage: function(){
        if (this.pagination.page > 1) {
          this.pagination.page -= 1;
          this.fetchData();
        }
      },
      nextPage: function(){
        if (this.pagination.page < this.pagination.total_pages) {
          this.pagination.page += 1;
          this.fetchData();
        }
      },
      filter: function(){
        this.pagination.page = 1;
        this.fetchData();
      }
    }
  }
</script>
