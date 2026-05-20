import Config from 'react-native-config'
//dev
// const BASEPATH = 'https://dev-api.neomed.vn//v1'
// const BASE_ACCOUNT_PATH = 'https://dev-api.neomed.vn/'
// const BASE_REGISTER_PATH = 'http://123.31.29.218:9000/api/v1'
// const BASE_AUTH_PATH = 'https://dev-api.neomed.vn//api/v1'

const BASEPATH = Config.BASEPATH
const BASE_ACCOUNT_PATH = Config.BASE_ACCOUNT_PATH
const BASE_REGISTER_PATH = Config.BASE_REGISTER_PATH
const BASE_AUTH_PATH = Config.BASE_AUTH_PATH
const CODE_PUSH_KEY = {
  ios: Config.IOS_CODEPUSH_KEY,
  android: Config.ANDROID_CODEPUSH_KEY,
}

export {
  BASEPATH,
  BASE_ACCOUNT_PATH,
  BASE_REGISTER_PATH,
  BASE_AUTH_PATH,
  CODE_PUSH_KEY,
}