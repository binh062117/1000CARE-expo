import Status from '../../common/Status/Status'
import { NEOMED } from '../../store/actionsTypes'

const initialState = {
  signupStatus: Status.DEFAULT,
  signUpError: '',
  confirmStatus: Status.DEFAULT,
  confirmError: '',
  requestId: '',
  updateProfileStatus: Status.DEFAULT,
  updateProfileError: '',
  updateIdentityStatus: Status.DEFAULT,
  updateIdentityError: '',
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case NEOMED.SIGNUP_LOADING:
      return {
        ...state,
        signupStatus: Status.LOADING,
      }
    case NEOMED.SIGNUP_SUCCESS:
      return {
        ...state,
        signupStatus: Status.SUCCESS,
        requestId: payload.requestId,
      }
    case NEOMED.SIGNUP_FAILURE:
      return {
        ...state,
        signupStatus: Status.ERROR,
        signUpError: payload.errorMsg,
      }
    case NEOMED.CONFIRM_SIGNUP_LOADING:
      return {
        ...state,
        confirmStatus: Status.LOADING,
      }
    case NEOMED.CONFIRM_SIGNUP_SUCCESS:
      return {
        ...state,
        confirmStatus: Status.SUCCESS,
      }
    case NEOMED.CONFIRM_SIGNUP_FAILURE:
      return {
        ...state,
        confirmStatus: Status.ERROR,
        confirmError: payload.errorMsg,
      }
    case NEOMED.UPDATE_IDENTITY_LOADING:
      return {
        ...state,
        updateIdentityStatus: Status.LOADING,
      }
    case NEOMED.UPDATE_IDENTITY_SUCCESS:
      return {
        ...state,
        updateIdentityStatus: Status.SUCCESS,
      }
    case NEOMED.UPDATE_IDENTITY_FAILURE:
      return {
        ...state,
        updateIdentityStatus: Status.ERROR,
        updateIdentityError: payload.errorMsg,
      }
    case NEOMED.UPDATE_PROFILE_LOADING:
      return {
        ...state,
        updateProfileStatus: Status.LOADING,
      }
    case NEOMED.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        updateProfileStatus: Status.SUCCESS,
      }
    case NEOMED.UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        updateProfileStatus: Status.ERROR,
        updateProfileError: payload.errorMsg,
      }

    case 'RESET_UPDATE_PROFILE':
      return {
        ...state,
        updateProfileStatus: Status.DEFAULT,
        updateProfileError: '',
      }
    case 'RESET_UPDATE_IDENTITY':
      return {
        ...state,
        updateIdentityStatus: Status.DEFAULT,
        updateIdentityError: '',
      }
    case 'RESET_SIGNUP':
      return {
        ...state,
        signupStatus: Status.DEFAULT,
        signUpError: '',
      }
    case 'RESET_CONFIRM_SIGNUP':
      return {
        ...state,
        confirmStatus: Status.DEFAULT,
        confirmError: '',
      }
    default:
      return state
  }
}