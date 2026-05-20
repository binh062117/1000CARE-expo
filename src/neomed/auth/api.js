import helpers from '../utils/helpers'
import api from './apiInstance'
import AuthAPI from './auth'

// Add a response interceptor
const createInterceptor = () => {
  const interceptor = api.interceptors.response.use((response) => {
    console.log('response', response)
    return response
  }, (err) => {
    const errors = helpers.parseError(err)
    if (errors[0] && errors[0].status === '401' && errors[0].code === 'INVALID_TOKEN') {
      api.interceptors.response.eject(interceptor)
      return AuthAPI.refreshToken()
        .then((r) => {
          AuthAPI.setToken(r.data.token)
          err.config.headers.Authorization = api.headers.Authorization
          return api.axios.request(err.config)
        })
        .catch((e) => {
          console.log('unexpected refresh token error:', errors[0])
          AuthAPI.removeToken()
          return Promise.reject(errors[0])
        })
        .finally(createInterceptor)
    }
    return Promise.reject(err)
  })
}
createInterceptor()

export default api
