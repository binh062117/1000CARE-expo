import Status from '../../common/Status/Status'
import { NEOMED } from '../../store/actionsTypes'

const initialState = {
  listVoucher: [],
  listVoucherValid: [],
  status: Status.DEFAULT,
  dataSelectVoucher: {},
  listVoucherExpired: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case NEOMED.GET_LIST_VOUCHER_BY_CUSTOMER_LOADING:
      return {
        ...state,
        status: Status.LOADING,
      }
    case NEOMED.GET_LIST_VOUCHER_BY_CUSTOMER_SUCCESS:
      let listVoucher = payload.listVoucher ? payload.listVoucher : []
      if (payload.loadMore) {
        listVoucher = [...state.listVoucher, ...listVoucher]
      }
      return {
        ...state,
        status: Status.SUCCESS,
        listVoucher,
      }
    case NEOMED.GET_LIST_VOUCHER_BY_CUSTOMER_FAILURE:
      return {
        ...state,
        status: Status.ERROR,
        listVoucher: [],
      }
    case NEOMED.GET_LIST_VOUCHER_VALID_BY_CUSTOMER_LOADING:
      return {
        ...state,
        status: Status.LOADING,
      }
    case NEOMED.GET_LIST_VOUCHER_VALID_BY_CUSTOMER_SUCCESS:
      let listVoucherValid = payload.listVoucher ? payload.listVoucher : []
      if (payload.loadMore) {
        listVoucherValid = [...state.listVoucherValid, ...listVoucherValid]
      }
      return {
        ...state,
        status: Status.SUCCESS,
        listVoucherValid,
      }
    case NEOMED.GET_LIST_VOUCHER_VALID_BY_CUSTOMER_FAILURE:
      return {
        ...state,
        status: Status.ERROR,
        listVoucherValid: [],
      }
    case 'SAVE_DATA_SELECT_VOUCHER':
    // console.log('stateeeeeeeeeeee:',state)
    // var data = state.dataSelectVoucher;
    // if(Object.keys(data).length === 0){
    //   data[payload.index]={}
    //   data[payload.index][payload.selectDistributorId]=payload
    // }else {
    //   console.log('payloadddddddddddddd:',data)
    //   for(const value in data) {
    //     console.log('FORRRRRRRRRRRRRRRRRRR:',value,payload.index)
    //     if(value == payload.index) {
    //       // data[value] = {[payload.selectDistributorId]: payload, [data[value].selectDistributorId]:state.dataSelectVoucher[value]}
    //       console.log('DÁLJDLKSJDKKKKKKKKKK')

      //       // data[value]=state.dataSelectVoucher[value];
      //       data[value][payload.selectDistributorId] = payload;
      //     }else {
      //       data[payload.index] = {[payload.selectDistributorId]: payload}
      //     }
      //   }
      // }

      // data={...data,...{[index]: {[selectDistributorId] : payload}}}
      // console.log('CHECKKKKKKKKKKKKKKKK:',state.dataSelectVoucher, data)
      // Object.assign(data,state.dataSelectVoucher);

      // console.log('stateeeeeeeeeee:',state)
      // console.log('CHECKKKKKKKKKKKKKKKK:',payload)
      const newDataSelectVoucher = state.dataSelectVoucher
      if(!newDataSelectVoucher[payload.index]) {
        newDataSelectVoucher[payload.index] = [payload]
      } else {
        let isUnique = true
        for (const elem of newDataSelectVoucher[payload.index]) {
          if (elem.selectDistributorId == payload.selectDistributorId) {isUnique = false; break}
        }
        if (isUnique) newDataSelectVoucher[payload.index].push(payload)
      }
      return {
        ...state,
        dataSelectVoucher: newDataSelectVoucher,
      }
    case 'RESET_SAVE_DATA_SELECT_VOUCHER':
      return {
        ...state,
        dataSelectVoucher: {},
      }
    case 'SAVE_LIST_VOUCHER_EXPIRED':
      var newVoucherExpired = state.listVoucherExpired
      console.log('aaaaaaaaaaaaa:',newVoucherExpired,payload)
      if(payload.isDelete){
        newVoucherExpired = newVoucherExpired.filter(id => JSON.stringify(id) != JSON.stringify(payload.voucherExpired))
      }else{
        newVoucherExpired.push(payload.voucherExpired)
      }
      return {
        ...state,
        listVoucherExpired: newVoucherExpired,
      }
    case 'RESET_LIST_VOUCHER_EXPIRED':
      return {
        ...state,
        listVoucherExpired: [],
      }
    case 'RESET_LIST_VOUCHER':
      return {
        ...state,
        listVoucher: [],
      }
    default:
      return state
  }
}