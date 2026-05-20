import { NEOMED } from '../actionsTypes'

export const loginWithAccount = (username, password, rememberMe) => ({
  type: NEOMED.LOGIN_REQUEST,
  payload: {
    username,
    password,
    rememberMe,
  },
})

export const resetLogin = () => ({
  type: NEOMED.LOGIN_RESET_REQUEST,
})

export const logout = () => ({
  type: NEOMED.LOGOUT_REQUEST,
})

export const refreshToken = () => ({
  type: NEOMED.REFRESH_TOKEN_REQUEST,
  payload: {
    force: true,
  },
})

export const loginMobile = (phone, rememberMe) => ({
  type: NEOMED.LOGIN_MOBILE_REQUEST,
  payload: {
    phone,
    rememberMe,
  },
})

export const deleteAccountOtp = (phone, rememberMe) => ({
  type: NEOMED.DELETE_ACCOUNT_OTP_REQUEST,
  payload: {
    phone,
    rememberMe,
  },
})

export const resetDeleteAccountOtp = () => ({
  type: 'RESET_DELETE_ACCOUNT_OTP',
})

export const confirmLoginMobile = (requestId, otp) => ({
  type: NEOMED.CONFIRM_LOGIN_MOBILE_REQUEST,
  payload: {
    requestId,
    otp,
  },
})

export const confirmDeleteAcountOtp = (requestId, otp) => ({
  type: NEOMED.CONFIRM_DELETE_ACOUNT_OTP_REQUEST,
  payload: {
    requestId,
    otp,
  },
})

export const resetConfirmDeleteAcount = () => ({
  type: 'RESET_CONFIRM_DELETE_ACOUNT',
})

export const loginByPhone = (phone, rememberMe) => ({
  type: NEOMED.LOGIN_PHONE_REQUEST,
  payload: {
    phone,
    rememberMe,
  },
})

export const deleteAccountOtpPass = (phone, rememberMe) => ({
  type: NEOMED.DELETE_ACCOUNT_OTP_PASS_REQUEST,
  payload: {
    phone,
    rememberMe,
  },
})

export const confirmLoginPhone = (requestId, otp) => ({
  type: NEOMED.CONFIRM_LOGIN_REQUEST,
  payload: {
    requestId,
    otp,
  },
})

export const confirmLoginFirebase = (token) => ({
  type: NEOMED.CONFIRM_LOGIN_FIREBASE_REQUEST,
  payload: {
    token,
  },
})

export const requestGetListPhoneByPassFirebase = () => ({
  type: NEOMED.GET_LIST_PHONE_BYPASS_FIREBASE_REQUEST,
})

export const resetLoginPhone = () => ({
  type: 'RESET_LOGIN_PHONE',
})

export const resetConfirmLoginPhone = () => ({
  type: 'RESET_CONFIRM_LOGIN_PHONE',
})

export const loadNccFavorite = (isLoadNccFavorite) => ({
  type: 'LOAD_NCC_FAVORITE',
  payload: {
    isLoadNccFavorite,
  },
})