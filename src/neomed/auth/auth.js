import api from './apiInstance'

export default {
  login(body) {
    return api.request({
      url: '/auth/token',
      method: 'POST',
      body,
      type: 'login-request',
    })
  },
  logout() {
    return api.request({
      url: '/auth/logout',
      method: 'GET',
      type: 'login-request',
    })
  },
  setToken(token) {
    api.headers.Authorization = 'Bearer ' + token
  },
  removeToken() {
    api.headers.Authorization = null
  },
  socialCallback(body) {
    return api.request({
      url: '/auth/social/callback',
      method: 'POST',
      body,
      type: 'social-login-request',
    })
  },
  socialRedirect(provider) {
    return api.request({
      url: '/auth/social/redirect',
      method: 'POST',
      body: {
        provider,
      },
      type: 'social-login-request',
    })
  },
  refreshToken(refresh_token) {
    return api.request({
      url: '/auth/refresh-token',
      method: 'POST',
      body: { 'refresh_token': refresh_token },
      type: 'token-request',
    })
  },
}
