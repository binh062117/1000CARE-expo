import AuthAPI from './auth/auth'
import UserAPI from './auth/user'
import md5 from 'md5'

class NeoMedApi {
  
  // auth api
  login = (username, password, rememberMe) => {
    const body = {
      username: username,
      password: md5(password),
      code: '',
      remember_me: rememberMe,
    }
    return AuthAPI.login(body)
  }

  getProfile = (id) => {
    return UserAPI.get(id)
  }

  updateIdentity = (identityId) => {
    const body = {
      national_id: identityId,
    }
    return UserAPI.updateIdentity(body)
  }

  setToken = (token) => {
    return AuthAPI.setToken(token)
  }
  
  removeToken = (token) => {
    return AuthAPI.removeToken(token)
  }

  refreshToken = ({ token, refreshToken }) => {
    console.log({ token, refreshToken })
    AuthAPI.setToken(token)
    return AuthAPI.refreshToken(refreshToken)
  }
}

export const Authentication = new NeoMedApi()