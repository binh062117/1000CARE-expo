import api from './api'

export default {
  setToken (token) {
    api.defaults.headers.Authorization = 'Bearer ' + token
  },
  productControllerSearchByReserve (reserve,opts, callback) {
    var queryParams = {
      'reserve': reserve,
      'product_status': opts.productStatus,
      'size': opts.size,
      'page': opts.page,
      'distributor_id': opts.distributorId,
    }
    api.get('/products/reserve', {
      params: queryParams,
    }).then((response) => {
      callback(null, response.data, response)
    }).catch((err) => {
      callback(err, null, err.response)
    })
  },
}
