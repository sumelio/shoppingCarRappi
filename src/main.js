import Vue from 'vue'
import App from './App.vue'
import ChildCOmponent from './ChildComponent.vue'

Vue.component('mychild', ChildCOmponent)
new Vue({
  el: '#app',
  render: h => h(App)
})
