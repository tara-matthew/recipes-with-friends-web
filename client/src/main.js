import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

import store from './store/store'
import {sync} from 'vuex-router-sync'

Vue.config.productionTip = false

sync(store, router)

new Vue({
  render: h => h(App),
  vuetify,
  router,
  store
}).$mount('#app')
