import Vue from 'vue'
import App from './App'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
