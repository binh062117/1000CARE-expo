import { takeLatest, call, put } from 'redux-saga/effects'
import { NEOMED } from '../../store/actionsTypes'
import * as APINeoMed from '../../neomed'
import { asyncStorage } from '../index'
// function* updateIdentity({ payload }) {
//   try {
//     yield put({ type: NEOMED.UPDATE_IDENTITY_LOADING })
//     const data = yield call(
//       { content: APINeoMed, fn: APINeoMed.Authentication.updateIdentity },
//       payload.id)
//     console.log('updateIdentity response', data)
//     yield put({
//       type: NEOMED.UPDATE_IDENTITY_SUCCESS,
//     })
//   } catch (error) {
//     yield put({
//       type: NEOMED.UPDATE_IDENTITY_FAILURE,
//       payload: { errorMsg: error },
//     })
//   }
// }

function* getProfile({ payload }) {
  try {
    yield put({ type: NEOMED.GET_PROFILE_LOADING })
    const userData = yield asyncStorage.getUser()
    console.log('getProfile userData', userData)
    if (!userData?.id){
      yield put({
        type: NEOMED.GET_PROFILE_FAILURE,
        payload: { errorMsg: 'not login' },
      })
      return
    }
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Authentication.getProfile },
      userData?.id)
    console.log('getProfile response', data)
    yield put({
      type: NEOMED.GET_PROFILE_SUCCESS,
      payload: {
        user: data.data,
      },
    })
  } catch (e) {
    yield put({
      type: NEOMED.GET_PROFILE_FAILURE,
      payload: { errorMsg: e },
    })
  }
}

function* getPharmacyInfo({ payload }) {
  try {
    yield put({ type: NEOMED.GET_PHARMACY_INFO_LOADING })
    const userData = yield asyncStorage.getUser()
    // console.log('getPharmacyInfo userData', userData)
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Pharmacy.getPharmacyInfo },
      userData?.id)
    // console.log('getPharmacyInfo response', data)
    yield put({
      type: NEOMED.GET_PHARMACY_INFO_SUCCESS,
      payload: {
        pharmacyInfo: data,
      },
    })
  } catch (e) {
    // console.log('getPharmacyInfo errror::', e)
    yield put({
      type: NEOMED.GET_PHARMACY_INFO_FAILURE,
      payload: { errorMsg: e },
    })
    // const data = yield call(
    //   { content: APINeoMed, fn: APINeoMed.Pharmacy.getPharmacyInfo },
    //   userData?.id)
  }
}

function* deleteAccounts() {
  try {
    yield put({ type: NEOMED.DELETE_ACCOUNT_LOADING })
    const userData = yield asyncStorage.getUser()
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Register.deleteAccount },
      userData?.id,
    )
    yield put({ type: NEOMED.DELETE_ACCOUNT_SUCCESS })
    console.log('xoa thanh congggggggggggggggggg:',data)
  }catch(e) {
    yield put({ type: NEOMED.DELETE_ACCOUNT_FAILURE })
    console.log('xoa that baiiiiiiiiiiiiiiiiii:',e)
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  // yield takeLatest(NEOMED.UPDATE_IDENTITY_REQUEST, updateIdentity)
  yield takeLatest(NEOMED.GET_PROFILE_REQUEST, getProfile)
  yield takeLatest(NEOMED.GET_PHARMACY_INFO_REQUEST, getPharmacyInfo)
  yield takeLatest(NEOMED.DELETE_ACCOUNT_REQUEST,deleteAccounts)
}