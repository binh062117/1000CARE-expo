import { takeLatest, call, put } from 'redux-saga/effects'
import { NEOMED } from '../actionsTypes'
import * as APINeoMed from '~/neomed'
import { asyncStorage } from '../index'

function* getWishlistProduct({ payload = { page: 1, size: 11 } }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Products.getWishList },
      payload.page, payload.size,
    )
    yield put({
      type: NEOMED.GET_WISHLIST_SUCCESS,
      payload: {
        wishlist: data.products ? data.products : [],
        loadMore: payload.loadMore,
      },
    })
  } catch(e) {
    console.log(e)
    yield put({
      type: NEOMED.GET_WISHLIST_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* addProductWishlist({ payload }) {
  try {
    const userData = yield asyncStorage.getUser()

    yield call(
      { content: APINeoMed, fn: APINeoMed.Wishlist.addProductWishlist },
      userData.id, payload.productId,
    )
    yield put({
      type: NEOMED.ADD_PRODUCT_WISHLIST_SUCCESS,
    })
  } catch(e) {
    console.log(e)
    yield put({
      type: NEOMED.ADD_PRODUCT_WISHLIST_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* removeProductFromWishlist({ payload }) {
  try {
    const userData = yield asyncStorage.getUser()

    yield call(
      { content: APINeoMed, fn: APINeoMed.Wishlist.deleteProductWishlist },
      userData.id, payload.productId,
    )
    yield put({
      type: NEOMED.DELETE_PRODUCT_WISHLIST_SUCCESS,
    })
  } catch(e) {
    console.log(e)
    yield put({
      type: NEOMED.DELETE_PRODUCT_WISHLIST_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

export default function*watcherAddress() {
  yield takeLatest([NEOMED.GET_WISHLIST_REQUEST, NEOMED.ADD_PRODUCT_WISHLIST_SUCCESS, NEOMED.DELETE_PRODUCT_WISHLIST_SUCCESS], getWishlistProduct)
  yield takeLatest(NEOMED.ADD_PRODUCT_WISHLIST_REQUEST, addProductWishlist)
  yield takeLatest(NEOMED.DELETE_PRODUCT_WISHLIST_REQUEST, removeProductFromWishlist)
}
