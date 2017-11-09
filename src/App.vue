<template lang="pug">
  #app
    rappi-header

    router-view

    rappi-footer
</template>

<script>

import RappiFooter from '@/components/layout/Footer.vue'
import RappiHeader from '@/components/layout/Header.vue'

export default {
  name: 'app',

  components: { RappiFooter, RappiHeader }

}
</script>

<style lang="scss">
  @import './scss/main.scss';

  .results {
    margin-top: 50px;
  }


  .productClass {
    // border: 2px solid;
    // border-radius: 25px;
    width: 290px;
    height: 360px;
    padding: 10px 0px 10px 0px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    border-radius: 16px;
    margin: 5px; 
  }

  html, body {
    //background-color: #eee;
    font-family: calibri, sans-serif;
  }

  .productcontainer {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
  }

  .product {
        width: 290px;
         height: 360px;

     // border: 2px solid blue;
  }
  @media only screen and (max-width: 700px){
    .product {
      width: 300px;
      height: 330px;
    }
    .section{
      padding: 0;
    }
  }



  .search-input-container{
     width: 100%;
     position: relative;
     display: inline-block;
     vertical-align: middle;
     zoom: 1;
    }
  .search-input {
        height: 41px;
        padding: 10px 60px 10px 20px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        width: 100%;
        line-height: 40px;
        background: #fff;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        font-size: 14px;
    }

    .search-button {
        background: #FF7175;
        color: #9faab7;
        position: absolute;
        right: 0;
        top: 0;
        width: 150px;
        height: 40px;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        color: #fff;
        font-size: 24px;
        text-align: center;
        border: 0;
    }

    @media only screen and (max-width: 992px){
      .search-button {
          width: 40px;
          background-color: transparent;
          color: #9faab7;
      }
    }
    .iconf-ico-buscar:before {
      content: "🔍";
     }

    .table-api{
      width: 100%;
      max-width: 800px;
      margin-bottom: 20px;
      // background-color: rgb(163, 213, 194 );
      border-spacing: 2;
      border-collapse: collapse;
      border: 3px solid rgb(163, 213, 194 );
      td, tr, th {
        margin: 2px;
        border: 3px solid rgb(163, 213, 194 );
        padding: 10px;
        background-color: white;
      }
    }
    label.title {
      color: rgb(163, 213, 194 );
    }


    .box {
      background-color: white;
      border-radius: 0px;
      /* box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1); */
      box-shadow:  0 0px 0px rgba(0, 0, 0, 0.0), 0 0 0 0px rgba(0, 0, 0, 0.0);
      color: white;
      display: block;
      padding: 10px;
   }

   .shoppingCar{
     position: fixed;
     top: 40px;

   }

</style>
