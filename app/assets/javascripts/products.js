Vue.http.interceptors.push({
  request: function (request) {
    Vue.http.headers.common['X-CSRF-Token'] = $('[name="csrf-token"]').attr('content');
    return request;
  },
  response: function (response) {
    return response;
  }
});

Vue.component('product-row', {
  template: '#product-row',
  props: {
    product: Object
  },
  data: function () {
    return {
      errors: {}
    }
  },
  methods: {
    
  }
})

var products = new Vue({
  el: '#products',
  data: {
    products: [],
    errors: {}
  },
  ready: function() {
    var that;
    that = this;
    this.$http.get('/api/v1/products', {orientation: 'DESC'} ).then(
      function (response) {
        that.products = response.data.products;
        console.log(response.data.products);
      }
    )
  },
  methods: {
    
  }
});
