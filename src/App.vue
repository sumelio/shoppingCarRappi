<template lang="pug">
    #app
      .header
        nav
          .logo
            img.logo(src='http://s03.s3c.es/imag/_v0/771x421/0/1/5/dos-carretera-peli.jpg')
          .search-bar
            input.search(type='text' placeholder='Busca tu peli, actor, actriz ó director favorito')
          .user
            div.container
              p.user-name Juan Luis Rojas
              i.fa.fa-user-circle-o(aria-hidden='true')
              i.fa.fa-sort-desc(aria-hidden='true')
      .content
        .side-bar
          .first
            i.fa.fa-home(aria-hidden='true')
            p Home
            i.fa.fa-heart(aria-hidden='true')
            p Trending
            i.fa.fa-fire(aria-hidden='true')
            p More likes
          .last
            i.fa.fa-cog(aria-hidden='true')
            p Settings
        .content-down
          h2 Ahora en cine
          div.container-images
            div.over
              div.color
                h4 The Secret Life of Pets
                h6 The quiet life of a terrier named Max is upended when his owner takes in Duke, a stray whom Max instantly dislikes.
            div.over
              div.color
                h4 The Secret Life of Pets
                h6 The quiet life of a terrier named Max is upended when his owner takes in Duke, a stray whom Max instantly dislikes.
            div.over
              div.color
                h4 The Secret Life of Pets
                h6 The quiet life of a terrier named Max is upended when his owner takes in Duke, a stray whom Max instantly dislikes.
          h2 Aclamadas por la crítica
          div.container-images
              div.over
                div.color
                  h4 The Secret Life of Pets
                  h6 The quiet life of a terrier named Max is upended when his owner takes in Duke, a stray whom Max instantly dislikes.
              div.over
                div.color
                  h4 The Secret Life of Pets
                  h6 The quiet life of a terrier named Max is upended when his owner takes in Duke, a stray whom Max instantly dislikes.
              div.over
                div.color
                  h4 The Secret Life of Pets
                  h6 The quiet life of a terrier named Max is upended when his owner takes in Duke, a stray whom Max instantly dislikes.
          h2 No te debes  de perder
          div.container-images
            div.over
              div.color
                h4 The Secret Life of Pets
                h6 The quiet life of a terrier named Max is upended when his owner takes in Duke, a stray whom Max instantly dislikes.
            div.over
              div.color
                h4 The Secret Life of Pets
                h6 The quiet life of a terrier named Max is upended when his owner takes in Duke, a stray whom Max instantly dislikes.
            div.over
              div.color
                h4 The Secret Life of Pets
                h6 The quiet life of a terrier named Max is upended when his owner takes in Duke, a stray whom Max instantly dislikes.
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
