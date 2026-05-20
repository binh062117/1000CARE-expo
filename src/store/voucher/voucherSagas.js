import { takeLatest, call, put } from 'redux-saga/effects'
import { NEOMED } from '../actionsTypes'
import * as APINeoMed from '../../neomed'
import { asyncStorage } from '../index'

function* getListVoucherByCustomer({ payload }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Voucher.getListVoucherByCustomers },
      payload.distributorId, payload.status,payload.page, payload.size,
    )
    console.log('response Voucher:', data)
    yield put({
      type: NEOMED.GET_LIST_VOUCHER_BY_CUSTOMER_SUCCESS,
      payload: {
        listVoucher: data.vouchers,
        loadMore: payload.loadMore,
      },
    })
  } catch (error) {
    yield put({
      type: NEOMED.GET_LIST_VOUCHER_BY_CUSTOMER_FAILURE,
      payload: { errorMsg: error },
    })
  }
}

function* getListVoucherValidByCustomer({ payload }) {
  try {
    const userData = yield asyncStorage.getUser()

    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Voucher.getListVoucherValidByCustomers },
      userData?.id, payload.distributorId, payload.orderAmount, payload.page, payload.size, payload.payment_method,
    )
    console.log('response Voucher:', data)
    yield put({
      type: NEOMED.GET_LIST_VOUCHER_VALID_BY_CUSTOMER_SUCCESS,
      payload: {
        listVoucher: data.vouchers,
        loadMore: payload.loadMore,
      },
    })
  } catch (error) {
    yield put({
      type: NEOMED.GET_LIST_VOUCHER_VALID_BY_CUSTOMER_FAILURE,
      payload: { errorMsg: error },
    })
  }
}

export default function* watcherSaga() {
  yield takeLatest(NEOMED.GET_LIST_VOUCHER_VALID_BY_CUSTOMER_REQUEST, getListVoucherValidByCustomer)
  yield takeLatest(NEOMED.GET_LIST_VOUCHER_BY_CUSTOMER_REQUEST, getListVoucherByCustomer)
}
