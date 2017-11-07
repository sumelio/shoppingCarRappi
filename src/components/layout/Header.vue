<template lang="pug">
   section
     p
     rappi-car
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
