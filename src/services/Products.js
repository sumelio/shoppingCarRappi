import rappiProductService from './rappi-client-api-rest'

const productService = {}

productService.search = function (q, apiUrl) {
  const type = 'track'
  return rappiProductService.get(apiUrl, {
    params: {q, type}
  })
    .then(res => res.data)
}

export default productService
