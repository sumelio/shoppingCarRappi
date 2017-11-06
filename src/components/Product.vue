<template lang="pug">
.box
  .image
    p.title {{ product.name }}
    p.price $ {{ product.price }}
    img.item_data.img(:src="product.image | uppercase")
    .add.content
      i.addProduct.fa.fa-plus(@click="selectProduct")
        .detail
        .info
          ul
            li {{ product.description | extractDescription }}
            li {{ product.have_discount ? 'Con' : 'Sin' }} descuento
            li {{ product.is_available ? 'D' : 'No d' }}isponible
            li Cantidad {{ product.quantity }}
            li Popularidad {{ product.popularity }}
            li $ {{ product.price }}
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

<style lang="scss" scoped >
.box {
  position: relative;
  width: 250px;
  height: 300px;

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
    &:hover {
      transform: scale(1.15);
    } //  &:hover
  } // i.addProduct

  .image {
    p.title {
      font-size: 18px;
      padding: 10px;
      color: gray;
      // width: 220px;
    }

    p.price {
      margin-left: 0px;
      font-size: 25px;
      padding: 5px;
      color: black;
    }

    img {
      max-height: 350px;
      width: auto;
      top: 0;
      //margin: -5px -12px;
      padding: 10px;
      transition: all 1.5s ease-in-out;
      //transition: all 2.3s;
    } // img

    .info {
     position: absolute;
     ul li {


       display: none;
     }
      span {
        &.description {
          font-size: 18px;
          padding: 1px 2px;
          width: 220px;
          display: none;
        }

        &.availabel, &.discount, &.quantity, &.popularity {
         display: none;
         bottom: 0;
        }
      } // end p
    } // p.info

    .detail {
      position: absolute;
      height: 300px;
      left: -225px;
      width: 245px;
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
      border-radius: 15px;
      top: -164px;
      padding: 20px 15px 0px 0px;
      background:rgba(163, 213, 194, 0.09);
      transition:  0.5s ease-in-out;
      margin-bottom: 0;
      //font-weight: bold;
      font-size: 20px;
      color: black;
    }


   &:hover {
    //transform: scale(1.05);
     .detail {
        top: -220px;
        left: -217px;
        height: 520px;
        width: 260px;
        color: red;
        background:rgba(163, 213, 194, 0.82);



     }

     .info {
    // position: absolute;
       top: 10px;
       left: -230px;
       height: 240px;
       width: 270px;
       padding: 40px, 0, 0 ,0;

       ul{
        li {
display: list-item;
           line-height: 30px;
         color: black;
         font-size: 18px;
         text-align: left;
         margin: 0 20px 0 0 ;
         background:rgba(163, 213, 194, 0.62);
       }
}

       span {
         &.description {
           top: -10px;
           font-size: 18px;
           padding: 10px 2px 0px 0px;
           width: 220px;
           color: rgb(86, 86, 86);
            display: inline;
            background-color: green;
              background:rgba(163, 213, 194, 0.82);
         }

         &.realprice, &.availabel, &.quantity, &.discount {
           display: inline-grid;
           padding: 0 0 0 20px;
           margin: 0;
           font-size: 16px;
           border: 0;
           text-align: left;
         }

         &.priceBox {
           margin-left: 0px;
           font-size: 25px;
           padding: 0px;
           margin: 0;
           border: 0;
           color: red;
           display: block;
         }

         &.popularity {
           margin-left: 0px;
           font-size: 20px;
           padding: 1px;
           display: none;
         } // &.popularity

       } // end p

   } // info

   img {
     position: absolute;
     max-height: 600px;
     width: 400px;
     top: -100px;
     z-index: 100000;
   } // img


     p.title {
       display: none;
       // width: 220px;
     }

     p.price {
       display: none;

   }
  }

}// .image {
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
