import Vue from 'vue'
import VueRouter from 'vue-router'

import lodash from 'lodash'
import VueLodash from 'vue-lodash'

import App from './App.vue'

import numberToCurrency from '@/filters/number_to_currency'
import blur from '@/directives/blur'

import routes from '@/routes'
import EventBus from '@/plugins/event-bus'

Vue.use(VueRouter)
Vue.use(EventBus)
Vue.use(VueLodash, lodash)
Vue.use(numberToCurrency)
Vue.use(blur)

const router = new VueRouter({ routes })

var vue = new Vue({
  el: '#app',
  data: { car: [] },
  render: h => h(App),
  router
})

export default vue
