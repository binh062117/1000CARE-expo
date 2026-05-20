import {takeLatest, call, put} from 'redux-saga/effects';
import {NEOMED} from '../actionsTypes';
import * as APINeoMed from '../../neomed';
import {asyncStorage} from '../index';

function* getVersions({payload}) {
  try {
    const data = yield call(
      {content: APINeoMed, fn: APINeoMed.Version.getVersion},
      payload.os,
      payload.version,
    );
    console.log('response Versionnnnnn:', data);
    yield put({
      type: NEOMED.GET_VERSION_SUCCESS,
      payload: {
        forceUpdate: data.force,
        versionNew: data.version,
        update: data.update,
      },
    });
  } catch (error) {
    yield put({
      type: NEOMED.GET_VERSION_FAILURE,
      payload: {errorMsg: error},
    });
  }
}

export default function* watcherSaga() {
  yield takeLatest(NEOMED.GET_VERSION_REQUEST, getVersions);
}
