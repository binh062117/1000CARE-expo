import { takeLatest, call, put } from 'redux-saga/effects'
import { NEOMED } from '../../store/actionsTypes'
import * as APINeoMed from '../../neomed'

function* pushImage({ payload }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Cdn.pushImages },
      payload.image)
    console.log('response Imagee', data)
    yield put({
      type: NEOMED.PUSH_IMAGE_SUCCESS,
      payload: {
        data
      },
    })
  } catch (error) {
    yield put({
      type: NEOMED.PUSH_IMAGE_FAILURE,
      payload: { errorMsg: error },
    })
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest(NEOMED.PUSH_IMAGE_REQUEST, pushImage)
}
