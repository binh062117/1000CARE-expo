import { takeLatest, call, put } from 'redux-saga/effects'
import { NEOMED } from '../actionsTypes'
import * as APINeoMed from '../../neomed'

function* getAllDistributors({ payload }) {
  console.log('distribute saga', payload)
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Distributor.getAllDistributors },
      payload.page, payload.size, payload.status
    )
    // console.log('response', data)
    yield put({
      type: NEOMED.GET_ALL_DISTRIBUTORS_SUCCESS,
      payload: {
        listDist: data.distributors,
        loadMore: payload.loadMore,
      },
    })
  } catch (error) {
    console.log('Check data error: ', error)
    yield put({
      type: NEOMED.GET_ALL_DISTRIBUTORS_FAILURE,
      payload: { errorMsg: error },
    })
  }
}

function* getDistributorsActive({ payload }) {
  console.log('distribute saga', payload)
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Distributor.getDistributorActive },
      payload.sortBy, payload.page, payload.size,
    )
    // console.log('response', data)
    yield put({
      type: payload.sortBy <= 0 ? NEOMED.GET_DISTRIBUTORS_ACTIVE_SUCCESS : NEOMED.GET_DISTRIBUTORS_ACTIVE_HOTDEALS_SUCCESS,
      payload: {
        listDist: data.distributors,
        loadMore: payload.loadMore,
      },
    })
  } catch (error) {
    console.log('Check data error: ', error)
    yield put({
      type: payload.sortBy <= 0 ? NEOMED.GET_DISTRIBUTORS_ACTIVE_FAILURE : NEOMED.GET_DISTRIBUTORS_ACTIVE_HOTDEALS_FAILURE,
      payload: { errorMsg: error },
    })
  }
}

function* getSearchDistributors({ payload }) {
  console.log('Search distribute saga', payload)
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Distributor.getSearchDistributor },
      payload.name, payload.size, payload.page, payload.status
    )
    // console.log('response', data)
    yield put({
      type: NEOMED.GET_SEARCH_DISTRIBUTOR_SUCCESS,
      payload: {
        listDist: data.distributors,
      },
    })
  } catch (error) {
    console.log('Check data error: ', error)
    yield put({
      type: NEOMED.GET_SEARCH_DISTRIBUTOR_FAILURE,
      payload: { errorMsg: error },
    })
  }
}


// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest(NEOMED.GET_ALL_DISTRIBUTORS_REQUEST, getAllDistributors)
  yield takeLatest(NEOMED.GET_DISTRIBUTORS_ACTIVE_REQUEST, getDistributorsActive)
  yield takeLatest(NEOMED.GET_SEARCH_DISTRIBUTOR_REQUEST, getSearchDistributors)
}
