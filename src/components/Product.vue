<template lang="pug">
  .box


    img.item_data.img(:src="product.image | uppercase")
    p.title {{ product.name }}
    p.price $ {{ product.price }}
    p.popularity Popularidad {{ product.popularity }}

    data.data
      p.description {{ product.description | extractDescription }}
      p.realprice Precio real $ {{ product.real_balance_price }}
      p.discount(:class="{ 'active-show': !product.have_discount }").true-available Tiene descuento
      p.discount(:class="{ 'active-show': product.have_discount }").false-available Sin descuento
      p.availabel(:class="{ 'active-show': !product.is_available }").true-available Disponible
      p.availabel(:class="{ 'active-show': product.is_available }").false-available No disponible
      p.quantity Cantidad {{ product.quantity }}
    .add.content
      i.fa.fa-plus(@click="selectProduct")
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
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      display: inline-block;
      margin: 10px 5px;
      position: relative;
      img {
        position: relative;
        top: -30px;
        left: 10px;
        max-height: 150px;
        width: 200%;
        margin: -5px -12px ;
        padding: 0px;
        transition: top 1.5s ease-in-out;
        &:hover {
          transform: scale(1.05);
        }
       }
      i {
        z-index: 10001;
        width: 50px;
        height: 50px;
        background: #F24E4E;
        color: #ffffff;
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
          transform: scale(1.05);
        }
      }
      h2 {
        margin-left: 20px;
      }
      p.title {
        position: absolute;
        top: 100px;
        margin-left: 0px;
        font-size: 18px;
        padding: 40px 40px 10px 0;
      }
      p.price {
        position: absolute;
        top: 210px;
        margin-left: 0px;
        font-size: 30px;
        padding: 10px;
      }
      p.popularity {
        position: absolute;
        top: 248px;
        margin-left: 0px;
        font-size: 20px;
        padding: 10px;
      }
      &:hover{
                .data{
                    bottom:0;
                    z-index: 10000;
                    height: 220px;
                    width: 100%;
                }
                img {
                  top: -70px;
                }
            }
      .data {
          z-index: -1;
          position: absolute;
          bottom: -20px;
          height: 0;
          width: 100%;
          left: 0;
          padding: 20px 15px 0px 0px;
          background:rgba(163, 213, 194, 0.92);
          transition: bottom 0.5s ease-in-out;
          margin-bottom: 0;
          padding: 5px;
          font-weight: bold;
          font-size: 20px;
          color: black;
          border: 2px solid #73BEA2;
          border-top: 0;
          p.realprice, .availabel, .quantity, .discount {
              font-size:14px;
               padding: 5px 10px 2px 10px;
          }
          p.description {
            font-size:18px;
            padding: 15px 10px 2px 10px;
          }

      }

    }

    @media only screen and (max-width: 500px){
      .box {
        width: 100%;
        height: 300px;
        i {
          right: 10px;
          top: 80%;
          width: 100px;
        }
      }
    }


    @media only screen and (max-width: 700px){
      .box {
        width: 100%;
        height: 200px;
        img {
          width: auto;
          height: 100%;
        }

        i {
          right: 10px;
          top: 90%;
          width: 100px;
        }
        p.title {
          position: absolute;
          top: 10px;
          left: 200px;
          margin-left: 0px;
          font-size: 18px;
          padding: 10px 5px 10px 40px;
        }
        p.price {
          position: absolute;
          top: 80px;
          left: 200px;
          margin-left: 0px;
          font-size: 30px;
          padding: 10px 5px 10px 40px;
        }
        p.popularity {
          position: absolute;
          top: 130px;
          left: 200px;
          margin-left: 0px;
          font-size: 20px;
          padding: 10px 5px 10px 40px;
        }

        &:hover{
                  .data{
                      bottom:0;
                      z-index: 10000;
                      height: 220px;
                  }
                  h1{
                      font-size:22px;
                      font-weight:300;
                  }
                  p{
                      font-size:14px;
                      padding: 5px 10px 2px 10px;
                  }
                  p.label {
                    font-size:18px;
                  }

              }

        .data {
            left: 180px;
            top: 0px;
            border: 2px solid red;
            p.realprice, .availabel, .quantity, .discount {
                font-size:14px;
                 padding: 5px 10px 2px 10px;
            }
            p.description {
              font-size:18px;
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

     .true-available{
       color: green;
     }

     .false-available{
       color: red;
     }
     .active-show{
       display: none;
     }

</style>
