import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import './assets/theme/index.css'
import Api from './utils/axios'
import constant from './utils/constant'
Vue.prototype.$axios = Api
Vue.prototype.$constant = constant

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
