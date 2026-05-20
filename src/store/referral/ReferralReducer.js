import Status from '../../common/Status/Status'
import { NEOMED } from '../actionsTypes'
const initialState = {
  applyReferralStatus: Status.DEFAULT,
  applyReferralError: '',
  checkReferralStatus: Status.DEFAULT,
  checkReferralData: '',
}
export default (state = initialState, { type, payload }) => {
  switch (type) {
  case NEOMED.CHECK_REFERRAL_REQUEST:
    return {
      ...state,
      checkReferralStatus: Status.LOADING,
    }
  case NEOMED.CHECK_REFERRAL_SUCCESS:
    return {
      ...state,
      checkReferralStatus: Status.SUCCESS,
      checkReferralData: payload. checkReferralData,
    }
  case NEOMED.CHECK_REFERRAL_FAILURE:
    return {
      ...state,
      checkReferralStatus: Status.ERROR,
    }
  case NEOMED.APPLY_REFERRAL_REQUEST:
    return {
      ...state,
      applyReferralStatus: Status.LOADING,
    }
  case NEOMED.APPLY_REFERRAL_SUCCESS:
    return {
      ...state,
      applyReferralStatus: Status.SUCCESS,
    }
  case NEOMED.APPLY_REFERRAL_FAILURE:
    return {
      ...state,
      applyReferralStatus: Status.ERROR,
      applyReferralError: payload.errorMsg,
    }
  case 'RESET_APPLY_REFERRAL':
    return {
      ...state,
      applyReferralStatus: Status.DEFAULT,
      applyReferralError: '',
    }
  default:
    return state
  }
}
