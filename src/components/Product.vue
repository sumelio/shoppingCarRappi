<template lang="pug">
  .box


    .image

      img.item_data.img(:src="product.image | uppercase")
      .add.content
        i.addProduct.fa.fa-plus(@click="selectProduct")
      .detail
      p.title {{ product.name }}
      p.description {{ product.description | extractDescription }}
      p.discount.true-available {{ product.have_discount ? 'Con' : 'Sin' }} descuento
      p.discount.true-available {{ product.is_available ? 'D' : 'No d' }}isponible
      p.quantity Cantidad {{ product.quantity }}
      p.price $ {{ product.price }}
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

  .image {
   position: absolute;
    img {
      top: -40px;
      left: 5px;
      max-height: 150px;
      width: 200%;
      margin: -5px -12px;
      padding: 0px;
      transition: top 2.5s ease-in-out;
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


    .detail{
      position: absolute;
      height: 0px;
      bottom: 0;
      top: 50px;
      left: -15px;
      width: 240px;
      background:rgba(163, 213, 194, 0.85);
      // transition: bottom 0.5s ease-in-out;
      transition: top 2.5s ease-in-out;
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
      border-radius: 15px;
    }


   &:hover {
    //transform: scale(1.05);

    img {
       position: absolute;
       top: -80px;
     }

     .detail{
       height: 270px;
       bottom: 120px;
       top: 50px;
       left: -15px;

     }

     p {
       &.title {
         padding: 60px 1px 0 0;
       }
       &.description {
         font-size: 18px;
         padding: 10px 2px 0px 10px;
         width: 220px;
         display: block;
       }

       &.realprice, &.availabel, &.quantity, &.discount {
         display: block;
         padding: 0 0 0 10px;

         z-index: 20;
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
  color: rgba(163, 213, 194, 0.85);
}
</style>
