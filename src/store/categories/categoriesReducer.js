import Status from '../../common/Status/Status'
import { NEOMED } from '../../store/actionsTypes'
const initialState = {
  statusCategory: Status.DEFAULT,
  page: 1,
  total: 0,
  listCategories:[],
  errorMsg: '',
}

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case NEOMED.GET_CATE_BY_SUP_LOADING:
      return {
        ...state,
        statusCategory:Status.LOADING,
      }
    case NEOMED.GET_CATE_BY_SUP_SUCCESS:
      console.log('GET_CATE_BY_SUP_SUCCESS', payload)
      let categories = payload.data.categories ? payload.data.categories : []
      if (payload.loadMore) {
        categories = [...state.listCategories, ...categories]
      }
      return {
        ...state,
        statusCategory: Status.SUCCESS,
        listCategories: categories,
        total: payload.data.pagination.total,
        page: payload.data.pagination.page,
      }
    case NEOMED.GET_CATE_BY_SUP_FAILURE:
      return {
        ...state,
        statusCategory: Status.ERROR,
        errorMsg: payload.errorMsg,
      }
    case 'RESET_CATE_BY_SUP':
      return {
        ...state,
        listCategories:[],
      }
    default:
      return state
  }
} 