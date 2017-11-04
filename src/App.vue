<template lang="pug">
  #app
    child
      h1(slot="title") Titulo slot
      div(slot="body")
        p ddddd ddd
        p ddddd ddd

</template>

<script>

import child from '@/components/ChildComponent.vue'

export default {
  name: 'app',

  components: { child },

  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
;
  .results {
    margin-top: 50px;
  }

  .is-active {
    border: 3px #23d160 solid;
  }
</style>
