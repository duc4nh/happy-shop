<template>

  <div>
    <div class="col-md-4 col-md-offset-1">
      <img class="product-img" src="https://static-reg.lximg.com/images/pictures/47569/zoom_e6cc572c9d9a6101ccdc4f84426af247a207285d_1493220447_KVD_LockIt_Foundation_Medium_57_warm_WEB.jpg" lazy="loaded">
    </div>
    <div class="col-md-6">
      <h2 class="product-name">{{ product.name }}</h2>
      <h4>{{ product.category }}</h4>
      <hr/>
      <p>Price: {{ product.price }}</p>
      <p>Promotion: {{ product.sale_text }}</p>
      
      <div class="product-card-rating rating-container">
        <div data-rateit-resetable="false" data-rateit-readonly="true" data-rateit-starwidth="14.7" data-rateit-starheight="12" data-rateit-value="4" data-rateit-ispreset="true" class="product-rating rateit">
          <div class="rateit-reset" style="display: none;"></div>
          <div class="rateit-range" style="width: 73.5px; height: 12px;">
            <div class="rateit-selected rateit-preset" style="height: 12px; width: 58.8px;"></div>
            <div class="rateit-hover" style="height:12px"></div>
          </div>
        </div>
      </div>

      <div class="add-to-bag">
        <div v-if="product.sold_out">
          <h4 class="out-of-stock">Out of Stock</h4>
        </div>
        <div v-else>
          <button class="btn btn-block btn-danger product-card-add-to-bag">Add To Bag</button>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Product',

    data() {
      return {
        product: {}
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
        axios.get('/api/v1/products/'+this.$route.params.id+'/')
        .then((resp) => {
          this.product = resp.data
          console.log(resp)
        })
        .catch((err) => {
          console.log(err)
        })
      }
    }
  }
</script>