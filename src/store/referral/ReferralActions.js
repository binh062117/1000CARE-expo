import { NEOMED } from '../actionsTypes'

export const requestCheckReferral = () => ({
  type: NEOMED.CHECK_REFERRAL_REQUEST,
})

export const requestApplyReferral = (refCode) => ({
  type: NEOMED.APPLY_REFERRAL_REQUEST,
  payload: {
    refCode,
  },
})

export const requestResetApplyReferral = () => ({
  type: 'RESET_APPLY_REFERRAL',
})