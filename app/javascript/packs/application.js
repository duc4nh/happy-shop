import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
      router,
      render: createEle => createEle(App)
  }).$mount('#app');
})