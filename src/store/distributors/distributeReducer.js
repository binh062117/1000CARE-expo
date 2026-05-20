import Status from '../../common/Status/Status'
import { NEOMED } from '../../store/actionsTypes'

const initialState = {
  getAllDistributorStatus: Status.DEFAULT,
  page: 1,
  total: 0,
  listDistributors:[],
  listDistributorAll: [],
  listDistributorsHotDeal:[],
  errorMsg: '',
  getDistributorActiveStatus: Status.DEFAULT,
  selectedDistri: { id: -1,logo: null,name: 'Neomed', currentScreen: 'home' },
  listDistributorSearch: []
}

export default (state = initialState, { type, payload }) => {
  switch(type) {
  case NEOMED.GET_ALL_DISTRIBUTORS_LOADING:
    return {
      ...state,
      getAllDistributorStatus: Status.LOADING,
    }
  case NEOMED.GET_ALL_DISTRIBUTORS_SUCCESS:
    let distributors = payload.listDist ? payload.listDist : []
    if (payload.loadMore) {
      distributors = [...state.listDistributors, ...distributors]
    }
    return {
      ...state,
      getAllDistributorStatus: Status.SUCCESS,
      listDistributorAll: distributors,
    }
  case NEOMED.GET_ALL_DISTRIBUTORS_FAILURE:
    return {
      ...state,
      getAllDistributorStatus: Status.ERROR,
      errorMsg: payload.errorMsg,
    }
  case NEOMED.GET_DISTRIBUTORS_ACTIVE_LOADING:
    return {
      ...state,
      getDistributorActiveStatus: Status.LOADING,
    }
  case NEOMED.GET_DISTRIBUTORS_ACTIVE_SUCCESS:
    let distributorsActive = payload.listDist ? payload.listDist : []
    if (payload.loadMore) {
      distributorsActive = [...state.listDistributors, ...distributorsActive]
    }
    return {
      ...state,
      getDistributorActiveStatus: Status.SUCCESS,
      listDistributors: distributorsActive,
    }
  case NEOMED.GET_DISTRIBUTORS_ACTIVE_FAILURE:
    return {
      ...state,
      getDistributorActiveStatus: Status.ERROR,
      errorMsg: payload.errorMsg,
    }
  case NEOMED.GET_DISTRIBUTORS_ACTIVE_HOTDEALS_LOADING:
    return {
      ...state,
      getDistributorActiveStatus: Status.LOADING,
    }
  case NEOMED.GET_DISTRIBUTORS_ACTIVE_HOTDEALS_SUCCESS:
    let listDistributorsHotDeal = payload.listDist ? payload.listDist : []
    if (payload.loadMore) {
      listDistributorsHotDeal = [...state.listDistributorsHotDeal, ...listDistributorsHotDeal]
    }
    return {
      ...state,
      getDistributorActiveStatus: Status.SUCCESS,
      listDistributorsHotDeal: listDistributorsHotDeal,
    }
  case NEOMED.GET_DISTRIBUTORS_ACTIVE_HOTDEALS_FAILURE:
    return {
      ...state,
      getDistributorActiveStatus: Status.ERROR,
      errorMsg: payload.errorMsg,
    }
  case 'SET_DISTRIBUTOR_SELECTED':
    return {
      ...state,
      selectedDistri: payload.selectedDistri,
    }
  case NEOMED.GET_SEARCH_DISTRIBUTOR_SUCCESS:
    return {
      ...state,
      listDistributorSearch: payload.listDist
    }
  case 'RESET_SEARCH_DISTRIBUTOR':
    return {
      ...state,
      listDistributorSearch: []
    }
  default:
    return state
  }
} 