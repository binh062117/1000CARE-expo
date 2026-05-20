import Status from '../../common/Status/Status'
import { NEOMED } from '../../store/actionsTypes'

const initialState = {
  getProfileStatus: Status.DEFAULT,
  getPharmacyInfoStatus: Status.DEFAULT,
  user: null,
  pharmacyInfo: null,

  deleteAcountPharmaStatus: Status.DEFAULT,

  openAppTheFirst: 0
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case NEOMED.GET_PROFILE_LOADING:
    return {
      ...state,
      getProfileStatus: Status.LOADING,
    }
  case NEOMED.GET_PROFILE_SUCCESS:
    return {
      ...state,
      getProfileStatus: Status.SUCCESS,
      user: payload.user,
    }
  case NEOMED.GET_PROFILE_FAILURE:
    return {
      ...state,
      getProfileStatus: Status.ERROR,
    }
  case NEOMED.GET_PHARMACY_INFO_LOADING:
    return {
      ...state,
      getPharmacyInfoStatus: Status.LOADING,
    }
  case NEOMED.GET_PHARMACY_INFO_SUCCESS:
    return {
      ...state,
      getPharmacyInfoStatus: Status.SUCCESS,
      pharmacyInfo: payload.pharmacyInfo,
    }
  case NEOMED.GET_PHARMACY_INFO_FAILURE:
    return {
      ...state,
      getPharmacyInfoStatus: Status.ERROR,
    }
  case 'USER_RESET':
    return {
      getProfileStatus: Status.DEFAULT,
      user: null,
    }
  case NEOMED.DELETE_ACCOUNT_LOADING:
    return {
      ...state,
      deleteAcountPharmaStatus: Status.LOADING
    }
  case NEOMED.DELETE_ACCOUNT_SUCCESS:
    return {
      ...state,
      deleteAcountPharmaStatus: Status.SUCCESS
    }
  case NEOMED.DELETE_ACCOUNT_FAILURE:
    return {
      ...state,
      deleteAcountPharmaStatus: Status.ERROR
    }
  case 'OPEN_APP_THE_FIRST':
    return {
      ...state,
      openAppTheFirst: 1
    }
  default:
    return state
  }
}