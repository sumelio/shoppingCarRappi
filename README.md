# shoppin-car-rappi

> Shopping car Rapii

## Build Setup

``` bash
npm install -g @vue/cli

vue init webpack-simple shoppingCarRapis

``` 
Project name shoppin-car-rappi
Project description Shopping car Rapii
Author falemusb@correo.udistrital.edu.co
Use sass? Yes


## 2. Install dependecy
``` bash
shoppingCarRappi$ npm i
``` 


##  Validar codigo
## https://github.com/standard/eslint-config-standard
``` bash
npm install --save-dev eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
``` 

``` bash
npm i --save-dev eslint
``` 


Framework para CSS

https://bulma.io/

Para instalar usear -s porque es una dependencia solo de la aplicación

```bash
npm i -s install bulma
```


# install dependencies
``` bash
npm install
npm rebuild node-sass --force
``` 

# serve with hot reload at localhost:8080
``` bash
npm run dev
``` 

# build for production with minification
``` bash
npm run build
```

PUG nos permite crear HTML con otro tipo de sintaxis, escribiendo menos código, y a través de webpack compilarlo para que funcione en el navegador. Es como SASS para css, pero para HTML

https://pugjs.org/api/getting-started.html


$ npm i -D pug pug-loader

```vue
<template lang="pug">
```

Instalar plugins for atom pug
https://atom.io/packages/language-pug

```bash
$ apm install language-pug
```


For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).




1. Step create project
SImple webpck: webpack-simple
Project name: shoppingCarRappi

$ vue init webpack-simple shoppingCarRappi

Project name shoppin-car-rappi
Project description Shopping car Rapii
Author falemusb@correo.udistrital.edu.co
Use sass? Yes

   vue-cli · Generated "shoppingCarRappi".

   To get started:

     cd shoppingCarRappi
     npm install
     npm run dev

2. Install dependecy

shoppingCarRappi$ npm i


http://ianaya89.com/articles

### Español 🇪🇸

Crea tu Sitio Web con Nuxt.js y GitHub Pages - 31 July 2017
Vue.js ❤️ JSX - 16 July 2017
Workshop: Rompiendo el Mundo Binario con Vue.js - 20 May 2017
### English 🇬🇧

Getting Started with SASS - 11 September 2015
Once Pattern in JavaScript - 23 Augost 2015
Using Custom Cursors with CSS - 3 January 2015


Config webpack.config

```json
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve(__dirname, './src')]
      },
```
npm i -D eslint-loader

npm run dev

- Para que funcioné con html el estint

npm i -D eslint-plugin-html



```json
{
  "extends": "standard",
  "rules": {
    "no-new": 0
    },

    "plugins" : ["html"]
}
```

crea   ./scss/main.scss


  @import './scss/main.scss'

```css
html {
  color: red;
  background: red;
}
```


Todo lo que se instala debe aparecer en node_modules


Del archivo crea   ./scss/main.scss importar

@import '../../node_modules/bulma/bulma.sass'




https://www.rappi.com/api-services/windu/products/store/99900037/sub_corridor/441301
https://www.rappi.com/api-services/windu/sub_corridors/store/99900037/corridor/77135

https://www.rappi.com/api-services/windu/products/store/99900037/sub_corridor/77135
https://www.rappi.com/api-services/windu/sub_corridors/store/99900037/corridor/77135


https://www.rappi.com/api-services/windu/sub_corridors/store/6660307/corridor/125827

https://www.rappi.com/api-services/windu/sub_corridors/store/6660307/corridor/125827
https://img.rappi.com/products/low/510872.png


https://www.rappi.com/api-services/windu/sub_corridors/store/6660307/corridor/125772
