<template>
  
  <div v-on:mouseenter="showBtn" v-on:mouseleave="hideBtn" class="col-md-3 col-md-offset-1 col-xs-3 col-xs-offset-1">
    <div class="product-card">
      <router-link :to="{ path: '/products/' + product.id }" class="product-card-image-container">
        <div v-if="product.sold_out" class="out-of-stock">OUT OF STOCK</div>
        <img class="product-card-image ga-image-ready" src="https://static-reg.lximg.com/images/pictures/47569/zoom_e6cc572c9d9a6101ccdc4f84426af247a207285d_1493220447_KVD_LockIt_Foundation_Medium_57_warm_WEB.jpg" lazy="loaded">
      </router-link>

      <div v-if="(hover || onMobile)">
        <div v-on:click="wishlist">
          <div v-if="wishlisted" class="product-card-heart-filled"></div>
          <div v-else class="product-card-heart"></div>
        </div>
      </div>
      <div v-if="hover">
        <div class="product-card-actions">
          <div v-if="product.sold_out" @click="waitlist">
            <div v-if="waitlisted"><button  class="btn btn-sm btn-block btn-default product-card-wait-listed">Waitlisted</button></div>
            <div v-else><button class="btn btn-sm btn-block btn-default product-card-add-to-wait-list">Waitlist me</button></div>
          </div>
          <div v-else><button class="btn btn-sm btn-block btn-danger product-card-add-to-bag">Add To Bag</button></div>
        </div>
      </div>

      <router-link :to="{ path: '/products/' + product.id }" class="product-card-description-container">
        <div class="product-card-description">
          <p class="product-card-label-new-arrival">NEW<span class='sub-label'> | LIMITED EDITION</span></p>
          <p class="product-card-brand">{{ product.name }}</p>
          <p class="product-card-product">{{ product.category }}</p>
          <div>
             <p class="product-card-price">{{ product.price }}</p>
          </div>
          <div class="product-card-rating rating-container">
            <div data-rateit-resetable="false" data-rateit-readonly="true" data-rateit-starwidth="14.7" data-rateit-starheight="12" data-rateit-value="4" data-rateit-ispreset="true" class="product-rating rateit">
              <div class="rateit-reset" style="display: none;"></div>
              <div class="rateit-range" style="width: 73.5px; height: 12px;">
                <div class="rateit-selected rateit-preset" style="height: 12px; width: 58.8px;"></div>
                <div class="rateit-hover" style="height:12px"></div>
              </div>
             </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
  
</template>

<script>
  export default {
    name: 'Product_card',

    data() {
      return {
        hover: false,
        wishlisted: false,
        waitlisted: false,
        onMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        errors: {}
      }
    },

    props: {
      product: Object
    },

    created() {

    },

    watch: {

    },

    methods: {
      showBtn: function(){
      this.hover = true;   
      },
      hideBtn: function(){
        this.hover = false;   
      },
      wishlist: function(){
        this.wishlisted = !this.wishlisted;   
      },
      waitlist: function(){
        this.waitlisted = !this.waitlisted;   
      }
    }
  }
</script>
