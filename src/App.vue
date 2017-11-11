<template lang="pug">
  #app
    p(v-show="showValue") {{ value}}  <!-- display none-->
    p(v-if="showValue") {{ value}} <!-- No aparece el componente p-->
    p(v-else-if="false") {{ 'algo mas' }} <!-- else if-->
    p(v-else) {{ 'default else' }} <!-- else-->

    ul
      li(v-for="item in items") {{ item }}

    div
      h1 Contador
      p {{ count }} {{stringTest}}
      p {{ getDouble }}

      div
        button(@click="increment") +
        button(@click="increment10") + 10
        button(@click="decrement") -
        button(@click="incrementAsync") + Async
      div
        Child ========================
</template>

<script>
// solo importo este objecto desde la librería
import { mapState, mapMutations, mapGetters } from 'vuex'
import Child from './Child.vue'
export default {
  name: 'app',

  components: {Child},
  // computed: {
  //   count () {
  //     return this.$store.state.count
  //   }
  // },
  // computed: mapState(['count']),
  computed: {
    ...mapState(['count']),

    ...mapGetters(['getDouble']),

    stringTest () {
      return this.test
    }

    // double () {
    //   return this.$store.getters.getDouble
    // }
  },

  data () {
    return {
      msg: 'Hola Vue',
      showValue: false,
      value: 'Thing',
      items: [1, 2, 3, 4, 5],
      test: 'test'
    }
  },

  methods: {
    ...mapMutations(['increment', 'decrement']),
    // increment () {
    //   // que se va hacer
    //   this.$store.commit('increment')
    //   // avisar que se va hacer
    // },
    //
    // decrement () {
    //   this.$store.commit('decrement')
    // },

    increment10 () {
      // que se va hacer
      this.$store.commit('increment', {
        number: 10
      })
      // avisar que se va hacer
    },

    incrementAsync () {
      this.$store.dispatch('incrementAsync', {
        number: 2
      }).then(() => {
        console.log('Action termino')
      })
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
