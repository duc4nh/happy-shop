Vue.http.interceptors.push({
  request: function (request) {
    Vue.http.headers.common['X-CSRF-Token'] = $('[name="csrf-token"]').attr('content');
    return request;
  },
  response: function (response) {
    return response;
  }
});

Vue.component('product-item', {
  template: '#product-item',
  props: {
    product: Object
  },
  data: function () {
    return {
      hover: false,
      wishlisted: false,
      errors: {}
    }
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
    }
  }
})

var products = new Vue({
  el: '#products',
  data: {
    products: [],
    upper_price,
    lower_price,
    orientation,
    category,
    errors: {}
  },
  ready: function() {
    var that;
    that = this;
    this.$http.get('/api/v1/products').then(
      function (response) {
        that.products = response.data.products;
      }
    )
  },
  methods: {
    reloadProduct: function(){
      if (this.category == "all"){
        this.category = null;
      };
      if (isNaN(this.upper_price)){
        this.upper_price = null;
      };
      if (isNaN(this.lower_price)){
        this.lower_price = null;
      };

      var that;
      that = this;
      this.$http.get('/api/v1/products', {upper_price: this.upper_price, lower_price: this.lower_price, orientation: this.orientation, category: this.category} ).then(
        function (response) {
          that.products = response.data.products;
        }
      ) 
    }
  }
});
