<template lang="pug">
  main
    section.section
      nav.nav
        .container
        .search-input-container API Rest
           span :
           a(:href="apiUrl" ) {{ apiUrl }}
        .search-input-container
          input.input.search-input(
              type="text", placeholder="Busca productos en la API de Rappi"
              v-model="searchQuery"
              )
          span.search-reset
          button.search-button.iconf-ico-buscar(
              @click="search"
              )

          .search-input-container
            label(:for="categoryIndex") Categoria:
            select( v-model="categoryIndex" id="categoryIndex" v-on:change="search")
             option( disabled value="" ) Por favor seleccione una categoria
             option(v-for="(c, index) in arrayApi ", :value="index") {{c.name}}
          .search-input-container Disponible:
            label(for="availableFalse") Si
            input(type="radio", v-model="isavailable", :value="true", id="is_available")
            span.space-between
            label(for="availableTrue") No
            input(type="radio", v-model="isavailable", :value="false", id="is_available", @click="search"  )
          .search-input-container Cantidad: Menor a {{quantity}}
            span.space-between
            input(type="range", v-model="quantity", :min="0", :max="1000", :value="false")
          .search-input-container Mas populares: Menor a {{popularity}}
            span.space-between
            input(type="number", v-model="popularity", :min="0", :max="1000000", :value="false")

        rappi-car.shoppingCar(:car="car", @add="addProduct", @remove="removeProduct"  )
      rappi-notification(v-show="isShowNotification")
        p(slot="body") No se encontrarón resultados

      rappi-loader(v-show="isLoading")
      .productcontainer
       .productClass(v-for="p in products")
         rappi-product(
               :class="{ '': p.id === selectedProduct  }",
               :product="p", @add="addProduct", @remove="removeProduct" )
       br
       br
      br
      br
      br
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
      categoryIndex: 0,
      isavailable: true,
      quantity: 10000,
      popularity: 1000000
    }
  },

  props: { apiUrl: '' },

  created () {
    console.log('load datos.................')
    this.isLoading = false
    productService.search(this.searchQuery, this.apiUrl)
      .then(res => {
        console.log(res)
        if (res.sub_corridors && res.sub_corridors.length > 0) {
          for (let i = 0; i < res.sub_corridors.length; i++) {
            for (let j = 0; j < res.sub_corridors[i].products.length; j++) {
              res.sub_corridors[i].products[j].count_buy = 0
            }
          }
        }
        this.isLoading = false
        this.arrayApi = res.sub_corridors
        this.products = this.arrayApi[this.categoryIndex].products
        this.isavailable = true
      })
  },

  watch: {
    isShowNotification () {
      if (this.isShowNotification) {
        setTimeout(() => {
          this.isShowNotification = false
        }, 3000)
      }
    },

    isavailable (newVal, oldVal) {
      console.log('==========' + newVal)
      this.isavailable = newVal
      this.search()
    },

    quantity (newVal, oldVal) {
      console.log('==========' + newVal)
      this.quantity = newVal
      this.search()
    },

    popularity (newVal, oldVal) {
      console.log('==========' + newVal)
      this.popularity = newVal
      this.search()
    }

  },

  methods: {
    search () {
      this.isLoading = true// var sefl = this
      console.log('Buscando....' + this.is_available)
      this.products = this.arrayApi[this.categoryIndex].products.filter(product => (
        product.is_available === this.isavailable && product.quantity <= this.quantity && product.popularity <= this.popularity
      ))
      this.isLoading = false
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

  // computed: {
  //   categoryIndex () {
  //     // return `Encontrados: ${this.products.length}`
  //     // this.search()
  //   }
  // }
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
     width: 80%;
     position: relative;
     display: inline-block;
     vertical-align: middle;
     padding: 0 0 0 100px;
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
   .space-between{
    padding: 10px;
   }
</style>
