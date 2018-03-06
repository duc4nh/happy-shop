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
      errors: {}
    }
  },
  methods: {
  }
})

var product = new Vue({
  el: '#product',
  data: {
  	product: {},
    errors: {}
  },
  mounted: function() {
    product_id = window.location.pathname.split("/")[2];

    var that;
    that = this;
    this.$http.get('/api/v1/products/' + product_id).then(
      function (response) {
        that.product = response.data;
      }
    )
  },
  methods: {
  }
});
