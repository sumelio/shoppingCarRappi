const trackMixin = {
  // Puedo escribir data, directives, computed, filter, methods,
  // Cualquier cosa que sea soportada por un componente
  methods: {
    addProduct (product) {
      this.$emit('add', product)
    },

    removeProduct (product) {
      this.$emit('remove', product)
    },

    deleteProduct (product) {
      this.$emit('delete', product)
    },

    showAllInfo () {
      this.isShowAllInfo = true
    },

    hideAllInfo () {
      this.isShowAllInfo = false
    }
  },

  filters: {
    absolutePath (str) {
      // return str + ' things'
      return 'https://img.rappi.com/products/low/' + str
    },

    extractDescription  (str) {
    // return str + ' things'
      return str.split('.')[0]
    }

  }
}

export default trackMixin
