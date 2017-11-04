<template lang="pug">
  #app
    input(v-model="name")
    p {{ name }}
    p
      a(v-bind:href="url") Link
    p
      a(:href="url") Link
</template>

<script>
export default {
  name: 'app',

  data () {
    return {
      name: '',

      url: 'https://platzi.com'
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
