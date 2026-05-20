import { takeLatest, call, put } from 'redux-saga/effects'
import { NEOMED } from '../actionsTypes'
import * as APINeoMed from '~/neomed'

function* getCampaignDetail({ payload }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Campaign.getCampaignById },
      payload.campaignId,
    )
    console.log('data getCompaignById:', data)
    yield put({
      type: NEOMED.GET_COMPAIGN_DETAIL_SUCCESS,
      payload: {
        campaignDetail: data,
      },
    })
  } catch (e) {
    yield put({
      type: NEOMED.GET_COMPAIGN_DETAIL_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* getCampaignByDistributor({ payload }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Campaign.getCampaignByDistributor },
      payload.distributorId,
    )
    console.log('data getCampaignByDistributor:', data)
    yield put({
      type: NEOMED.GET_COMPAIGN_BY_DISTRIBUTOR_SUCCESS,
      payload: {
        campaignDetail: data,
      },
    })
  } catch (e) {
    yield put({
      type: NEOMED.GET_COMPAIGN_BY_DISTRIBUTOR_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* getCampaignByDistributorByProduct({ payload }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Campaign.getCampaignByDistributorByProduct },
      payload.distributorId, payload.productId, payload.type,
    )
    console.log('data getCampaignByDistributorByProductTTTTTTTTTTTTTTTTTTTTTTT:', data)
    yield put({
      type: payload.type === 0 ? NEOMED.GET_COMPAIGN_BY_DISTRIBUTOR_BY_PRODUCT_SUCCESS : NEOMED.GET_COMPAIGN_OF_DISTRIBUTOR_BY_PRODUCT_SUCCESS,
      payload: {
        campaignsByProduct: data.campaigns,
        type: payload.type,
      },
    })
  } catch (e) {
    yield put({
      type: payload.type === 0 ? NEOMED.GET_COMPAIGN_BY_DISTRIBUTOR_BY_PRODUCT_FAILURE : NEOMED.GET_COMPAIGN_OF_DISTRIBUTOR_BY_PRODUCT_FAILURE,
      payload: {
        errorMsg: e,
        type: payload.type,
      },
    })
  }
}

function* getCampaignTopupByDistributor({ payload }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Campaign.getCampaignTopupByDistributor },
      payload.distributorId,
    )
    console.log('data getCampaignTopupByDistributor:', data)
    if (data && data?.id) {
      yield put({
        type: NEOMED.GET_COMPAIGN_TOPUP_BY_DISTRIBUTOR_SUCCESS,
        payload: {
          campaignDetail: data,
        },
      })
    } else {
      yield put({
        type: NEOMED.GET_COMPAIGN_TOPUP_BY_DISTRIBUTOR_FAILURE,
        payload: {
          // errorMsg: e,
        },
      })
    }
  } catch (e) {
    yield put({
      type: NEOMED.GET_COMPAIGN_TOPUP_BY_DISTRIBUTOR_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

export default function* watcherSaga() {
  yield takeLatest(NEOMED.GET_COMPAIGN_DETAIL_REQUEST, getCampaignDetail)
  yield takeLatest(NEOMED.GET_COMPAIGN_BY_DISTRIBUTOR_REQUEST, getCampaignByDistributor)
  yield takeLatest(NEOMED.GET_COMPAIGN_BY_DISTRIBUTOR_BY_PRODUCT_REQUEST, getCampaignByDistributorByProduct)
  yield takeLatest(NEOMED.GET_COMPAIGN_OF_DISTRIBUTOR_BY_PRODUCT_REQUEST, getCampaignByDistributorByProduct)
  yield takeLatest(NEOMED.GET_COMPAIGN_TOPUP_BY_DISTRIBUTOR_REQUEST, getCampaignTopupByDistributor)
}