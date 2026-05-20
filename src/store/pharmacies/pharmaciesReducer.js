import Status from '../../common/Status/Status'
import { NEOMED } from '../actionsTypes'
const initialState = {
  statusUpdatePharmacy: Status.DEFAULT,
  errorUpdatePharmacy: '',

  statusAddFavouriteSupplier: Status.DEFAULT,
  errorAddFavouriteSupplier: '',

  statusAddAuthorizedSupplier: Status.DEFAULT,
  errorAddAuthorizedSupplier: '',
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case NEOMED.GET_UPDATE_PHARMACY_LOADING:
      return {
        ...state,
        statusUpdatePharmacy:Status.LOADING,
      }
    case NEOMED.GET_UPDATE_PHARMACY_REQUEST:
      return {
        ...state,
        statusUpdatePharmacy:Status.LOADING,
      }
    case NEOMED.GET_UPDATE_PHARMACY_SUCCESS:
      return {
        ...state,
        statusUpdatePharmacy: Status.SUCCESS,
      }
    case NEOMED.GET_UPDATE_PHARMACY_FAILURE:
      return {
        ...state,
        statusUpdatePharmacy: Status.ERROR,
        errorUpdatePharmacy: payload.errorMsg,
      }
    case 'GET_UPDATE_PHARMACY_RESET':
      return {
        ...state,
        statusUpdatePharmacy: Status.DEFAULT,
        errorUpdatePharmacy: '',
      }
    // ADD AUTHORIZED SUPPLIER
    case NEOMED.ADD_AUTHORIZED_PHARMACY_LOADING:
      return {
        ...state,
        statusAddAuthorizedSupplier:Status.LOADING,
      }
    case NEOMED.ADD_AUTHORIZED_PHARMACY_REQUEST:
      return {
        ...state,
        statusAddAuthorizedSupplier:Status.LOADING,
      }
    case NEOMED.ADD_AUTHORIZED_PHARMACY_SUCCESS:
      return {
        ...state,
        statusAddAuthorizedSupplier: Status.SUCCESS,
      }
    case NEOMED.ADD_AUTHORIZED_PHARMACY_FAILURE:
      return {
        ...state,
        statusAddAuthorizedSupplier: Status.ERROR,
        errorAddAuthorizedSupplier: payload.errorMsg,
      }
    case 'ADD_AUTHORIZED_PHARMACY_RESET':
      return {
        ...state,
        statusAddAuthorizedSupplier: Status.DEFAULT,
        errorAddAuthorizedSupplier: '',
      }
    
    case NEOMED.GET_ADD_FAVOURITE_SUPPLIER_LOADING:
      return {
        ...state,
        statusAddFavouriteSupplier: Status.LOADING,
      }
    case NEOMED.GET_ADD_FAVOURITE_SUPPLIER_SUCCESS:
      return {
        ...state,
        statusAddFavouriteSupplier: Status.SUCCESS,
      }
    case NEOMED.GET_ADD_FAVOURITE_SUPPLIER_FAILURE:
      return {
        ...state,
        statusAddFavouriteSupplier: Status.ERROR,
        errorAddFavouriteSupplier: payload.errorMsg.message,
      }
    case 'GET_ADD_FAVOURITE_SUPPLIER_RESET':
      return {
        ...state,
        statusAddFavouriteSupplier: Status.DEFAULT,
        errorAddFavouriteSupplier: '',
      }
    default:
      return state
  }
}
