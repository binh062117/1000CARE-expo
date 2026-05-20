import { takeLatest, call, put } from 'redux-saga/effects'
import { NEOMED } from '../../store/actionsTypes'
import * as APINeoMed from '../../neomed'

function* getCateBySup({ payload }) {
  try {
    yield put({ type: NEOMED.GET_CATE_BY_SUP_LOADING })
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Categories.getCateBySup },
      payload.supplierId, payload.page, payload.size)
    console.log('response Categories', data)
    yield put({
      type: NEOMED.GET_CATE_BY_SUP_SUCCESS,
      payload: {
        data,
        loadMore: payload.loadMore,
      },
    })
  } catch (error) {
    yield put({
      type: NEOMED.GET_CATE_BY_SUP_FAILURE,
      payload: { errorMsg: error },
    })
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest(NEOMED.GET_CATE_BY_SUP_REQUEST, getCateBySup)
}
