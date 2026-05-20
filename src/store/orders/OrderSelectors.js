export const getListOrders = state => state.order.listOrders

export const getOrderDetails = state => state.order.orderDetails

export const getOrderRequestStatus = state => state.order.status

export const getPaymentRequestId = state => state.order.requestId

export const getConfirmPaymentStatus = state => state.order.statusConfirmPayment

export const getConfirmPaymentError = state => state.order.comfirmPaymentErr

export const getOrderError = state => state.order.errorMsg

export const getListProductBuyAgian = state => state.order.listProductBuyAgian

export const getStatusRequestPayment = state => state.order.statusRequestPayment

export const getUserConfirmStatus = state => state.order.statusUserConfirm

export const getUserConfirmError = state => state.order.userConfirmErr

export const getOrderItemHistory = state => state.order.orderItemHistory

export const getChangeOrderError = state => state.order.changeOrderError
export const getChangeOrderStatus = state => state.order.changeOrderStatus
