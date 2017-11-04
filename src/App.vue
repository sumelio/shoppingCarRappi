<template lang="pug">
  #app
    p(v-show="showValue") {{ value}}  <!-- display none-->
    p(v-if="showValue") {{ value}} <!-- No aparece el componente p-->
    p(v-else-if="false") {{ 'algo mas' }} <!-- else if-->
    p(v-else) {{ 'default else' }} <!-- else-->

    ul
      li(v-for="item in items") {{ item }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hola Vue',
      showValue: false,
      value: 'Thing',
      items: [1, 2, 3, 4, 5]
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
