<template lang="pug">
  .box
    img.item_data.img(:src="product.image | uppercase")

    p.title.is-6
            strong {{ product.name }}
    p.subtitle.is-6 {{ product.description }}
      .content
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
      width: 230px;
      height: 300px;
      background-color: #fff;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      display: inline-block;
      margin: 0 5px;
      position: relative;
      img {
        height: auto;
        max-width: 100%;
        margin-bottom: 60px;
        padding: 6px;
       }
      i {
        width: 50px;
        height: 50px;
        background: #F24E4E;
        color: #ffffff;
        border-radius: 25px;
        text-align: center;
        line-height: 50px;
        font-size: 1.4rem;
        position: absolute;
        right: -7px;
        top: 120px;
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
      p {
        margin-left: 20px;
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
