<template lang="pug">
div
  h1 Este es un componente hijo
  h2 Hijo dos
  local-component
</template>

<script>
import LocalComponent from './LocalComponent.vue'

export default {
  components: { LocalComponent }
}
</script>
