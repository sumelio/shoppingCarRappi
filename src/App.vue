<template lang="pug">
  #app
    rappi-header

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
          .column(v-for="t in tracks")
            | {{ t.name }} - {{ t.artists[0].name }}

    rappi-footer
</template>

<script>

import trackService from './services/tracks'
import RappiFooter from './components/layout/Footer.vue'
import RappiHeader from './components/layout/Header.vue'

export default {
  name: 'app',

  components: { RappiFooter, RappiHeader },

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
      // this.tracks = tracks
      if (!this.searchQuery.length > 0) { return }

      trackService.search(this.searchQuery)
        .then(res => {
          console.log(res)
          this.tracks = res.tracks.items
        })
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
