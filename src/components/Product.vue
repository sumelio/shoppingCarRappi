<template lang="pug">
  .box


    .image
      .detail
      img.item_data.img(:src="product.image | uppercase")
      .add.content
        i.addProduct.fa.fa-plus(@click="selectProduct")

      p.title {{ product.name }}
      p.description {{ product.description | extractDescription }}
      p.discount(:class="{ 'active-show': !product.have_discount }").true-available Tiene descuento
      p.discount(:class="{ 'active-show': product.have_discount }").false-available Sin descuento
      p.availabel(:class="{ 'active-show': !product.is_available }").true-available Disponible
      p.availabel(:class="{ 'active-show': product.is_available }").false-available No disponible
      p.price $ {{ product.price }}
      p.quantity Cantidad {{ product.quantity }}
      p.popularity Popularidad {{ product.popularity }}
</template>

<script>
  export default {
    props: {
      product: { type: Object, requiered: true }
    },

    methods: {
      selectProduct () {
        this.$emit('select', this.product.id)
      }
    },

    filters: {
      uppercase (str) {
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
  width: 250px;
  height: 300px;
  background-color: #fff;
  display: inline-block;
  margin: 10px 5px;
  position: relative;
  &:hover {
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  }

  i.addProduct {
    z-index: 10001;
    width: 50px;
    height: 50px;
    background: #f24e4e;
    color: #fff;
    border-radius: 25px;
    text-align: center;
    line-height: 50px;
    font-size: 1.4rem;
    position: absolute;
    right: -40px;
    top: 150px;
    box-shadow: 0 0 4px 2px rgba(80, 80, 80, 0.1);
    cursor: pointer;
    transition: all 0.3s;
    transition: all 0.3s;
    &:hover {
      transform: scale(1.15);
    }
  }
  .detail{
    display: none;
    &:hover {
      display: block;
      border: 2px solid red;
    }
  }
  .image {
   position: absolute;
    img {
      top: -30px;
      left: 10px;
      max-height: 150px;
      width: 200%;
      margin: -5px -12px;
      padding: 0px;
      transition: top 1.5s ease-in-out;
    }

    p {
      &.title {
        font-size: 18px;
        padding: 5px 1px 0;
        color: gray;
        width: 220px;
      }
      &.description {
        font-size: 18px;
        padding: 1px 2px;
        width: 220px;
        display: none;
      }

      &.availabel, &.discount, &.quantity {
       display: none;
       bottom: 0;
      }

      &.quantity {
       color: gray;
      }

      &.price {
        margin-left: 0px;
        font-size: 25px;
        padding: 1px;
      }

      &.popularity {
        margin-left: 0px;
        font-size: 20px;
        padding: 1px;
        display: none;
      }
    } // end p

   &:hover {
      transform: scale(1.05);

     img {
       position: absolute;
       transform: scale(1.05);
       top: -100px;
     }

     p {
       &.title {
         padding: 60px 1px 0 0;
         display: none;
       }
       &.description {
         font-size: 18px;
         padding: 30px 2px 0px 0px;
         width: 220px;
         display: block;
       }

       &.realprice, &.availabel, &.quantity, &.discount {
         display: block;
       }

       &.price {
         margin-left: 0px;
         font-size: 25px;
         padding: 1px;
       }

       &.popularity {
         margin-left: 0px;
         font-size: 20px;
         padding: 1px;
         display: none;
       }
     } // end p

  }

 }
}

@media only screen and (max-width: 970px) {
  .box {
    width: 300px;
    height: 320px;

    i.addProduct {
      position: absolute;
      right: -60px;
      top: 70px;
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

.true-available {
  color: green;
}

.false-available {
  color: red;
}

.active-show {
  display: none;
  bottom: 0;
  color: white;
}
</style>
