<template lang="pug">
  .box


    img.item_data.img(:src="product.image | uppercase")
    p.title {{ product.name }}
    p.price $ {{ product.price }}

    data.data
      p {{ product.description }}
      p.false-available :class="{ 'true-available': product.is_available === true  }
       .is-available :v-show(product.is_available === true)
    add.content
      i.fa.fa-plus
</template>

<script>
  export default {
    props: {
      product: { type: Object, requiered: true }
    },

    methods: {
      selectTrack () {
        this.$emit('select', this.product.id)
      }
    },

    filters: {
      uppercase: function (str) {
        // return str + ' things'
        return 'https://img.rappi.com/products/low/' + str
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
        top: -50px;
        left: 10px;
        max-height: 150px;
        width: 200%;
        margin: -5px -12px ;
        padding: 0px;
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
        right: -30px;
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
        top: 200px;
        margin-left: 0px;
        font-size: 25px;
        padding: 10px;
      }
      &:hover{
                .data{
                    bottom:0;
                    position: absolute;
                    z-index: 10000;
                    height: 160px;
                    width: 100%;
                    font-weight: bold;
                    font-size: 20px;
                    color: black;

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
          color:#FFF;
          background:rgba(163, 213, 194, 0.90);
          transition: bottom 0.5s ease-in-out;
          margin-bottom: 0;
          padding: 10px;
          h1{
              font-size:22px;
              font-weight:300;
          }
          p{
              font-size:14px;
              padding: 10px;

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

</style>
