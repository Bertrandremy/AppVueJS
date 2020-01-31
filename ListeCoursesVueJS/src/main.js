import Vue from 'vue'
import App from './App'
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueMoment, {
  moment,
})
moment.locale('fr');
Vue.config.productionTip = false

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

new Vue({
  // el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')


