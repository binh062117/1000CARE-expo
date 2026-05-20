import Status from '../../common/Status/Status'
import { NEOMED } from '../actionsTypes'

const initialState = {
  status: Status.DEFAULT,
  wishLists: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case NEOMED.GET_WISHLIST_REQUEST:
  case NEOMED.ADD_PRODUCT_WISHLIST_REQUEST:
  case NEOMED.DELETE_PRODUCT_WISHLIST_REQUEST:
    return {
      ...state,
      status: Status.LOADING,
    }
  case NEOMED.GET_WISHLIST_SUCCESS:
    let wishLists = payload.wishlist ? payload.wishlist : []
    if (payload.loadMore) {
      wishLists = [...state.wishLists, ...wishLists]
    }
    return {
      ...state,
      status: Status.SUCCESS,
      wishLists,
    }
  case NEOMED.ADD_PRODUCT_WISHLIST_SUCCESS:
  case NEOMED.DELETE_PRODUCT_WISHLIST_SUCCESS:
    return {
      ...state,
      status: Status.SUCCESS,
    }
  case NEOMED.GET_WISHLIST_FAILURE:
    return {
      ...state,
      wishLists: [],
      errorMsg: payload.errorMsg,
      status: Status.ERROR,
    }
  case NEOMED.ADD_PRODUCT_WISHLIST_FAILURE:
  case NEOMED.DELETE_PRODUCT_WISHLIST_FAILURE:
    return {
      ...state,
      errorMsg: payload.errorMsg,
      status: Status.ERROR,
    }
  default:
    return state
  }
}