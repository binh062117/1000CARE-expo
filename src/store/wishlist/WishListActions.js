import { NEOMED } from '../actionsTypes'

export const requestGetWishList = (page = 1, size = 11, loadMore) => ({
  type: NEOMED.GET_WISHLIST_REQUEST,
  payload: {
    page,
    size,
    loadMore,
  },
})

export const requestAddProductWishList = (productId) => ({
  type: NEOMED.ADD_PRODUCT_WISHLIST_REQUEST,
  payload: {
    productId,
  },
})

export const requestRemoveProductWishList = (productId) => ({
  type: NEOMED.DELETE_PRODUCT_WISHLIST_REQUEST,
  payload: {
    productId,
  },
})
