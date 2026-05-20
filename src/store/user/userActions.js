import { NEOMED } from '../actionsTypes'

// export const updateIdentity = (id) => ({
//   type: NEOMED.UPDATE_IDENTITY_REQUEST,
//   payload: {
//     id,
//   },
// })

export const getProfile = () => ({
  type: NEOMED.GET_PROFILE_REQUEST,
})

export const requestGetPharmacyInfo = () => ({
  type: NEOMED.GET_PHARMACY_INFO_REQUEST,
})

export const deleteAccount = () => ({
  type: NEOMED.DELETE_ACCOUNT_REQUEST,
})

export const openAppTheFirst = () => ({
  type: 'OPEN_APP_THE_FIRST',
})