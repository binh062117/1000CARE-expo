import Status from '../../common/Status/Status'
import { NEOMED } from '../actionsTypes'

const initialState = {
  status: Status.DEFAULT,
  listAdsBanner: [],
  listAdsBannerNeomed: [],
  errorMsg: '',
}
export default (state=initialState,{ type,payload }) => {
  switch(type) {
  case NEOMED.GET_ADS_BANNER_BY_DISTRIBUTOR_REQUEST:
    return{
      ...state,
      status: Status.LOADING,
      listAdsBanner: [],
    }
  case NEOMED.GET_ADS_BANNER_BY_DISTRIBUTOR_SUCCESS:
    return{
      ...state,
      listAdsBanner: payload.listAdsBanner,
      status: Status.SUCCESS,
    }
  case NEOMED.GET_ADS_BANNER_BY_DISTRIBUTOR_FAILURE:
    return{
      ...state,
      errorMsg: payload.errorMsg,
      status: Status.ERROR,
      listAdsBanner: [],
    }
  case NEOMED.GET_ADS_BANNER_HOME_NEOMED_BY_DISTRIBUTOR_REQUEST:
    return{
      ...state,
      status: Status.LOADING,
      listAdsBannerNeomed: [],
    }
  case NEOMED.GET_ADS_BANNER_HOME_NEOMED_BY_DISTRIBUTOR_SUCCESS:
    return{
      ...state,
      listAdsBannerNeomed: payload.listAdsBanner,
      status: Status.SUCCESS,
    }
  case NEOMED.GET_ADS_BANNER_HOME_NEOMED_BY_DISTRIBUTOR_FAILURE:
    return{
      ...state,
      errorMsg: payload.errorMsg,
      status: Status.ERROR,
      listAdsBannerNeomed: [],
    }
  default:
    return state
  }
}