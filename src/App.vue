<template lang="pug">
  #app
    rappi-header

    rappi-notification(v-show="isShowNotification")
      p(slot="body") No se encontrarón resultados

    rappi-loader(v-show="isLoading")
    section.section
      nav.nav
        .container
          label.title(for="apiUrl" ) Rappi API URL
          input.input.is-short(type="text", id="apiUrl" v-model="apiUrl")
          br
          table.table-api
            tr
              th tipo
              th Url
            tr
              td Lacteos
              td
                | https://www.rappi.com/api-services/windu/sub_corridors/store/6660307/corridor/125772
            tr
              td Bebidas
              td
               | https://www.rappi.com/api-services/windu/sub_corridors/store/6660307/corridor/126222
        br
        .container
        .search-input-container
          input.input.search-input(
              type="text", placeholder="Busca productos en la API de Rappi"
              v-model="searchQuery"
              )
          span.search-reset
          button.search-button.iconf-ico-buscar(
              @click="search"
              )
          br
          br
          br
      .productcontainer
       .product(v-for="p in products")
         rappi-product(
               :class="{ 'is-active': p.id === selectedProduct  }",
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

      selectedProduct: '',
      apiUrl: 'https://www.rappi.com/api-services/windu/sub_corridors/store/6660307/corridor/126222'
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
      // if (!this.searchQuery.length > 0) { return }

      this.isLoading = true
      console.log(this.apiUrl)
      productService.search(this.searchQuery, this.apiUrl)
        .then(res => {
          console.log(res)
          if (res.sub_corridors && res.sub_corridors.length > 0) {
            this.products = res.sub_corridors[0].products
          }
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
  @import './scss/main.scss';

  .results {
    margin-top: 50px;
  }

  .is-active {

    border-top: 6px #23d160 solid;
    border-radius: 25px;
    box-shadow: 0 20px 30px rgba(230, 0, 38, 0.10), 0 0 0 1px rgba(230, 0, 38, 0.10);


  }
  .productClass {
    border: 2px solid;
    border-radius: 25px;
  }

  html, body {
    //background-color: #eee;
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
  @media only screen and (max-width: 700px){
    .product {
      width: 300px;
      height: 330px;
    }
    .section{
      padding: 0;
    }
  }



  .search-input-container{
     width: 100%;
     position: relative;
     display: inline-block;
     vertical-align: middle;
     zoom: 1;
    }
  .search-input {
        height: 41px;
        padding: 10px 60px 10px 20px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        width: 100%;
        line-height: 40px;
        background: #fff;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        font-size: 14px;
    }

    .search-button {
        background: #FF7175;
        color: #9faab7;
        position: absolute;
        right: 0;
        top: 0;
        width: 150px;
        height: 40px;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        color: #fff;
        font-size: 24px;
        text-align: center;
        border: 0;
    }

    @media only screen and (max-width: 992px){
      .search-button {
          width: 40px;
          background-color: transparent;
          color: #9faab7;
      }
    }
    .iconf-ico-buscar:before {
      content: "🔍";
     }

    .table-api{
      width: 100%;
      max-width: 800px;
      margin-bottom: 20px;
      // background-color: rgb(163, 213, 194 );
      border-spacing: 2;
      border-collapse: collapse;
      border: 3px solid rgb(163, 213, 194 );
      td, tr, th {
        margin: 2px;
        border: 3px solid rgb(163, 213, 194 );
        padding: 10px;
        background-color: white;
      }
    }
    label.title {
      color: rgb(163, 213, 194 );
    }


    .box {
    background-color: white;
    border-radius: 0px;
    /* box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1); */
    box-shadow:  0 0px 0px rgba(0, 0, 0, 0.0), 0 0 0 0px rgba(0, 0, 0, 0.0);
    color: white;
    display: block;
    padding: 10px;
    //border: 2px solid red;
   }
</style>
