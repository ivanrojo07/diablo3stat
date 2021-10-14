import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Bootstrap Library
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  methods: {
    init () {
      store.dispatch('oauth/getToken', null, { root: true })
      console.log('hola desde el init 👌')
    }
  },
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
