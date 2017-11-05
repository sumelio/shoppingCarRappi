<template lang="pug">
  #app
    rappi-header

    rappi-notification(v-show="isShowNotification")
      p(slot="body") No se encontraron resultados

    rappi-loader(v-show="isLoading")
    section.section(v-show="!isLoading")
      nav.nav
        .container
          input.input.is-short(
            type="text", placeholder="Buscar algo"
            v-model="searchQuery"
            )
          button.is-info.is-large(
            @click="search"
            ) Buscar
          p
            small {{ searchMessage }}
          br
          br
      .productcontainer
       .product(v-for="p in products")
         rappi-product(
               :class="{ 'is-active': p.id === selectedProduct  }.product",
               :product="p", @select="setSelectedProduct" )

    rappi-footer
</template>

<script>

import productService from '@/services/Products'

import RappiFooter from '@/components/layout/Footer.vue'
import RappiHeader from '@/components/layout/Header.vue'

import RappiProduct from '@/components/Product.vue'

import RappiNotification from '@/components/shared/Notification.vue'
import RappiLoader from '@/components/shared/Loader.vue'

export default {
  name: 'app',

  components: { RappiFooter, RappiHeader, RappiProduct, RappiLoader, RappiNotification },

  data () {
    return {
      searchQuery: '',
      products: [],
      isLoading: false,
      isShowNotification: false,

      selectedProduct: ''
    }
  },

  computed: {
    searchMessage () {
      return `Encontrados: ${this.products.length}`
    }
  },

  watch: {
    isShowNotification () {
      if (this.isShowNotification) {
        setTimeout(() => {
          console.log(this.isShowNotification)
          this.isShowNotification = false
        }, 3000)
      }
    }
  },

  methods: {
    search () {
      // console.log(this.searchQuery)
      // this.tracks = tracks
      if (!this.searchQuery.length > 0) { return }

      this.isLoading = false

      productService.search(this.searchQuery)
        .then(res => {
          console.log(res)
          this.products = res.sub_corridors[0].products
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

  html, body {
    background-color: #eee;
    font-family: calibri, sans-serif;
  }

  .productcontainer {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
  }

  .product {
        width: 290px;
         height: 360px;

  }

  img {
      height: auto;
      width: 120%;
  }


</style>
