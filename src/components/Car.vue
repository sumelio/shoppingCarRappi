<template lang="pug">
.content.boxCar
    .carShopping
    .tableCar
      table.scroll
        thead
          tr
            th Producto
            th Descripcion
            th Precio
            th Cantidad
            th Total
        tbody
          tr(v-for="product in car.products" v-show="product.count_buy > 0" )
            td
             img.imgCar(:src="product.image | absolutePath")
            td {{product.name}}
            td $ {{product.price}}
            td
              .counter
                .add
                  // i.addProduct.buttonSmall(@click="product.count_buy --" ) ➖
                  i.addProduct.buttonSmall(@click="addProduct(product)" ) ➕
                .count {{product.count_buy}}
                .remove
                  //i.removeProduct.buttonSmall(@click="product.count_buy ++") ➕
                  i.removeProduct.buttonSmall(@click="removeProduct(product)") ➖
            td $ {{product.count_buy * product.price}}
    .totalBuy {{ car.totalPrice | formatCurrency }}
</template>

<script>
  export default {
    data () {
      return {
        product: { type: Object, requiered: false },
        products: [],
        total: 0
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
      },

      formatCurrency (value) {
        let val = (value / 1).toFixed(2).replace('.', ',')
        return '$ ' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      }
    },

    methods: {
      addProduct (product) {
        this.$emit('add', product)
      },

      removeProduct (product) {
        this.$emit('remove', product)
      }
    }
  }
</script>

<style lang="scss" scoped >
.boxCar{
  display: run-in;
  top: 10;
  right: 1;
  position: fixed;
  z-index: 10010;
  //background: rgba(255, 113, 117, 0.55);
  //background-image: url('../assets/car_small.png');
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  padding: 10px;
  width: 60px;
  height: 60px;
  transition: all 0.3s;
  background: rgba(255, 113, 117, 0.55);
 .carShopping{
   width: 40px;
   height: 40px;

   background-image: url('../assets/car_small.png');
 }
 .totalBuy{
   position: absolute;
   width: 100px;
   color: black;
   font-weight: bold;
   font-size: 12px;
   background: rgba(255, 255, 255, 0.55);
 }
 .tableCar {
   padding: 10px;

   table.scroll {
     display: none;
     width: 100%;
     right: 100px;
     /* 140px * 5 column + 16px scrollbar width */
     border-spacing: 0;
     padding: 100px;
     //border: 2px solid black;
     tbody, thead tr {
       //display: block;
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
     } // table.scroll
  } // tableCar

  &:hover {

          display: inline;
          z-index: 10010;
          background: rgba(255, 255, 255, 0.85);
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
          border-radius: 15px;
          padding: 20px 15px 0px 0px;
          width: 700px;
          height: 300px;
          .carShopping{
            display: none;
          }
          .totalBuy{
            position: absolute;
            top: 250px;
            right: 140px;
            color: black;
            font-size: 16px;
          }

         .tableCar {
           padding: 15px;
           height: 270px;

           table.scroll {
            display: inline;
             width: 100%;
             height: 80%;
             right: 100px;

             /* 140px * 5 column + 16px scrollbar width */
             border-spacing: 0;
             padding: 0px ;
             //border: 2px solid black;
             tbody, thead tr {
               display: block;
                 background: rgba(255, 255, 255, 0.85);
                 td {
                   min-width: 50px;
                   width: 10%;
                 }
             }
             tbody {
               display: flow-root;
               height: 160px;
               overflow-y: auto;
               overflow-x: hidden;
               td {
                 min-width: 50px;
                 width: 10%;
                 border-right: 1px solid black;
                 word-wrap: break-word;
                 font-size: 16px;
               }
              }
             } // table.scroll
          } // tableCar

  } // &:hover
} // boxCar
img.imgCar{
  width: 30px;
  height: auto;
}

i.addProduct {
  z-index: 10002;
  width: 40px;
  height: 40px;
  background: rgb(119, 221, 119);
  color: #fff;
  border-radius: 20px;
  text-align: center;
  line-height: 40px;
  font-size: 1.4rem;
  box-shadow: 0 0 4px 2px rgba(80, 80, 80, 0.1);
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.15);
  }
}

i.removeProduct {
  z-index: 10002;
  width: 50px;
  height: 50px;
  background: #f24e4e;
  color: #fff;
  border-radius: 25px;
  text-align: center;
  line-height: 38px;
  font-size: 1.4rem;
  box-shadow: 0 0 4px 2px rgba(80, 80, 80, 0.1);
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.15);
  }
}

.counter{
  display: flex;
  justify-content: space-between;
  min-width: 50px;
}
</style>
