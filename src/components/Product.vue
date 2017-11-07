<template lang="pug">
.box
  i.addProduct.fa.fa-plus(@click="selectProduct")
  i.removeProduct.fa.fa-menus(@click="removeProduct")
  .countBuyProduct.fa {{   product.count_buy  }}
  img.item_data.img(:src="product.image | absolutePath")
  .image
    .zoom
       .price $ {{ product.price }}
       .showDetail
         a Detalle 🔍
    .title {{ product.name }}
    .position
      .detail
      .info
        ul
          img.imgBox(:src="product.image | absolutePath")
          li {{ product.description | extractDescription }}
          li $ {{ product.price  }}
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
    selectProduct () {
      this.$emit('select', this.product)
      this.$bus.$emit('set-product', this.product)
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
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  position: relative;
  width: 95%;
  height: 300px;
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
    position: absolute;
    right: -4px;
    top: 140px;
    box-shadow: 0 0 4px 2px rgba(80, 80, 80, 0.1);
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      transform: scale(1.15);
    }
  }

  i.removeProduct {
    z-index: 10002;
    width: 38px;
    height: 38px;
    background: #f24e4e;
    color: #fff;
    border-radius: 19px;
    text-align: center;
    line-height: 38px;
    font-size: 1.4rem;
    position: absolute;
    right: -4px;
    top: 200px;
    box-shadow: 0 0 4px 2px rgba(80, 80, 80, 0.1);
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      transform: scale(1.15);
    }
  }
  i.fa-shopping-cart {
      z-index: 10003;
      position: absolute;
      top: -600px;
      right: 0px;
      width: 300px;
      background: url(../assets/Selection_366.png) 100 100;
  }
  .countBuyProduct{
    z-index: 10002;
    width: 50px;
    height: 50px;
    color: #f24e4e;
    font-size: 20px;
    position: absolute;
    right: -28px;
    top: 100px;
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
    width: 100%;
    .position {
      z-index: 10001;
      position: absolute;
      right: -40px;
      top: 150px;
    }
    .title {
      font-size: 16px;
      padding: 10px 0 0 10px;
      color: gray;
      line-height: normal;
    }
    .zoom {
      display: flex;
      justify-content: space-between;
      padding: 0 15px;
      .price {
        text-align: right;
        margin-left: 0px;
        font-size: 18px;
        padding: 0px;
        color: black;
      }
      .showDetail {
        text-align: left;
      }
    }
    .detail {
      position: absolute;
      height: 45px;
      left: -300px;
      width: 270px;
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
      border-radius: 15px;
      top: -164px;
      padding: 20px 15px 0px 0px;
      background: rgba(163, 213, 194, 0.09);
      transition: 0.5s ease-in-out;
      margin-bottom: 0;
      font-size: 20px;
      color: black;
    }
    .info {
      position: absolute;
      top: 0px;
      height: 0px;
      transition: all 0.5s ease-in-out;
      li {
        display: none;
      }
    }
    &:hover {
      .detail {
        top: -220px;
        left: -300px;
        height: 520px;
        width: 280px;
        color: red;
        background: rgba(163, 213, 194, 0.92);
      }
      .imgBox {
        top: -200px;
      }
      .info {
        top: -5px;
        left: -265px;
        height: 240px;
        width: 230px;
        padding: 40px, 0, 0, 0;
        ul {
          display: list-item;
          list-style: circle;
          li {
            display: list-item;
            line-height: 30px;
            color: black;
            font-size: 18px;
            text-align: left;
            margin: 0 20px 0 0;
            background: rgba(163, 213, 194, 0.22);
          }
        }
      }
      .title, .price {
        display: none;
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
</style>
