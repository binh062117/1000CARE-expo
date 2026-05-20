import Status from '../../common/Status/Status'
import { NEOMED } from '../../store/actionsTypes'

const initialState = {
  status: Status.DEFAULT,
  checkoutStatus: Status.DEFAULT,
  listItem: null,
  listOrder: [],
  paymentMethob: {},
  checkoutItem: null,
  checkoutData: {},
  errorMsg: '',
  addItemStatus: Status.DEFAULT,
  addCartInfoStatus: Status.DEFAULT,
  updateCartStatus: Status.DEFAULT,
  addProductPromotionToCartStatus: Status.DEFAULT,
  vietqrAppTransId: null,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case NEOMED.ADD_TO_CART_REQUEST:
    case NEOMED.ADD_MULTI_PRODUCT_TO_CART_REQUEST:
      return {
        ...state,
        addItemStatus: Status.LOADING,
      }

    case NEOMED.UPDATE_CART_REQUEST:
      return {
        ...state,
        updateCartStatus: Status.LOADING,
      }
    case NEOMED.VIEW_CART_REQUEST:
    case NEOMED.GET_PAYMENT_METHOD_REQUEST:
      return {
        ...state,
        status: Status.LOADING,
      }
    case NEOMED.CHECK_OUT_REQUEST:
      return {
        ...state,
        checkoutStatus: Status.LOADING,
      }
    case NEOMED.GET_PAYMENT_METHOD_SUCCESS:
      const paymentMethobTemp = {
        ...state.paymentMethob,
      }
      if (!paymentMethobTemp[payload.distributorId]) {
        paymentMethobTemp[payload.distributorId] = {}
      }
      paymentMethobTemp[payload.distributorId][payload.paymentType] = (payload.items || []).map(it => { return { ...it, paymentType: payload.paymentType } })
      return {
        ...state,
        paymentMethob: { ...paymentMethobTemp },
        status: Status.SUCCESS,
      }
    case NEOMED.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        addItemStatus: Status.SUCCESS,
      }
    case 'RESET_STATUS_ADD_CART':
      return {
        ...state,
        addItemStatus: Status.DEFAULT,
      }
    case 'RESET_STATUS_CART_INFO':
      return {
        ...state,
        addCartInfoStatus: Status.ERROR,
      }
    case NEOMED.UPDATE_CART_SUCCESS:
      return {
        ...state,
        updateCartStatus: Status.SUCCESS,
      }
    case NEOMED.CART_OPTION_INFO_REQUEST:
      return {
        ...state,
        addCartInfoStatus: Status.LOADING,
      }
    case NEOMED.CART_OPTION_INFO_SUCCESS:
      return {
        ...state,
        addCartInfoStatus: Status.SUCCESS,
      }
    case NEOMED.CART_OPTION_INFO_FAILURE:
      return {
        ...state,
        errorMsg: payload.errorMsg,
        addCartInfoStatus: Status.ERROR,
      }
    case NEOMED.VIEW_CART_FAILURE:
      return {
        ...state,
        errorMsg: payload.errorMsg,
        status: Status.ERROR,
        listItem: [],
      }
    case NEOMED.UPDATE_CART_FAILURE:
      return {
        ...state,
        errorMsg: payload.errorMsg,
        updateCartStatus: Status.SUCCESS,
      }
    case NEOMED.ADD_TO_CART_FAILURE:
    case NEOMED.GET_PAYMENT_METHOD_FAILURE:
      return {
        ...state,
        errorMsg: payload.errorMsg,
        status: Status.ERROR,
      }
    case NEOMED.VIEW_CART_SUCCESS:
      return {
        ...state,
        listItem: payload.listItem,
        status: Status.SUCCESS,
      }
    case NEOMED.CHECK_OUT_FAILURE:
      return {
        ...state,
        errorMsg: payload.errorMsg,
        checkoutStatus: Status.ERROR,
      }
    case NEOMED.CHECK_OUT_SUCCESS:
      return {
        ...state,
        checkoutData: payload.checkoutData,
        checkoutStatus: Status.SUCCESS,
      }
    case NEOMED.UPDATE_PAYMENT_STATUS_REQUEST:
      const listOrder = state.listOrder.map(item => {
        if (item.order_id === payload.order.order_id) {
          return {
            ...item,
            ...payload.order,
          }
        }
        return item
      })
      return {
        ...state,
        listOrder,
      }
    case NEOMED.ADD_PRODUCT_PROMOTION_TO_CART_REQUEST:
      return {
        ...state,
        addProductPromotionToCartStatus: Status.LOADING,
      }
    case NEOMED.ADD_PRODUCT_PROMOTION_TO_CART_SUCCESS:
      return {
        ...state,
        listItem: payload.listItem,
        addProductPromotionToCartStatus: Status.SUCCESS,
      }
    case NEOMED.ADD_PRODUCT_PROMOTION_TO_CART_FAILURE:
      return {
        ...state,
        errorMsg: payload.errorMsg,
        addProductPromotionToCartStatus: Status.ERROR,
      }
    case 'RESET_ADD_PRODUCT_PROMOTION': {
      return {
        ...state,
        addProductPromotionToCartStatus: Status.DEFAULT,
      }
    }
    case 'SET_VIETQR_APP_TRANS_ID':
      return {
        ...state,
        vietqrAppTransId: payload.appTransId,
      }
    case 'CART_RESET':
      return {
        ...state,
        status: Status.DEFAULT,
        checkoutStatus: Status.DEFAULT,
        listItem: null,
        listOrder: [],
        paymentMethob: [],
        checkoutItem: null,
        errorMsg: '',
        addItemStatus: Status.DEFAULT,
        vietqrAppTransId: null,
      }
    default:
      return state
  }
}