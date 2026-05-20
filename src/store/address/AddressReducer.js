import Status from '../../common/Status/Status'
import { NEOMED } from '../actionsTypes'

const initialState = {
  status: Status.DEFAULT,
  addressBooks: [],
  districts: [],
  provinces: [],
  wards: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case NEOMED.GET_ADDRESS_BOOKS_REQUEST:
    case NEOMED.GET_PROVINCES_REQUEST:
    case NEOMED.GET_DISTRICTS_REQUEST:
    case NEOMED.GET_WARDS_REQUEST:
    case NEOMED.ADD_ADDRESS_REQUEST:
    case NEOMED.UPDATE_ADDRESS_REQUEST:
      return {
        ...state,
        status: Status.LOADING,
      }
    case NEOMED.GET_ADDRESS_BOOKS_SUCCESS:
      return {
        ...state,
        status: Status.SUCCESS,
        addressBooks: payload.addressBooks,
      }
    case NEOMED.GET_PROVINCES_SUCCESS:
      return {
        ...state,
        status: Status.SUCCESS,
        provinces: payload.provinces,
      }
    case NEOMED.GET_DISTRICTS_SUCCESS:
      return {
        ...state,
        status: Status.SUCCESS,
        districts: payload.districts,
      }
    case NEOMED.GET_WARDS_SUCCESS:
      return {
        ...state,
        status: Status.SUCCESS,
        wards: payload.wards,
      }
    case NEOMED.ADD_ADDRESS_SUCCESS:
      return {
        ...state,
        status: Status.SUCCESS,
      }
    case NEOMED.UPDATE_ADDRESS_SUCCESS:
      return {
        ...state,
        status: Status.SUCCESS,
      }
    case NEOMED.GET_ADDRESS_BOOKS_FAILURE:
    case NEOMED.GET_PROVINCES_FAILURE:
    case NEOMED.GET_DISTRICTS_FAILURE:
    case NEOMED.GET_WARDS_FAILURE:
    case NEOMED.ADD_ADDRESS_FAILURE:
      return {
        ...state,
        errorMsg: payload.errorMsg,
        status: Status.ERROR,
      }
    default:
      return state
  }
}