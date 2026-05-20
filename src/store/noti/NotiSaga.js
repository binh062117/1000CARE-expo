import { takeLatest, call, put } from 'redux-saga/effects'
import { NEOMED } from '../actionsTypes'
import * as APINeoMed from '~/neomed'

function* registerFcm({ payload }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Noti.getRegisterFcm },
      payload.tokenFcm
    )
    
    console.log('registerFcm Saga data: ',data)
    yield put({
      type: NEOMED.REGISTER_FCM_SUCCESS,
    })
  } catch(e) {
    console.log('registerFcm Saga error ',e)
    yield put({
      type: NEOMED.REGISTER_FCM_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* unRegisterFcm({ payload }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Noti.getUnRegisterFcm },
      payload.tokenFcm
    )
    
    console.log('unRegisterFcm Saga data: ',data)
    yield put({
      type: NEOMED.UN_REGISTER_FCM_SUCCESS,
    })
  } catch(e) {
    console.log('unRegisterFcm Saga error ',e)
    yield put({
      type: NEOMED.UN_REGISTER_FCM_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function*getListNoti({payload}) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Noti.getListNotification },
      payload.size, payload.page,payload.isRead
    )
    console.log('data List Notification:',data)
    yield put({
      type: NEOMED.GET_LIST_NOTI_SUCCESS,
      payload: {
        listNoti :data.data,
        loadMore: payload.loadMore,
        isRead: payload.isRead
      }
    })
  }catch(e){
    yield put({
      type: NEOMED.GET_LIST_NOTI_FAILURE,
      payload: {
        errorMsg: e,
      }
    })
  }
}

function*getCheckReadNoti({payload}) {
  try {
      const data = yield call(
        {content: APINeoMed, fn: APINeoMed.Noti.checkReadNoti},
        payload.id_Noti, payload.status
      )
      console.log('data Check getCheckReadNoti :',data)
      yield put({
        type: NEOMED.GET_CHECK_READ_NOTI_SUCCESS
      })
  }catch(e) {
    console.log('checkReadNoti Error:',e)
  }
}

export default function*watcherNoti() {
  yield takeLatest(NEOMED.REGISTER_FCM_REQUEST, registerFcm)
  yield takeLatest(NEOMED.UN_REGISTER_FCM_REQUEST,unRegisterFcm)
  yield takeLatest(NEOMED.GET_LIST_NOTI_REQUEST, getListNoti)
  yield takeLatest(NEOMED.GET_CHECK_READ_NOTI_REQUEST, getCheckReadNoti)
}