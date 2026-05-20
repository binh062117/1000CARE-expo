import { NEOMED } from '../actionsTypes'

export const getAddressBooksRequest = () => ({
  type: NEOMED.GET_ADDRESS_BOOKS_REQUEST,
})

export const getProvincesRequest = () => ({
  type: NEOMED.GET_PROVINCES_REQUEST,
})

export const getDistrictsRequest = (province) => ({
  type: NEOMED.GET_DISTRICTS_REQUEST,
  payload: {
    province,
  },
})

export const getWardsRequest = (district) => ({
  type: NEOMED.GET_WARDS_REQUEST,
  payload: {
    district,
  },
})

export const addAddressRequest = (address) => ({
  type: NEOMED.ADD_ADDRESS_REQUEST,
  payload: {
    address,
  },
})

export const deleteAddressRequest = (id) => ({
  type: NEOMED.DELETE_ADDRESS_REQUEST,
  payload: {
    id,
  },
})

export const updateAddressRequest = (id,body) => ({
  type: NEOMED.UPDATE_ADDRESS_REQUEST,
  payload: {
    id,
    body
  }
})