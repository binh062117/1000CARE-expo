import Status from '../../common/Status/Status'
import { NEOMED } from '../../store/actionsTypes'
const initialState = {
  statusSuppliers: Status.DEFAULT,
  page: 1,
  total: 0,
  listSupplier: [],
  supplierDetails: {},
  errorMsg: '',
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case NEOMED.GET_SUPPLIER_BY_DISTRIBUTOR_LOADING:
    return {
      ...state,
      statusSuppliers:Status.LOADING,
    }
  case NEOMED.GET_SUPPLIER_BY_DISTRIBUTOR_SUCCESS:
    console.log('GET_SUPPLIER_BY_DISTRIBUTOR_SUCCESS', payload)
    let suppliers = payload.data.suppliers ? payload.data.suppliers : []
    if (payload.loadMore) {
      suppliers = [...state.listSupplier, ...suppliers]
    }
    return {
      ...state,
      statusSuppliers: Status.SUCCESS,
      listSupplier: suppliers,
    }
  case NEOMED.GET_SUPPLIER_BY_DISTRIBUTOR_FAILURE:
    return {
      ...state,
      statusSuppliers: Status.ERROR,
    }
  case NEOMED.GET_SUPPLIER_DETAILS_REQUEST:
    console.log('GET_SUPPLIER_DETAILS_REQUEST', payload)
    return {
      ...state,
      statusSupplier:Status.LOADING,
    }
  case NEOMED.GET_SUPPLIER_DETAILS_SUCCESS:
    console.log(type, payload)
    return {
      ...state,
      statusSupplier: Status.SUCCESS,
      supplierDetails: payload.data,
    }
  case NEOMED.GET_SUPPLIER_DETAILS_FAILURE:
    return {
      ...state,
      statusSupplier: Status.ERROR,
      errorMsg: payload.errorMsg,
    }
  default:
    return state
  }
}
