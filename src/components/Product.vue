<template lang="pug">
.box
  i.addProduct.fa.fa-plus(@click="addProduct")
  i.removeProduct.fa.fa-menus(:class="{'hide': product.count_buy < 1 }", @click="removeProduct")
  .countBuyProduct.fa(:class="{'hide': product.count_buy < 1 }" ) {{   product.count_buy  }}
  img.item_data.img(:src="product.image | absolutePath")
  .headerBox
    .price {{ product.price | formatCurrency }}
    .titleBox {{ product.name }}
  .image
    .showDetail
      a 🔍
    .position
      .detail
      .info
        ul
          // img.imgBox(:src="product.image | absolutePath")
          li {{ product.description | extractDescription }}
          li {{ product.price | formatCurrency }}
          li {{ product.have_discount ? 'Con' : 'Sin' }} descuento
          li {{ product.is_available ? 'D' : 'No d' }}isponible
          li Cantidad {{ product.quantity }}
          li Popularidad {{ product.popularity }}
</template>

<script>
import RappiCar from '@/components/Car.vue'

export default {
  components: { RappiCar },

  props: {
    product: { type: Object, requiered: true },
    car: { type: Object, requiered: true }
  },

  methods: {
    addProduct () {
      this.$emit('add', this.product)
      // this.$bus.$emit('set-product', this.product)
    },

    removeProduct () {
      this.$emit('remove', this.product)
    }
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
  }
}
</script>

<style lang="scss" scoped>
.box {
  position: relative;
  width: 95%;
  height: 290px;
  i.addProduct {
    z-index: 10005;
    width: 40px;
    height: 40px;
    background: rgb(119, 221, 119);
    color: #fff;
    border-radius: 20px;
    text-align: center;
    line-height: 40px;
    font-size: 1.4rem;
    position: absolute;
    right: 4px;
    top: 140px;
    box-shadow: 0 0 4px 2px rgba(80, 80, 80, 0.1);
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      transform: scale(1.15);
    }
  }

  i.removeProduct {
    z-index: 10005;
    position: absolute;
    right: 4px;
    top: 220px;
    width: 38px;
    height: 38px;
    background: #f24e4e;
    color: #fff;
    border-radius: 19px;
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
  i.fa-shopping-cart {
      z-index: 10000;
      position: absolute;
      top: -600px;
      right: 0px;
      width: 300px;
      background: url(../assets/Selection_366.png) 100 100;
  }
  .countBuyProduct{
    position: absolute;
    z-index: 10005;
    width: 50px;
    height: 50px;
    color: #f24e4e;
    font-size: 20px;
    right: -20px;
    top: 190px;
    bottom: 60px;
  }
  .headerBox{
   position: absolute;
   width: 260px;
     text-align: right;
    .titleBox {
      font-size: 16px;
      padding: 10px 0 0 10px;
      color: gray;
      line-height: normal;
    }
    .price {
      margin-left: 0px;
      font-size: 18px;
      padding: 0 0 0 10px;
      color: black;
    }
  }
  img {
    position: absolute;
    max-height: 350px;
    width: auto;
    top: 100px;
    padding: 10px;
    transition: all 1.5s ease-in-out;
  }
  .imgBox {
    position: absolute;
    top: 0px;
    max-height: 150px;
    transition: all 2.5s ease-in-out;
  }
  .image {
    width: 50%;
    //border: 2px red solid;
    .showDetail {
      position: absolute;
      top: 93px;
      right: -124px;
      text-align: left;
    }
    .detail {
      position: absolute;
      left: 223px;
      top: 87px;
      height: 32px;
      width: 32px;
      box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
      border-radius: 16px;
      padding: 20px 15px 0px 0px;
      background: rgba(163, 213, 194, 0.09);
      transition: 0.5s ease-in-out;
      margin-bottom: 0;
      font-size: 20px;
      color: black;
      border: 2px blue static;
    }
    .info {
      position: absolute;
      top: 0px;
      height: 0px;
      transition: all 1.5s ease-in-out;
      li {
        //display: none;
        font-size: 1px;
        color: rgb(255, 255, 255);
        transition: all 1.5s ease-in-out;
      }
    }
    &:hover {
      .detail {
        // top: -220px;
        // left: -165px;
        left: -10px;
        top: -22px;
        height: 370px;
        width: 290px;
        color: red;
        background: rgba(163, 213, 194, 0.92);
        // border: red solid 1px;
      }

      .info {
        top: 60px;
        left: 50px;
        height: 240px;
        width: 230px;
        padding: 40px, 0, 0, 0;
        ul {
          display: list-item;
          list-style: circle;
          li {
            display: list-item;
            line-height: 30px;
            color: rgb(26, 26, 26);
            font-size: 18px;
            text-align: left;
            margin: 0 20px 0 0;
            background: rgba(163, 213, 194, 0.22);
          }
        }
      }
    }
  }
}

.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fa-plus:before {
  content: '➕';
}

.fa-menus:before {
  content: '➖';
}


.true-available {
  color: green;
}

.false-available {
  color: red;
}

.active-show {
  display: none;
  bottom: 0;
  color: rgba(163, 213, 194, 0.85);
}

.hide {
  display: none;
}
</style>
