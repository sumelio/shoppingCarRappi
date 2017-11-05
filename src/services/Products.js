import rappiProductService from './rappi-client-api-rest'

const productService = {}

productService.search = function (q) {
  const type = 'track'

  return rappiProductService.get('', {
    params: {q, type}
  })
    .then(res => res.data)
}

export default productService
