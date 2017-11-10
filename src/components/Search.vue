<template lang="pug">
  main
    section.section
      nav.nav
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
          .search-input-container
            select( v-model="categoryIndex")
             option( disabled value="" ) Please select one
             option(v-for="(c, index) in arrayApi ", :value="index") {{index}} - {{c.name}}
          rappi-car.shoppingCar(:class="{ 'is-active': true }", :car="car", @add="addProduct", @remove="removeProduct"  )
          br
      rappi-notification(v-show="isShowNotification")
        p(slot="body") No se encontrarón resultados

      rappi-loader(v-show="isLoading")
      .productcontainer
       .productClass(v-for="p in products")
         rappi-product(
               :class="{ 'is-active': p.id === selectedProduct  }",
               :product="p", @add="addProduct", @remove="removeProduct" )
       br
       br
      br
      br
      br
      .container
       label.title(for="apiUrl" ) Fake desde Rappi API URL
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
</template>

<script>

import productService from '@/services/Products'

import RappiProduct from '@/components/Product.vue'

import RappiNotification from '@/components/shared/Notification.vue'
import RappiLoader from '@/components/shared/Loader.vue'

import RappiCar from '@/components/Car.vue'

export default {
  name: 'app',

  components: { RappiCar, RappiProduct, RappiLoader, RappiNotification },

  data () {
    return {
      searchQuery: '',
      products: [],
      car: { products: [], quantity: 0, totalPrice: 0 },
      isLoading: false,
      isShowNotification: false,
      arrayApi: [],
      selectedProduct: '',

      apiUrl: 'https://www.rappi.com/api-services/windu/sub_corridors/store/6660307/corridor/126222'
    }
  },

  props: { apiUrl: '' },

  created () {
    this.isLoading = true
    console.log(this.apiUrl)
    productService.search(this.searchQuery, this.apiUrl)
      .then(res => {
        console.log(res)
        this.arrayApi = res.sub_corridors
        if (res.sub_corridors && res.sub_corridors.length > 0) {
          for (let i = 0; i < res.sub_corridors[0].products.length; i++) {
            res.sub_corridors[0].products[i].count_buy = 0
          }
          this.products = res.sub_corridors[0].products
        }
        this.arrayApi = res.sub_corridors
        this.isLoading = false
      })
  },
  // computed: {
  //   searchMessage () {
  //     return `Encontrados: ${this.products.length}`
  //   }
  // },
  watch: {
    isShowNotification () {
      if (this.isShowNotification) {
        setTimeout(() => {
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
            for (let i = 0; i < res.sub_corridors[0].products.length; i++) {
              res.sub_corridors[0].products[i].count_buy = 0
            }
            this.products = res.sub_corridors[0].products
          }
          this.isLoading = false
        })
    },

    addProduct (product) {
      // this.selectedProduct = product.id
      product.count_buy = product.count_buy + 1
      this.selectedProduct = product.id

      var count = this.car.products.filter(element => (element.id === product.id && product.count_buy > 0)).reduce(function (previous, current) {
        return previous + 1
      }, 0)

      if (count === 0) {
        this.car.products.push(product)
      }

      this.car.totalPrice += product.price
    },

    removeProduct (product) {
      var count = this.car.products.filter(element => (element.id === product.id && product.count_buy > 0)).reduce(function (previous, current) {
        return previous + 1
      }, 0)

      if (count > 0) {
        product.count_buy -= 1
        this.car.totalPrice -= product.price
      }
    }
  }
}
</script>

<style lang="scss">

  .results {
    margin-top: 50px;
  }


  .productClass {
    // border: 2px solid;
    // border-radius: 25px;
    width: 290px;
    height: 360px;
    padding: 10px 0px 10px 0px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    border-radius: 16px;
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

     // border: 2px solid blue;
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
   }

   .shoppingCar{
     position: fixed;
     top: 40px;

   }

</style>
