import Status from '../../common/Status/Status'
import { NEOMED } from '../../store/actionsTypes'

const initialState = {
  status: Status.DEFAULT,
  listOrders: [],
  listProductBuyAgian: [],
  next: '',
  orderDetails: {},
  errorMsg: '',

  requestId: '',
  statusConfirmPayment: Status.DEFAULT,
  statusRequestPayment: Status.DEFAULT,
  comfirmPaymentErr: '',

  statusUserConfirm: Status.DEFAULT,
  userConfirmErr: '',

  orderItemHistory: [],

  changeOrderStatus: Status.DEFAULT,
  changeOrderError: '',
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case NEOMED.GET_ORDERS_REQUEST:
    case NEOMED.ORDER_DETAILS_REQUEST:
    case NEOMED.ORDER_PAYMENT_REQUEST:
      return {
        ...state,
        status: Status.LOADING,
      }
    case NEOMED.GET_ITEM_HISTORY_REQUEST:
      return {
        ...state,
        status: Status.LOADING,
        orderItemHistory: [],
      }
    case NEOMED.USER_CONFIRM_REQUEST:
      return {
        ...state,
        userConfirmErr: '',
        statusUserConfirm: Status.LOADING,
      }
    case NEOMED.LIST_ORDER_PAYMENT_REQUEST:
      return {
        ...state,
        statusRequestPayment: Status.LOADING,
      }
    case NEOMED.BUY_AGIAN_REQUEST:
      return {
        ...state,
        next: !payload.loadMore ? '' : state.next,
        status: Status.LOADING,
      }
    case NEOMED.LIST_ORDER_CONFIRM_PAYMENT_REQUEST:
      return {
        ...state,
        statusConfirmPayment: Status.LOADING,
      }
    case NEOMED.GET_ORDERS_SUCCESS:
      let orders = payload.listOrders ? payload.listOrders : []
      if (payload.loadMore && state.next != '') {
        orders = [...state.listOrders, ...orders]
      }
      return {
        ...state,
        status: Status.SUCCESS,
        listOrders: orders,
        // next: payload.next === '' ? '-1' : payload.next,
        next: payload.next === '' ? '' : payload.next,
      }
    case NEOMED.ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        orderDetails: payload.orderDetails,
        status: Status.SUCCESS,
      }
    case NEOMED.ORDER_PAYMENT_SUCCESS:
      return {
        ...state,
        status: Status.SUCCESS,
      }
    case NEOMED.USER_CONFIRM_SUCCESS:
      return {
        ...state,
        userConfirmErr: '',
        statusUserConfirm: Status.SUCCESS,
      }
    case NEOMED.BUY_AGAIN_SUCCESS:
      return {
        ...state,
        status: Status.SUCCESS,
        listProductBuyAgian: payload.listOrders,
      }
    case NEOMED.GET_ORDERS_FAILURE:
      return {
        ...state,
        listOrders: [],
        errorMsg: payload.errorMsg,
        status: Status.ERROR,
      }
    case NEOMED.LIST_ORDER_CONFIRM_PAYMENT_SUCCESS:
      return {
        ...state,
        statusConfirmPayment: Status.SUCCESS,
      }
    case NEOMED.LIST_ORDER_CONFIRM_PAYMENT_FAILURE:
      return {
        ...state,
        comfirmPaymentErr: payload.errorMsg,
        statusConfirmPayment: Status.ERROR,
      }
    case NEOMED.LIST_ORDER_PAYMENT_SUCCESS:
      return {
        ...state,
        requestId: payload.requestId,
        statusRequestPayment: Status.SUCCESS,
        errorMsg: '',
      }
    case NEOMED.GET_ITEM_HISTORY_SUCCESS:
      return {
        ...state,
        status: Status.SUCCESS,
        orderItemHistory: payload.orderItemHistory,
        errorMsg: '',
      }
    case NEOMED.LIST_ORDER_PAYMENT_FAILURE:
      return {
        ...state,
        listOrders: [],
        errorMsg: payload.errorMsg,
        statusRequestPayment: Status.ERROR,
      }
    case NEOMED.ORDER_DETAILS_FAILURE:
    case NEOMED.ORDER_PAYMENT_FAILURE:
    case NEOMED.BUY_AGIAN_FAILURE:
    case NEOMED.GET_ITEM_HISTORY_FAILURE:
      return {
        ...state,
        errorMsg: payload.errorMsg,
        status: Status.ERROR,
      }
    case NEOMED.USER_CONFIRM_FAILURE:
      return {
        ...state,
        userConfirmErr: payload.errorMsg,
        statusUserConfirm: Status.ERROR,
      }
    case NEOMED.CHANGE_ORDER_STATUS_REQUEST: 
      return {
        ...state,
        changeOrderStatus: Status.LOADING,
      }
    case NEOMED.CHANGE_ORDER_STATUS_SUCCESS: 
      return {
        ...state,
        changeOrderStatus: Status.SUCCESS,
      }
    case NEOMED.CHANGE_ORDER_STATUS_FAILURE: 
      return {
        ...state,
        changeOrderError: payload.errorMsg,
        changeOrderStatus: Status.ERROR,
      }
    case 'RESET_CHANGE_ORDER_STATUS': {
      return {
        ...state,
        changeOrderError: '',
        changeOrderStatus: Status.DEFAULT,
      }
    }
    case 'RESET_ORDER':
      return {
        ...state,
        listProductBuyAgian: [],
        listOrders: [],
        requestId: '',
        statusRequestPayment: Status.LOADING,
        statusConfirmPayment: Status.LOADING,
        comfirmPaymentErr: '',
        next: '',
        statusUserConfirm: Status.DEFAULT,
        userConfirmErr: '',
        errorMsg: '',
      }
    case 'RESET_PAYMENT_ORDER_BY_BANK':
      return {
        ...state,
        statusRequestPayment: Status.DEFAULT,
        errorMsg: '',
      }
    case 'RESET_BUY_AGAIN':
      return {
        ...state,
        listProductBuyAgian: [],
      }
    default:
      return state
  }
}