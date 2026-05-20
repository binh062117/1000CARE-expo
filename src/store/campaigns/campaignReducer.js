import Status from '../../common/Status/Status'
import { NEOMED } from '../actionsTypes'

const initialState = {
  status: Status.DEFAULT,
  campaignDetail: null,
  listCampaigns: [],
  campaignsByProduct: [],
  campaignsOfDistributorByProduct: [],
  errorMsg: '',
}
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case NEOMED.GET_COMPAIGN_DETAIL_REQUEST:
    case NEOMED.GET_COMPAIGN_BY_DISTRIBUTOR_REQUEST:
    case NEOMED.GET_COMPAIGN_BY_DISTRIBUTOR_BY_PRODUCT_REQUEST:
    case NEOMED.GET_COMPAIGN_OF_DISTRIBUTOR_BY_PRODUCT_REQUEST:
    case NEOMED.GET_COMPAIGN_TOPUP_BY_DISTRIBUTOR_REQUEST:
      return {
        ...state,
        status: Status.LOADING,
      }
    case NEOMED.GET_COMPAIGN_DETAIL_SUCCESS:
    case NEOMED.GET_COMPAIGN_BY_DISTRIBUTOR_SUCCESS:
    case NEOMED.GET_COMPAIGN_TOPUP_BY_DISTRIBUTOR_SUCCESS:
      return {
        ...state,
        campaignDetail: payload.campaignDetail,
        status: Status.SUCCESS,
      }
    case NEOMED.GET_COMPAIGN_DETAIL_FAILURE:
    case NEOMED.GET_COMPAIGN_BY_DISTRIBUTOR_FAILURE:
    case NEOMED.GET_COMPAIGN_BY_DISTRIBUTOR_BY_PRODUCT_FAILURE:
    case NEOMED.GET_COMPAIGN_OF_DISTRIBUTOR_BY_PRODUCT_FAILURE:
    case NEOMED.GET_COMPAIGN_TOPUP_BY_DISTRIBUTOR_FAILURE:
      return {
        ...state,
        errorMsg: payload.errorMsg,
        status: Status.ERROR,
        campaignDetail: null,
      }
    case NEOMED.GET_COMPAIGN_BY_DISTRIBUTOR_BY_PRODUCT_SUCCESS:
      return {
        ...state,
        campaignsByProduct: payload.campaignsByProduct,
        status: Status.SUCCESS,
      }
    case NEOMED.GET_COMPAIGN_OF_DISTRIBUTOR_BY_PRODUCT_SUCCESS:
      return {
        ...state,
        campaignsOfDistributorByProduct: payload.campaignsByProduct,
        status: Status.SUCCESS,
      }
    default:
      return state
  }
}