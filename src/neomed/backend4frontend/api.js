import axios from 'axios'
import helpers from '../utils/helpers'
import AuthAPI from '../auth/auth'
import { BASEPATH } from '~/constants/config'

const api = axios.create({
  baseURL: BASEPATH,
  timeout: 60000,
  headers: { 
    'accept': 'application/json',
    'Content-Type': 'application/json',
  },
})

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
          err.config.headers.Authorization = api.defaults.headers.Authorization
          return api.request(err.config)
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
