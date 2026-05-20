import Status from '../../common/Status/Status'
import { NEOMED } from '../../store/actionsTypes'

const initialState = {
  loginStatus: Status.DEFAULT,
  token: '',
  refreshToken: '',
  errorMsg: '',
  userId: 0,
  lastRefreshToken: Math.floor(new Date().getTime() / 1000),
  refreshTokenStatus: Status.DEFAULT,
  isLoggedIn: false,
  loginPhoneStatus: Status.DEFAULT,
  requestId: '',
  otpToken: '',
  confirmLoginStatus: Status.DEFAULT,
  confirmLoginErr: '',

  listPhoneByPass: [],
  statusGetPhoneByPass: Status.DEFAULT,

  deleteAcountStatus: Status.DEFAULT,
  deleteAcountId: '',
  deleteOtpToken: '',
  confirmDeleteOtpStatus: Status.DEFAULT,
  confirmDeleteOtpErr: '',
  isLoadNccFavorite: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case NEOMED.LOGIN_LOADING:
      return {
        ...state,
        loginStatus: Status.LOADING,
        refreshTokenStatus: Status.DEFAULT,
        isLoggedIn: false,
      }
    case NEOMED.LOGIN_SUCCESS:
      console.log('login sucess payload', payload)
      return {
        ...state,
        loginStatus: Status.SUCCESS,
        token: payload.token,
        refreshToken: payload.refreshToken,
        userId: payload.userId,
        otpToken: payload.otpToken,
        lastRefreshToken: Math.floor(new Date().getTime() / 1000),
        isLoggedIn: true,
      }
    case NEOMED.LOGIN_FAILURE:
      return {
        ...state,
        loginStatus: Status.ERROR,
        errorMsg: payload.errorMsg,
        isLoggedIn: false,
      }
    case NEOMED.GET_LIST_PHONE_BYPASS_FIREBASE_LOADING:
      return {
        ...state,
        statusGetPhoneByPass: Status.LOADING,
      }
    case NEOMED.GET_LIST_PHONE_BYPASS_FIREBASE_SUCCESS:
      return {
        ...state,
        statusGetPhoneByPass: Status.SUCCESS,
        listPhoneByPass: payload.listPhoneByPass,
      }
    case NEOMED.GET_LIST_PHONE_BYPASS_FIREBASE_FAILURE:
      return {
        ...state,
        statusGetPhoneByPass: Status.ERROR,
      }
    case NEOMED.REFRESH_TOKEN_REQUEST:
      return {
        ...state,
        refreshTokenStatus: Status.LOADING,
        errorMsg: '',
      }
    case NEOMED.REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        lastRefreshToken: Math.floor(new Date().getTime() / 1000),
        token: payload.data.token,
        refreshTokenStatus: Status.SUCCESS,
        isLoggedIn: true,
        userId: payload.data.user_id,
        errorMsg: '',
      }
    case NEOMED.REFRESH_TOKEN_FAILURE:
      return {
        ...state,
        refreshTokenStatus: Status.ERROR,
        loginStatus: Status.DEFAULT,
        token: '',
        refreshToken: '',
        userId: 0,
        errorMsg: '',
        lastRefreshToken: Math.floor(new Date().getTime() / 1000),
        isLoggedIn: false,
      }
    case NEOMED.LOGIN_RESET_REQUEST:
      return {
        loginStatus: Status.DEFAULT,
        token: '',
        refreshToken: '',
        errorMsg: '',
        userId: 0,
        refreshTokenStatus: Status.DEFAULT,
        isLoggedIn: false,
        loginPhoneStatus: Status.DEFAULT,
        requestId: '',
        confirmLoginStatus: Status.DEFAULT,
      }
    case NEOMED.LOGIN_PHONE_LOADING:
      return {
        ...state,
        loginPhoneStatus: Status.LOADING,
        refreshTokenStatus: Status.DEFAULT,
        isLoggedIn: false,
      }
    case NEOMED.LOGIN_PHONE_SUCCESS:
      console.log('login sucess payload', payload)
      return {
        ...state,
        loginPhoneStatus: Status.SUCCESS,
        requestId: payload.requestId,
        otpToken: payload.otpToken,
      }
    case NEOMED.LOGIN_PHONE_FAILURE:
      return {
        ...state,
        loginPhoneStatus: Status.ERROR,
        errorMsg: payload.errorMsg,
        isLoggedIn: false,
      }
    case NEOMED.CONFIRM_LOGIN_LOADING:
      return {
        ...state,
        confirmLoginStatus: Status.LOADING,
      }
    case NEOMED.DELETE_ACCOUNT_OTP_SUCCESS:
      return {
        ...state,
        deleteAcountStatus: Status.SUCCESS,
        deleteAcountId: payload.requestId,
        deleteOtpToken: payload.otpToken,
      }
    case NEOMED.DELETE_ACCOUNT_OTP_FAILURE:
      return {
        ...state,
        deleteAcountStatus: Status.ERROR,
        errorMsg: payload.errorMsg,
      }
    case "RESET_DELETE_ACCOUNT_OTP":
      return {
        ...state,
        deleteAcountStatus: Status.DEFAULT,
        errorMsg: "",
      }
    case NEOMED.CONFIRM_DELETE_ACOUNT_OTP_LOADING:
      return {
        ...state,
        confirmDeleteOtpStatus: Status.LOADING
      }
    case NEOMED.CONFIRM_DELETE_ACOUNT_OTP_SUCCESS:
      return {
        ...state,
        confirmDeleteOtpStatus: Status.SUCCESS,
      }
    case NEOMED.CONFIRM_DELETE_ACOUNT_OTP_FAILURE:
      return {
        ...state,
        confirmDeleteOtpStatus: Status.ERROR,
        confirmDeleteOtpErr: payload.errorMsg,
      }
    case "RESET_CONFIRM_DELETE_ACOUNT":
      return {
        ...state,
        confirmDeleteOtpStatus: Status.DEFAULT,
        confirmDeleteOtpErr: ''
      }
    case "LOAD_NCC_FAVORITE":
      return {
        ...state,
        isLoadNccFavorite: payload.isLoadNccFavorite
      }
    case NEOMED.CONFIRM_LOGIN_SUCCESS:
      return {
        ...state,
        confirmLoginStatus: Status.SUCCESS,
        token: payload.token,
        refreshToken: payload.refreshToken,
        userId: payload.userId,
        lastRefreshToken: Math.floor(new Date().getTime() / 1000),
        isLoggedIn: true,
      }
    case NEOMED.CONFIRM_LOGIN_FAILURE:
      return {
        ...state,
        confirmLoginStatus: Status.ERROR,
        confirmLoginErr: payload.errorMsg,
        isLoggedIn: false,
      }
    case 'RESET_LOGIN_PHONE':
      return {
        ...state,
        loginPhoneStatus: Status.DEFAULT,
        errorMsg: ""
      }
    case 'RESET_CONFIRM_LOGIN_PHONE':
      return {
        ...state,
        confirmLoginStatus: Status.DEFAULT,
        confirmLoginErr: '',
      }
    case 'AUTH_RESET':
      return initialState
    default:
      return state
  }
}