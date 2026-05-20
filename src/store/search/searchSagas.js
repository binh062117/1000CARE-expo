import { takeLatest, call, put } from 'redux-saga/effects'
import { NEOMED } from '../actionsTypes'
import * as APINeoMed from '~/neomed'

function* searchProduct({ payload }) {
  try {
    yield put({
      type: NEOMED.SEARCH_LOADING,
    })
    let data 
    if (payload.autocomplete) {
      data = yield call(
        { content: APINeoMed, fn: APINeoMed.Products.autoCompleteProduct },
        payload.query, payload.distributorId
      )
    } else {
      data = yield call(
        { content: APINeoMed, fn: APINeoMed.Products.searchProduct },
        payload.query, payload.distributorId
      )
    }
    console.log('data search product:',data)
    yield put({
      type: NEOMED.SEARCH_SUCCESS,
      payload: {
        result: data.products || [],
        autocompleteData: data.autocomplete || [],
        autocomplete: payload.autocomplete,
      },
    })
  } catch (e) {
    yield put({
      type: NEOMED.SEARCH_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

export default function* watcherSaga() {
  yield takeLatest(NEOMED.SEARCH_REQUEST, searchProduct)
}