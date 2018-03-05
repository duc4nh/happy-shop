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
      waitlisted: false,
      onMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
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
    },
    waitlist: function(){
      this.waitlisted = !this.waitlisted;   
    }
  }
})

var products = new Vue({
  el: '#products',
  data: {
    products: [],
    pagination: {},
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
        that.pagination = response.data.pagination;
      }
    )
  },
  methods: {
    previousPage: function(){
      if (this.pagination.page > 1) {
        this.pagination.page -= 1;
        this.reloadProduct();
      }
    },
    nextPage: function(){
      if (this.pagination.page < this.pagination.total_pages) {
        this.pagination.page += 1;
        this.reloadProduct();
      }
    },
    filter: function(){
      this.pagination.page = 1;
      this.reloadProduct();
    },
    reloadProduct: function(){
      if (isNaN(this.upper_price)){
        this.upper_price = null;
      };
      if (isNaN(this.lower_price)){
        this.lower_price = null;
      };

      var that;
      that = this;
      this.$http.get('/api/v1/products', {page: this.pagination.page, upper_price: this.upper_price, lower_price: this.lower_price, orientation: this.orientation, category: this.category} ).then(
        function (response) {
          that.products = response.data.products;
          that.pagination = response.data.pagination;
          
        }
      ) 
    }
  }
});
