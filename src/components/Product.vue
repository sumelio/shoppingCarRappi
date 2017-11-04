<template lang="pug">
  .card
    .card-image
      figure.image.is-1by1
        img(:src="product.album.images[0].url")

    .card-content
      .media
        .medi-left
          figure.image.is-48x48
            img(:src="product.album.images[0].url")
        .media-content
          p.title.is-6
            strong {{ product.name }}
          p.subtitle.is-6 {{ product.artists[0].name }}
      .content
        small {{ product.duration_ms}}
          nav.level
            .level-left
              a.level-item
                span.icon.is-small(@click="selectTrack") 🎧
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
    }
  }
</script>

<style>

</style>
