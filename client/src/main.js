import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from './routes/router';
// import store from './vuex/store';

Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(App),
}).$mount('#app')
