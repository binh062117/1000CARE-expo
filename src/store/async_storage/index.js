import AsyncStorage from '@react-native-async-storage/async-storage'

const setUser = async (user) => {
  try {
    await AsyncStorage.setItem('user', JSON.stringify(user))
  } catch (e) {
    console.log(e)
  }
}

const getUser = async () => {
  try {
    const value = await AsyncStorage.getItem('user')
    if (value !== null) {
      console.log(value)
      return JSON.parse(value)
    }
  } catch (error) {
    console.log(error)
  }
  return null
}

const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('token')
    if (value !== null) {
      console.log(value)
      return value
    }
  } catch (error) {
    console.log(error)
  }
  return null
}

const setToken = async (token) => {
  try {
    await AsyncStorage.setItem('token', token)
  } catch (e) {
    console.log(e)
  }
}

const getRefreshToken = async () => {
  try {
    const value = await AsyncStorage.getItem('refresh_token')
    if (value !== null) {
      console.log(value)
      return value
    }
  } catch (error) {
    console.log(error)
  }
  return null
}

const setRefreshToken = async (refreshToken) => {
  try {
    await AsyncStorage.setItem('refresh_token', refreshToken)
  } catch (e) {
    console.log(e)
  }
}

const clearAll = async () => {
  try {
    const skip = await AsyncStorage.getItem('skipForceUpdate')
    await AsyncStorage.clear()
    await AsyncStorage.setItem('skipForceUpdate', skip)
  } catch(e) {
    // clear error
  }

  console.log('Done.')
}

const setSkipForceUpdate = async (skip) => {
  try {
    await AsyncStorage.setItem('skipForceUpdate', skip)
  }catch(e) {
    console.log(e)
  }
}

const getSkipForceUpdate = async () => {
  try{
    const value = await AsyncStorage.getItem('skipForceUpdate')
    if(value == 'true') {
      return 'true'
    } else {
      console.log('SKIP_FORCE_UPDTE:',value)
      return 'false'
    }
  }catch(e){
    console.log(e)
  }
}

export default {
  setUser,
  getUser,
  getToken,
  setToken,
  getRefreshToken,
  setRefreshToken,
  clearAll,
  getSkipForceUpdate,
  setSkipForceUpdate,
}
