import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import Panel from './components/globals/Panel'

import store from './store/store'
import {sync} from 'vuex-router-sync'

Vue.config.productionTip = false

Vue.component('panel', Panel)

sync(store, router)

new Vue({
  render: h => h(App),
  vuetify,
  router,
  store
}).$mount('#app')
