import { takeLatest, call, put } from 'redux-saga/effects'
import { NEOMED } from '../actionsTypes'
import * as APINeoMed from '~/neomed'

function*getBanners({payload,distributorId}) {
    try {
        const data = yield call(
            { content: APINeoMed, fn: APINeoMed.Banners.getBanner },
            payload.size, payload.page, distributorId
        );
        console.log('data getBanners:',data)
        yield put({
            type: NEOMED.GET_BANNERS_SUCCESS,
            payload: {
                listBanner: data.banners || [],
                loadMore: payload.loadMore
            },
        })
    }catch(e) {
        yield put({
            type: NEOMED.GET_BANNERS_FAILURE,
            payload: {
                error: e,
            },
        })
    }
}

function*getAllBanners({payload}) {
    try {
        const data = yield call(
            { content: APINeoMed, fn: APINeoMed.Banners.getAllBanners },
            payload.size, payload.page
        );
        console.log('data getAllBanners:',data);
        yield put({
            type: NEOMED.GET_ALL_BANNERS_SUCCESS,
            payload: {
                listAllBanner: data.banners || [],
                loadMore: payload.loadMore
            }
        });
    }catch(e) {
        console.log('error getAllBanners:',e)
        yield put({
            type: NEOMED.GET_ALL_BANNERS_FAILURE,
            payload: {
                error: e
            }
        });
    }
}

export default function*watcherSaga() {
    yield takeLatest(NEOMED.GET_BANNERS_REQUEST,getBanners);
    yield takeLatest(NEOMED.GET_ALL_BANNERS_REQUEST,getAllBanners);
}