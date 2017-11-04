<template lang="pug">
  #app
    input(v-model="name")
    input(v-model="lastName")

    p {{fullName}}
    label edad
    input(v-model="yearborh")

    p {{age}}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: '',
      lastName: '',
      yearborh: 1990
    }
  },

  computed: {
    fullName () {
    //  return this.name + this.lastName
      return `${this.name}  ${this.lastName}`
    },
    age () {
      return 2017 - this.yearborh
    }
  },

  watch: { // Patron observable
    name (newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
