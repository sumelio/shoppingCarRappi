<template lang="pug">
.content.boxCar
    .tableCar
      table.scroll
        thead
          tr
            th Producto
            th Descripcion
            th Cantidad
            th Total
            th Adicionar
            th Quitar
        tbody
          tr(v-for="product in car.products" v-show="product.count_buy > 0" )
            td
             img.imgCar(:src="p.image | absolutePath")
            td {{product.name}}
            td $ {{product.price}}
            td {{product.count_buy}}
            td $ {{product.count_buy * product.price}}
            td
             a(@click=" product.count_boy ++ ") ➕
            td
             a(@click="removeProduct" ) ➖
</template>

<script>
  export default {
    data () {
      return {
        product: { type: Object, requiered: false },
        products: []
      }
    },

    props: {
      car: { type: Object, requiered: false }
    },

    created () {
      this.$bus.$on('set-product', (product) => {
        this.product = product
      })
    },

    filters: {
      absolutePath (str) {
        // return str + ' things'
        return 'https://img.rappi.com/products/low/' + str
      },

      extractDescription  (str) {
      // return str + ' things'
        return str.split('.')[0]
      }
    },

    methods: {
      selectProduct () {
        this.$emit('select', this.product)
      },

      removeProduct () {
        this.$emit('remove', this.product)
      }
    }
  }
</script>

<style lang="scss" scoped >
.boxCar{
  position: fixed;
  border: red;
  z-index: 100000;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  padding: 20px 15px 0px 0px;
  width: 700px;
  height: 300px;
 .tableCar {
   padding: 10px;

   table.scroll {
     width: 100%;
     right: 100px;
     /* 140px * 5 column + 16px scrollbar width */
     border-spacing: 0;
     padding: 100px;
     //border: 2px solid black;
     tbody, thead tr {
       display: block;
         background: rgba(255, 255, 255, 0.85);
     }
     tbody {
       height: 150px;
       overflow-y: auto;
       overflow-x: hidden;
       td {
         width: auto;
         border-right: 1px solid black;
         word-wrap: break-word;
         font-size: 16px;
       }
     }

} // .tableCar
} // boxCar
}
img.imgCar{
  width: 30px;
  height: auto;
}
</style>
