import { NEOMED } from '../actionsTypes'

export const requestGetListVoucherByCustomer = (distributorId, status, page, size, loadMore) => ({
  type: NEOMED.GET_LIST_VOUCHER_BY_CUSTOMER_REQUEST,
  payload: {
    size,
    page,
    status,
    loadMore,
    distributorId,
  },
})

export const requestGetListVoucherValidByCustomer = (distributorId, orderAmount, page, size, loadMore, payment_method) => ({
  type: NEOMED.GET_LIST_VOUCHER_VALID_BY_CUSTOMER_REQUEST,
  payload: {
    size,
    page,
    distributorId, 
    orderAmount,
    loadMore,
    payment_method,
  },
})

export const dataSelectVoucher = (selectDistributorId, selectOrgDistributorId, selectPaymentType, index) => ({
  type: 'SAVE_DATA_SELECT_VOUCHER',
  payload: {
    selectDistributorId,
    selectOrgDistributorId,
    selectPaymentType,
    index,
  },
})
export const resetDataSelectVoucher = () => ({
  type: 'RESET_SAVE_DATA_SELECT_VOUCHER',
})

export const saveListVoucherExpired = (voucherExpired, isDelete=false) => ({
  type: 'SAVE_LIST_VOUCHER_EXPIRED',
  payload: {
    voucherExpired,
    isDelete,
  },
})

export const resetListVoucher = () => ({
  type: 'RESET_LIST_VOUCHER',
})