import { takeLatest, call, put } from 'redux-saga/effects'
import { NEOMED } from '../actionsTypes'
import * as APINeoMed from '../../neomed'
import { asyncStorage } from '../index'

function* updatePharmacy({ payload }) {
  try {
    yield put({ type: NEOMED.GET_UPDATE_PHARMACY_LOADING })
    const userData = yield asyncStorage.getUser()
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Pharmacy.updatePharmacys },
      userData?.id,
      payload.body,
    )

    yield put({
      type: NEOMED.GET_UPDATE_PHARMACY_SUCCESS,
      payload: {
        data,
      },
    })
  } catch (error) {
    console.log('11111111111111111111111:', error)
    yield put({
      type: NEOMED.GET_UPDATE_PHARMACY_FAILURE,
      payload: { errorMsg: error },
    })
  }
}

function* getPharmacyById() {
  try {
    yield put({ type: NEOMED.GET_PHARMACY_BY_ID_LOADING })
    const userData = yield asyncStorage.getUser()
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Pharmacy.getPharmacyInfo },
      userData?.id,
    )

    console.log('response PharmacyById:', data)
    yield put({
      type: NEOMED.GET_PHARMACY_BY_ID_SUCCESS,
      payload: {
        data,
      },
    })
  } catch (error) {
    yield put({
      type: NEOMED.GET_PHARMACY_BY_ID_FAILURE,
      payload: { errorMsg: error },
    })
  }
}

function* getAddFavouriteSuppliers({ payload }) {
  try {
    yield put({ type: NEOMED.GET_ADD_FAVOURITE_SUPPLIER_LOADING })
    const data = yield call({ content: APINeoMed, fn: APINeoMed.Pharmacy.getAddFavouriteSupplier },
      payload.idPharma, payload.idSupplier,
    )
    console.log('add getAddFavouriteSuppliers:',data)
    yield put({ type: NEOMED.GET_ADD_FAVOURITE_SUPPLIER_SUCCESS })
  } catch(error) {
    yield put({
      type: NEOMED.GET_ADD_FAVOURITE_SUPPLIER_FAILURE,
      payload: { errorMsg: error },
    })
  }
}

function* getCheckOnlinePharmacy() {
  try {
    yield put({ type: NEOMED.GET_CHECK_ONLINE_PHARMACY_LOADING })
    const data = yield call({ content: APINeoMed, fn: APINeoMed.Pharmacy.getCheckOnlinePharma },
    )
    console.log('loggggg getCheckOnlinePharmaCCCCCCCCCCCCCCC:',data)
    yield put({ type: NEOMED.GET_CHECK_ONLINE_PHARMACY_SUCCESS })
  } catch(error) {
    yield put({
      type: NEOMED.GET_CHECK_ONLINE_PHARMACY_FAILURE,
      payload: { errorMsg: error },
    })
  }
}
function* addAuthorizedPharmacy({ payload }) {
  console.log('payload to controller::', payload)
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Pharmacy.addAuthorizedSupplier },
      payload,
    )
    console.log('data from server::', data)
    yield put({
      type: NEOMED.ADD_AUTHORIZED_PHARMACY_SUCCESS,
    })
  } catch (error) {
    yield put({
      type: NEOMED.ADD_AUTHORIZED_PHARMACY_FAILURE,
      payload: { errorMsg: error },
    })
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSagas() {
  yield takeLatest(NEOMED.GET_UPDATE_PHARMACY_REQUEST, updatePharmacy)
  yield takeLatest(NEOMED.GET_PHARMACY_BY_ID_REQUEST, getPharmacyById)
  yield takeLatest(NEOMED.ADD_AUTHORIZED_PHARMACY_REQUEST, addAuthorizedPharmacy)
  yield takeLatest(NEOMED.GET_ADD_FAVOURITE_SUPPLIER_REQUEST, getAddFavouriteSuppliers)
  yield takeLatest(NEOMED.GET_CHECK_ONLINE_PHARMACY_REQUEST, getCheckOnlinePharmacy)
}