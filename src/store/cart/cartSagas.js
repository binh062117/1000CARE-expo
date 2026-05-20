import { takeLatest, call, put, takeEvery } from 'redux-saga/effects'
import { NEOMED } from '../actionsTypes'
import * as APINeoMed from '~/neomed'
import { asyncStorage } from '../index'

function* addProdToCart({ payload }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Carts.addToCart },
      payload.productId, payload.distributorId, payload.quantity,
    )
    console.log('data Get AddProduct To Cart:', data)
    yield put({
      type: NEOMED.ADD_TO_CART_SUCCESS,
    })
  } catch (e) {
    yield put({
      type: NEOMED.ADD_TO_CART_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* addMultiProdToCart({ payload }) {
  try {
    const userData = yield asyncStorage.getUser()
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Carts.addMultiProdToCart },
      {
        products: payload.products,
        distributor_id: payload.distributorId,
        customer_id: userData?.id,
      },
    )
    console.log('data Get AddProduct To Cart:', data)
    yield put({
      type: NEOMED.ADD_TO_CART_SUCCESS,
    })
  } catch (e) {
    yield put({
      type: NEOMED.ADD_TO_CART_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* updateProdInCart({ payload }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Carts.updateCart },
      payload.productId, payload.distributorId, payload.quantity, payload.body,
    )
    console.log('updateProdInCart ', data)
    yield put({
      type: NEOMED.UPDATE_CART_SUCCESS,
    })
  } catch (e) {
    yield put({
      type: NEOMED.UPDATE_CART_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* getViewCart({ payload }) {
  console.log('PAYLOAD VIEW CART:::1111', payload)
  try {
    let data = null
    if (payload && payload.type === 'checkout') {
      data = yield call(
        { content: APINeoMed, fn: APINeoMed.CartCustom.viewCart },
        'checkout',
        String(payload.ids),
      )
    } else {
      data = yield call(
        { content: APINeoMed, fn: APINeoMed.CartCustom.viewCart },
        'view',
        payload && payload.ids ? String(payload.ids) : '',
      )
    }
    console.log('getViewCart ', data)
    yield put({
      type: NEOMED.VIEW_CART_SUCCESS,
      payload: {
        listItem: data ? data : [],
      },
    })
    yield put({
      type: 'RESET_LIST_VOUCHER_EXPIRED',
    })
  } catch (e) {
    console.log('error', e)
    yield put({
      type: NEOMED.VIEW_CART_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* getViewCartCheckout({ payload }) {
  console.log('PAYLOAD VIEW CART:::22222', payload)
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.CartCustom.viewCart },
      'checkout',
      String(payload.ids),
    )
    console.log('getViewCart ', data)
    yield put({
      type: NEOMED.VIEW_CART_SUCCESS,
      payload: {
        listItem: data ? data : [],
      },
    })
  } catch (e) {
    yield put({
      type: NEOMED.VIEW_CART_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* checkout({ payload }) {
  try {
    const app_trans_id = payload?.app_trans_id || null
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Carts.checkout },
      app_trans_id,
    )
    console.log('checkout ', data)
    yield put({
      type: NEOMED.CHECK_OUT_SUCCESS,
      payload: {
        checkoutData: data,
      },
    })
  } catch (e) {
    yield put({
      type: NEOMED.CHECK_OUT_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* addOptionInfo({ payload }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Carts.addOptionInfo },
      payload.code, payload.type, payload.distributorId, payload.paymentType,
    )
    console.log('data addOptionInfo:', data)
    yield put({
      type: NEOMED.CART_OPTION_INFO_SUCCESS,
      payload: {
        listItem: data.order_ids ? data.order_ids : [],
      },
    })
  } catch (e) {
    yield put({
      type: NEOMED.CART_OPTION_INFO_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* getPaymentMethod({ payload }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Carts.getListPaymentMethob },
      payload.distributorId, payload.paymentType,
    )
    yield put({
      type: NEOMED.GET_PAYMENT_METHOD_SUCCESS,
      payload: {
        items: data.items ? data.items : [],
        distributorId: payload.distributorId,
        paymentType: payload.paymentType,
      },
    })
  } catch (e) {
    yield put({
      type: NEOMED.GET_PAYMENT_METHOD_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* addProdPromotionToCart({ payload }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Carts.addProdPromotionToCart },
      payload.data,
    )
    yield put({
      type: NEOMED.ADD_PRODUCT_PROMOTION_TO_CART_SUCCESS,
      payload: {
        listItem: data ? data : [],
      },
    })
  } catch (e) {
    yield put({
      type: NEOMED.ADD_PRODUCT_PROMOTION_TO_CART_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

export default function* watcherSaga() {
  yield takeLatest(NEOMED.ADD_TO_CART_REQUEST, addProdToCart)
  yield takeLatest(NEOMED.ADD_MULTI_PRODUCT_TO_CART_REQUEST, addMultiProdToCart)
  yield takeLatest(NEOMED.UPDATE_CART_REQUEST, updateProdInCart)
  yield takeLatest([
    NEOMED.VIEW_CART_REQUEST, NEOMED.ADD_TO_CART_SUCCESS, NEOMED.UPDATE_CART_FAILURE,
    NEOMED.UPDATE_CART_SUCCESS, NEOMED.GET_ALL_DISTRIBUTORS_SUCCESS, NEOMED.GET_SUPPLIER_BY_DISTRIBUTOR_SUCCESS,
    NEOMED.GET_PRODUCTS_BY_CATE_SUCCESS, NEOMED.GET_PRODUCT_DETAILS_SUCCESS,
  ], getViewCart)
  yield takeLatest([NEOMED.CHECK_OUT_SUCCESS, NEOMED.CART_OPTION_INFO_SUCCESS,
  ], getViewCartCheckout)
  yield takeLatest(NEOMED.CHECK_OUT_REQUEST, checkout)
  yield takeEvery(NEOMED.CART_OPTION_INFO_REQUEST, addOptionInfo)
  yield takeEvery(NEOMED.GET_PAYMENT_METHOD_REQUEST, getPaymentMethod)
  yield takeEvery(NEOMED.ADD_PRODUCT_PROMOTION_TO_CART_REQUEST, addProdPromotionToCart)
}