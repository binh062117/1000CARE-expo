import Status from '../../common/Status/Status'
import { NEOMED } from '../actionsTypes'

const initialState = {
  status: Status.DEFAULT,
  listTrademarksAdvertisement: [],
  listrademarks: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case NEOMED.GET_TRADEMARKS_ADVERTISEMENT_REQUEST:
    return {
      ...state,
      status: Status.LOADING,
    }
  case NEOMED.GET_TRADEMARKS_ADVERTISEMENT_SUCCESS:
    let listTrademarksAdvertisement = payload.listrademarks ? payload.listrademarks : []
    if (payload.loadMore) {
      listTrademarksAdvertisement = [...state.listTrademarksAdvertisement, ...listTrademarksAdvertisement]
    }
    return {
      ...state,
      status: Status.SUCCESS,
      listTrademarksAdvertisement,
    }
  case NEOMED.GET_TRADEMARKS_ADVERTISEMENT_FAILURE:
    return {
      ...state,
      status: Status.ERROR,
    }
  case NEOMED.GET_TRADEMARKS_BY_DISTRIBUTOR_REQUEST:
    return {
      ...state,
      status: Status.LOADING,
    }
  case NEOMED.GET_TRADEMARKS_BY_DISTRIBUTOR_SUCCESS:
    let listrademarks = payload.listrademarks ? payload.listrademarks : []
    if (payload.loadMore) {
      listrademarks = [...state.listrademarks, ...listrademarks]
    }
    return {
      ...state,
      status: Status.SUCCESS,
      listrademarks,
    }
  case NEOMED.GET_TRADEMARKS_BY_DISTRIBUTOR_FAILURE:
    return {
      ...state,
      status: Status.ERROR,
    }
  default:
    return state
  }
}