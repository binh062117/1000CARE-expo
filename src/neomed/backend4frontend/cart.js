import api from './api'

export default {
  setToken (token) {
    api.defaults.headers.Authorization = 'Bearer ' + token
  },
  cartControllerViewCart (step,opts, callback) {
    var queryParams = {
      'step': step,
      'ids': opts.ids?.join(','),
    }
    api.get('/carts/view', {
      params: queryParams,
    }).then((response) => {
      callback(null, response.data, response)
    }).catch((err) => {
      callback(err, null, err.response)
    })
  },
}
