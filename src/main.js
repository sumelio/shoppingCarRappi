import Vue from 'vue'
import App from './App.vue'
import EventBus from '@/plugins/event-bus'

Vue.use(EventBus)

var vue = new Vue({
  el: '#app',
  data: { car: [] },
  render: h => h(App)
})

export default vue
