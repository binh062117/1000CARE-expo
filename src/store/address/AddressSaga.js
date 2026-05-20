import { takeLatest, call, put, select } from 'redux-saga/effects'
import { NEOMED } from '../actionsTypes'
import * as APINeoMed from '~/neomed'
import { getUserId } from '../auth/authSelector'

function* getAddressBooks() {
  const state = yield select()
  const userId = getUserId(state)
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Addresses.getAll },
      userId,
    )
    yield put({
      type: NEOMED.GET_ADDRESS_BOOKS_SUCCESS,
      payload: {
        addressBooks: data.addresses ? data.addresses : [],
      },
    })
  } catch (e) {
    console.log('error get Address', e)
    yield put({
      type: NEOMED.GET_ADDRESS_BOOKS_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* getProvinces({ }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Addresses.getProvinces },
      'vn',
    )
    yield put({
      type: NEOMED.GET_PROVINCES_SUCCESS,
      payload: {
        provinces: data.provinces ? data.provinces : [],
      },
    })
  } catch (e) {
    console.log(e)
    yield put({
      type: NEOMED.GET_PROVINCES_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* getDistricts({ payload }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Addresses.getDistricts },
      payload.province,
    )
    yield put({
      type: NEOMED.GET_DISTRICTS_SUCCESS,
      payload: {
        districts: data.districts ? data.districts : [],
      },
    })
  } catch (e) {
    console.log(e)
    yield put({
      type: NEOMED.GET_DISTRICTS_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* getWards({ payload }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Addresses.getWards },
      payload.district,
    )
    yield put({
      type: NEOMED.GET_WARDS_SUCCESS,
      payload: {
        wards: data.wards ? data.wards : [],
      },
    })
  } catch (e) {
    console.log(e)
    yield put({
      type: NEOMED.GET_WARDS_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* addAddress({ payload }) {
  try {
    yield call(
      { content: APINeoMed, fn: APINeoMed.Addresses.addAddress },
      payload.address,
    )
    yield put({
      type: NEOMED.ADD_ADDRESS_SUCCESS,
    })
  } catch (e) {
    console.log("APINeoMed.Addresses.addAddress", e)
    // yield put({
    //   type: NEOMED.ADD_ADDRESS_FAILURE,
    //   payload: {
    //     errorMsg: e,
    //   },
    // })
  }
}

function* deleteAddress({ payload }) {
  try {
    yield call(
      { content: APINeoMed, fn: APINeoMed.Addresses.deleteAddress },
      payload.id,
    )
    yield put({
      type: NEOMED.DELETE_ADDRESS_SUCCESS,
    })
  } catch (e) {
    console.log(e)
    yield put({
      type: NEOMED.DELETE_ADDRESS_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* updateAddress({ payload }) {
  try {
    yield call(
      { content: APINeoMed, fn: APINeoMed.Addresses.updateAddress },
      payload.id, payload.body,
    )
    yield put({
      type: NEOMED.UPDATE_ADDRESS_SUCCESS,
    })
  } catch (e) {

  }
}

export default function* watcherAddress() {
  yield takeLatest([NEOMED.GET_ADDRESS_BOOKS_REQUEST, NEOMED.ADD_ADDRESS_SUCCESS, NEOMED.DELETE_ADDRESS_SUCCESS, NEOMED.UPDATE_ADDRESS_SUCCESS], getAddressBooks)
  yield takeLatest(NEOMED.GET_PROVINCES_REQUEST, getProvinces)
  yield takeLatest(NEOMED.GET_DISTRICTS_REQUEST, getDistricts)
  yield takeLatest(NEOMED.GET_WARDS_REQUEST, getWards)
  yield takeLatest(NEOMED.ADD_ADDRESS_REQUEST, addAddress)
  yield takeLatest(NEOMED.DELETE_ADDRESS_REQUEST, deleteAddress)
  yield takeLatest(NEOMED.UPDATE_ADDRESS_REQUEST, updateAddress)
}
