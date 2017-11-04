<template lang="pug">
    #app(class="columns")
        .column
          img.logo(src="https://static.platzi.com/media/user_upload/Page%201-d8d869f4-7130-4ae9-9907-2fa809bd136a.jpg")
          h1.title Registro estación Platzi
          form(method='POST' action='/register')
            div.input-group
              label(for='name') Nombre
              input#name.input-text(type='text', placeholder='Platzerito')
            div.input-group
              label(for='lastname') Apellido:
              input#lastname.input-text(type='text', placeholder='Cool de la Web')
            div.input-group
              label(for='position') Cargo:
              input#position.input-text(type='text', placeholder='Fullstack JS')
            button(type='submit', class="button submit") Enviar
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Registro estación Platzi',
      labelName: 'Nombre',
      textName: 'Platzetiro'
    }
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto");

// Colors
$blue: #00BFD6;
$lightblue: #A3ECF3;
$orange: #FF9300;
$black: #212121;
$white: #FFFFFF;

#app {
    width: 320px;
    height: 409px;
    font-family: 'roboto', sans-serif;
    font-weight: normal;
    display: block;
}

.logo {

}

.title {
    color: $blue;
    font-weight: bold;
    font-size: x-large;
}

label {
    display: block;
    color: $orange;
    font-size: 12px;
}

.input-group {
  margin-top: 10px
}

.input-text {
  border: 0;
  border-bottom: 1px solid $orange;
  width: 85%;
  height: 1.5em;
}

.submit {
    color: $white;
    background-color: $blue;
    font-weight: bold;
}

::-webkit-input-placeholder { /* Chrome */
  color: $black;
}
:-ms-input-placeholder { /* IE 10+ */
  color: $black;
}
::-moz-placeholder { /* Firefox 19+ */
  color: $black;
  opacity: 1;
}
:-moz-placeholder { /* Firefox 4 - 18 */
  color: $black;
  opacity: 1;
}

.submit {
  float: right;
  margin-right: 2.5em;
  margin-top: 1em;
  width: 100px;
}
</style>
