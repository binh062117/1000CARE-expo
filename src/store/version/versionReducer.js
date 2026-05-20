import Status from '../../common/Status/Status'
import { NEOMED } from '../../store/actionsTypes'

const initialState = {
  forceUpdate: false,
  update: false,
  versionNew: '',
  status: Status.DEFAULT,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case NEOMED.GET_VERSION_SUCCESS:
    return {
      ...state,
      forceUpdate: payload.forceUpdate,
      versionNew: payload.versionNew,
      update: payload.update,
      status: Status.LOADING,
    }
  default:
    return state
  }
}