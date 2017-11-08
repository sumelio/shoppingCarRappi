<template lang="pug">
   section
     .hero.is-success
     .hero-head
       header.nav
         .container
           .nav-left
             .nav-item
               strong Rappidier..
           .nav-right.nav-menu
</template>

<script>
import RappiCar from '@/components/Car.vue'

export default {
  components: { RappiCar }
}
</script>
<style lang="scss" scoped>
header.nav {
  background-color: rgb(158, 211, 191);
}

</style>
