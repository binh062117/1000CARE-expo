import { takeLatest, call, put } from 'redux-saga/effects'
import { NEOMED } from '../actionsTypes'
import * as APINeoMed from '~/neomed'

function*getListAdsBannerByDistributor({ payload }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Ads.getAdsByDistributor },
      payload.distributorId, payload.position, payload.status, payload.isAdvertise, payload.size, payload.page,
    )
    console.log('data getListAdsBannerByDistributor:',data)
    if (data?.ads_banners) {
      yield put({
        type: NEOMED.GET_ADS_BANNER_BY_DISTRIBUTOR_SUCCESS,
        payload: {
          listAdsBanner: data?.ads_banners,
        },
      })
    } else {
      yield put({
        type: NEOMED.GET_ADS_BANNER_BY_DISTRIBUTOR_FAILURE,
        payload: {},
      })
    }
  }catch(e) {
    yield put({
      type: NEOMED.GET_ADS_BANNER_BY_DISTRIBUTOR_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function*getListAdsBannerHomeNeomedByDistributor({ payload }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Ads.getAdsByDistributor },
      payload.distributorId, payload.position, payload.status, payload.isAdvertise, payload.size, payload.page,
    )
    console.log('data getListAdsBannerHomeNeomedByDistributor:',data)
    if (data?.ads_banners) {
      yield put({
        type: NEOMED.GET_ADS_BANNER_HOME_NEOMED_BY_DISTRIBUTOR_SUCCESS,
        payload: {
          listAdsBanner: data?.ads_banners,
        },
      })
    } else {
      yield put({
        type: NEOMED.GET_ADS_BANNER_HOME_NEOMED_BY_DISTRIBUTOR_FAILURE,
        payload: {},
      })
    }
  }catch(e) {
    yield put({
      type: NEOMED.GET_ADS_BANNER_HOME_NEOMED_BY_DISTRIBUTOR_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

export default function*watcherSaga() {
  yield takeLatest(NEOMED.GET_ADS_BANNER_BY_DISTRIBUTOR_REQUEST, getListAdsBannerByDistributor)
  yield takeLatest(NEOMED.GET_ADS_BANNER_HOME_NEOMED_BY_DISTRIBUTOR_REQUEST, getListAdsBannerHomeNeomedByDistributor)
}