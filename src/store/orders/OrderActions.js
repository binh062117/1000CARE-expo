import { NEOMED } from '../actionsTypes'

export const getOrders = (size, loadMore, status, paymentMethob, paymentStatus) => ({
  type: NEOMED.GET_ORDERS_REQUEST,
  payload: {
    size,
    loadMore,
    status,
    paymentMethob,
    paymentStatus,
  },
})

export const requestGetOrderDetails = (id) => ({
  type: NEOMED.ORDER_DETAILS_REQUEST,
  payload: {
    orderId: id,
  },
})

export const paymentOrder = (id, paymentCode) => ({
  type: NEOMED.ORDER_PAYMENT_REQUEST,
  payload: {
    orderId: id,
    paymentCode,
  },
})

export const requestPaymentOrderBybank = (orderIds, distributorId, paymentCode) => ({
  type: NEOMED.LIST_ORDER_PAYMENT_REQUEST,
  payload: {
    orderIds,
    distributorId,
    paymentCode,
  },
})

export const requestPaymentOrderBybankConfirm = (requestId, otp) => ({
  type: NEOMED.LIST_ORDER_CONFIRM_PAYMENT_REQUEST,
  payload: {
    otp,
    requestId,
  },
})

export const requestBuyAgain = (orderId) => ({
  type: NEOMED.BUY_AGAIN_REQUEST,
  payload: {
    orderId,
  },
})

export const resetBuyAgain = () => ({
  type: 'RESET_BUY_AGAIN',
})

export const requestUserConfirm = (orderId) => ({
  type: NEOMED.USER_CONFIRM_REQUEST,
  payload: {
    orderId,
  },
})

export const resetOrder = () => ({
  type: 'RESET_ORDER',
})

export const requestGetItemHistory = (orderId, cursor) => ({
  type: NEOMED.GET_ITEM_HISTORY_REQUEST,
  payload: {
    orderId,
    cursor: cursor || '',
  },
})

export const resetPaymentOrderByBank = () => {
  return {
    type: 'RESET_PAYMENT_ORDER_BY_BANK',
  }
}

export const requestChangeOrderStatus = (orderId, reason) => {
  return {
    type: NEOMED.CHANGE_ORDER_STATUS_REQUEST,
    payload: {
      orderId,
      reason,
    },
  }
}

export const resetChangeOrderStatus = () => {
  return {
    type: 'RESET_CHANGE_ORDER_STATUS',
    payload: {
    },
  }
}