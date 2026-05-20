import { takeLatest, call, put } from 'redux-saga/effects'
import { NEOMED } from '../actionsTypes'
import * as APINeoMed from '~/neomed'

function* getTrademarksAdvertisement ({ payload }) {
  console.log('getTrademarks')
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Trademarks.getAdvertisement },
      payload.distributorId, payload.type, payload.page, payload.size,
    )
    yield put({
      type: NEOMED.GET_TRADEMARKS_ADVERTISEMENT_SUCCESS,
      payload: {
        listrademarks: data.trademarks ? data.trademarks : [],
        loadMore: payload.loadMore,
      },
    })
  } catch(e) {
    yield put({
      type: NEOMED.GET_TRADEMARKS_ADVERTISEMENT_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* getTrademarksByDistributor({ payload }) {
  console.log('getTrademarksByDistributor')
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Trademarks.getListTrademarksByDistributorId },
      payload.distributorId, payload.page, payload.size,
    )
    yield put({
      type: NEOMED.GET_TRADEMARKS_BY_DISTRIBUTOR_SUCCESS,
      payload: {
        listrademarks: data.trademarks ? data.trademarks : [],
        loadMore: payload.loadMore,
      },
    })
  } catch(e) {
    yield put({
      type: NEOMED.GET_TRADEMARKS_BY_DISTRIBUTOR_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

export default function*watcherAddress() {
  yield takeLatest([NEOMED.GET_TRADEMARKS_ADVERTISEMENT_REQUEST], getTrademarksAdvertisement)
  yield takeLatest([NEOMED.GET_TRADEMARKS_BY_DISTRIBUTOR_REQUEST], getTrademarksByDistributor)
}
