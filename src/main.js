import Vue from 'vue';
import App from './App.vue';
import store from './stores';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
/* eslint-disable vue/order-in-components */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
