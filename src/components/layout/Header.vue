<template lang="pug">
   section
       header
         .containerHeader
           .nav-center
               strong Rappidier..
       br
       .nav-center
         router-link.search-button-nav(to="/") Carrito
         router-link.search-button-nav(to="about") Cambiar lA URL de la Api REST Rappi
</template>

<script>
import RappiCar from '@/components/Car.vue'

export default {
  components: { RappiCar }
}
</script>
<style lang="scss" scoped>

.containerHeader {
  display: flex;
  justify-content: space-between;
  background-color: rgb(158, 211, 191);
}
.nav-center{
    width: 100%;
    display: inline-block;
    text-align: center;
}

.search-button-nav {
    background: #FF7175;
    color: #9faab7;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
    text-align: center;
    border: 0;
    padding: 10px;
    margin: 10px;
}
</style>
