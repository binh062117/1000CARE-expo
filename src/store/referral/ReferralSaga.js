import { takeLatest, call, put } from 'redux-saga/effects'
import { NEOMED } from '../actionsTypes'
import * as APINeoMed from '~/neomed'

function* applyReferral({ payload }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Referral.applyReferral },
      payload.refCode,
    )
    
    console.log('applyReferral Saga data: ',data)
    yield put({
      type: NEOMED.APPLY_REFERRAL_SUCCESS,
    })
  } catch(e) {
    console.log('applyReferral Saga error ',e)
    yield put({
      type: NEOMED.APPLY_REFERRAL_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* checkReferral({ }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Referral.checkReferral },
    )
    
    console.log('checkReferral Saga data: ',data)
    yield put({
      type: NEOMED.CHECK_REFERRAL_SUCCESS,
      payload: {
        checkReferralData: data,
      },
    })
  } catch(e) {
    console.log('checkReferral Saga error ',e)
    yield put({
      type: NEOMED.CHECK_REFERRAL_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

export default function*watcherNoti() {
  yield takeLatest(NEOMED.CHECK_REFERRAL_REQUEST, checkReferral)
  yield takeLatest(NEOMED.APPLY_REFERRAL_REQUEST,applyReferral)
}