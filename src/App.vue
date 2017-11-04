<template lang="pug">
  #app
    section.section
      nav.nav.has-shadow
        .container
          input.input.is-large(
            type="text", placeholder="Buscar algo"
            v-model="searchQuery"
            )
          a.button.is-info.is-large(
            @click="search"
            ) Buscar
          a.button.is-danger.is-large &times;
          p
            small {{ searchMessage }}
      .container.results
        .columns
          .cloumn(v-for="t in tracks") {{ t.name }}
</template>

<script>
const tracks = [
  { name: 'Muchacha', artist: 'Luis ALbert' },
  { name: 'Hoy aca en el baile', artist: 'El Pepo' },
  { name: 'I was made for loving you', artist: 'Kiss' }
]

export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },

  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },

  methods: {
    search () {
      // console.log(this.searchQuery)
      this.tracks = tracks
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
;
  .results {
    margin-top: 50px;
  }
</style>
