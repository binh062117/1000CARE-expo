import { NEOMED } from '../actionsTypes'

export const addToCart = (productId, distributorId, quantity) => ({
  type: NEOMED.ADD_TO_CART_REQUEST,
  payload: {
    productId,
    distributorId,
    quantity,
  },
})

export const resetStatusAddCart = () => ({
  type: 'RESET_STATUS_ADD_CART',
})

export const updateCart = (productId, distributorId, quantity, body) => ({
  type: NEOMED.UPDATE_CART_REQUEST,
  payload: {
    productId,
    distributorId,
    quantity,
    body,
  },
})

export const getInfo = (payload) => ({
  type: NEOMED.VIEW_CART_REQUEST,
  payload: {
    type: 'preview',
    ids: payload?.ids,
  },
})

export const getCheckoutInfo = (payload) => ({
  type: NEOMED.VIEW_CART_REQUEST,
  payload: {
    type: 'view',
    ids: payload?.ids,
  },
})

export const checkout = (app_trans_id = null) => ({
  type: NEOMED.CHECK_OUT_REQUEST,
  payload: {
    app_trans_id,
  },
})

export const addOptionInfo = (code, type, distributorId, paymentType) => ({
  type: NEOMED.CART_OPTION_INFO_REQUEST,
  payload: {
    code,
    type,
    distributorId,
    paymentType,
  },
})

export const updatePaymentStatus = (order) => ({
  type: NEOMED.UPDATE_PAYMENT_STATUS_REQUEST,
  payload: {
    order,
  },
})

export const requestGetPaymentMethob = (distributorId, paymentType) => ({
  type: NEOMED.GET_PAYMENT_METHOD_REQUEST,
  payload: {
    distributorId,
    paymentType,
  },
})

export const resetCart = () => ({
  type: 'CART_RESET',
})

export const resetStatusCartInfo = () => ({
  type: 'RESET_STATUS_CART_INFO',
})

export const addMultiProductToCart = (products, distributorId) => ({
  type: NEOMED.ADD_MULTI_PRODUCT_TO_CART_REQUEST,
  payload: {
    products,
    distributorId,
  },
})

export const addProdPromotionToCart = (data) => ({
  type: NEOMED.ADD_PRODUCT_PROMOTION_TO_CART_REQUEST,
  payload: {
    data,
  },
})

export const resetAddPorductPromotionStatus = () => ({
  type: 'RESET_ADD_PRODUCT_PROMOTION',
})
