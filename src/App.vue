<template lang="pug">
  #app
    input(v-model="name" @keyup="format" )
    button(v-on:click="format") Format

    p {{formatedName}}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: '',
      formatedName: ''
    }
  },

  methods: {
    format () {
      this.formatedName = this.name.split(' ').join('-').toUpperCase()
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
