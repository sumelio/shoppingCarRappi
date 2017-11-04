<template lang="pug">
  #app
    rappi-header

    rappi-loader(v-show="isLoading")
    section.section(v-show="!isLoading")
      nav.nav
        .container.has-shadow
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
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            rappi-product(
              :class="{ 'is-active': t.id === selectedProduct  }",
              :product="t", @select="setSelectedProduct" )

    rappi-footer
</template>

<script>

import trackService from '@/services/tracks'
import RappiFooter from '@/components/layout/Footer.vue'
import RappiHeader from '@/components/layout/Header.vue'
import RappiProduct from '@/components/Product.vue'
import RappiLoader from '@/components/shared/Loader.vue'

export default {
  name: 'app',

  components: { RappiFooter, RappiHeader, RappiProduct, RappiLoader },

  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedProduct: ''
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

      this.isLoading = true

      trackService.search(this.searchQuery)
        .then(res => {
          console.log(res)
          this.tracks = res.tracks.items
          this.isLoading = false
        })
    },

    setSelectedProduct (id) {
      console.log(id)
      this.selectedProduct = id
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

  .is-active {
    border: 3px #23d160 solid;
  }
</style>
