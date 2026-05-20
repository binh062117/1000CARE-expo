import { NEOMED } from '../actionsTypes'

export const getUpdatePharmacy = (body) => ({
  type: NEOMED.GET_UPDATE_PHARMACY_REQUEST,
  payload: {
    body,
  },
})

export const resetUpdatePharmacy = () => ({
  type: 'GET_UPDATE_PHARMACY_RESET',
})

export const getPharmacyById = () => ({
  type: NEOMED.GET_PHARMACY_BY_ID_REQUEST,
})

export const getAddFavouriteSupplier = (idPharma,idSupplier) => ({
  type: NEOMED.GET_ADD_FAVOURITE_SUPPLIER_REQUEST,
  payload: {
    idPharma,
    idSupplier,
  },
})

export const resetAddFavouriteSupplier = () => ({
  type: 'GET_ADD_FAVOURITE_SUPPLIER_RESET',
})

export const getCheckOnlinePharmacy = () => ({
  type: NEOMED.GET_CHECK_ONLINE_PHARMACY_REQUEST,
})
export const addAuthorizedSupplier = payload => ({
  type: NEOMED.ADD_AUTHORIZED_PHARMACY_REQUEST,
  payload,
})
export const resetAddAuthorizedSupplier = () => ({
  type: 'ADD_AUTHORIZED_PHARMACY_RESET',
})