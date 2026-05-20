import Status from '../../common/Status/Status'
import { NEOMED } from '../../store/actionsTypes'

const initialState = {
  searchReqStatus: Status.DEFAULT,
  searchResult: [],
  searchHistory: [],
  autocompleteData: [],
  autocomplete: false,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case NEOMED.SEARCH_LOADING:
    return {
      ...state,
      searchReqStatus: Status.LOADING,
    }
  case NEOMED.SEARCH_SUCCESS:
    return {
      ...state,
      searchReqStatus: Status.SUCCESS,
      searchResult: payload.result,
      autocompleteData: payload.autocompleteData ? payload.autocompleteData : [],
      autocomplete: payload.autocomplete,
    }
  case NEOMED.SEARCH_FAILURE:
    return {
      ...state,
      searchReqStatus: Status.ERROR,
      searchResult: [],
      autocompleteData: [],
      autocomplete: false,
    }
  case "RESET_SEARCH":
    return {
      ...state,
      searchReqStatus: Status.DEFAULT,
      searchResult: [],
      searchHistory: [],
      autocompleteData: [],
      autocomplete: false,
    }
  default:
    return state
  }
}