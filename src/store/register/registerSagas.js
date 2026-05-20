import { takeLatest, call, put } from 'redux-saga/effects'
import { NEOMED } from '../actionsTypes'
import * as APINeoMed from '~/neomed'

function* signup({ payload }) {
  try {
    yield put({
      type: NEOMED.SIGNUP_LOADING,
    })
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Register.signUp },
      payload.phone,
    )
    console.log('signup:',data)
    yield put({
      type: NEOMED.SIGNUP_SUCCESS,
      payload: {
        requestId: data.request_id,
      },
    })
  } catch (e) {
    yield put({
      type: NEOMED.SIGNUP_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* confirmSignUp({ payload }) {
  try {
    yield put({
      type: NEOMED.CONFIRM_SIGNUP_LOADING,
    })
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Register.confirmSignUp },
      payload.requestId, payload.otp,
    )
    console.log('confirmSignUp:',data)
    yield put({
      type: NEOMED.CONFIRM_SIGNUP_SUCCESS,
    })
  } catch (e) {
    yield put({
      type: NEOMED.CONFIRM_SIGNUP_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* updateIdentity({ payload }) {
  try {
    yield put({
      type: NEOMED.UPDATE_IDENTITY_LOADING,
    })
    yield call(
      { content: APINeoMed, fn: APINeoMed.Register.updateIdentity },
      payload.dob, payload.dateIssue, payload.fullName, payload.nationalId, payload.placeIssue, payload.residenceAddress,
    )
          
    yield put({
      type: NEOMED.UPDATE_IDENTITY_SUCCESS,
    })
  } catch (e) {
    yield put({
      type: NEOMED.UPDATE_IDENTITY_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* updateEmail({ payload }) {
  try {
    yield put({
      type: NEOMED.UPDATE_PROFILE_LOADING,
    })
    yield call(
      { content: APINeoMed, fn: APINeoMed.Register.updateProfile },
      payload.email,
    )
          
    yield put({
      type: NEOMED.UPDATE_PROFILE_SUCCESS,
    })
  } catch (e) {
    yield put({
      type: NEOMED.UPDATE_PROFILE_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

export default function* watcherSaga() {
  yield takeLatest(NEOMED.SIGNUP_REQUEST, signup)
  yield takeLatest(NEOMED.CONFIRM_SIGNUP_REQUEST, confirmSignUp)
  yield takeLatest(NEOMED.UPDATE_IDENTITY_REQUEST, updateIdentity)
  yield takeLatest(NEOMED.UPDATE_PROFILE_REQUEST, updateEmail)
}