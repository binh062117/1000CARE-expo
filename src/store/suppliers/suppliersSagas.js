import { takeLatest, call, put } from 'redux-saga/effects'
import { NEOMED } from '../actionsTypes'
import * as APINeoMed from '../../neomed'

function* getSuppliers() {
  try {
    const data = yield call({
      content: APINeoMed,
      fn: APINeoMed.Suppliers.getSuppliersAll,
    })
    console.log('data Get Suppliers:', data.body)
    yield put({
      type: NEOMED.GET_SUPPLIERS_SUCCESS,
      payload: {
        listSupplier: data.body,
      },
    })
  } catch (e) {
    yield put({
      type: NEOMED.GET_SUPPLIERS_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* getSupplierById({ payload }) {
  console.log('getSupplierById saga ', payload)
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Suppliers.getSupplierById },
      payload.supplierId,
    )
    console.log('response', data)
    yield put({
      type: NEOMED.GET_SUPPLIER_DETAILS_SUCCESS,
      payload: {
        data,
      },
    })
  } catch (error) {
    yield put({
      type: NEOMED.GET_SUPPLIER_DETAILS_FAILURE,
      payload: { errorMsg: error },
    })
  }
}

function* getSupplierByDistributor({ payload }) {
  console.log('getSupplierById saga ', payload)
  try {
    yield put({ type: NEOMED.GET_SUPPLIER_BY_DISTRIBUTOR_LOADING })
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Suppliers.getSupplierByDistributor },
      payload.distributorId, payload.page, payload.size,
    )
    console.log('response', data)
    yield put({
      type: NEOMED.GET_SUPPLIER_BY_DISTRIBUTOR_SUCCESS,
      payload: {
        data,
        loadMore: payload.loadMore,
      },
    })
  } catch (error) {
    yield put({
      type: NEOMED.GET_SUPPLIER_BY_DISTRIBUTOR_FAILURE,
      payload: { errorMsg: error },
    })
  }
}

export default function* watcherGetSupplierById() {
  yield takeLatest(NEOMED.GET_SUPPLIERS_REQUEST, getSuppliers)
  yield takeLatest(NEOMED.GET_SUPPLIER_DETAILS_REQUEST, getSupplierById)
  yield takeLatest(NEOMED.GET_SUPPLIER_BY_DISTRIBUTOR_REQUEST, getSupplierByDistributor)
}
