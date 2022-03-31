import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
Vue.config.productionTip = false

const router = new VueRouter({
  mode:'history'
})
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
