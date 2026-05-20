import { NEOMED } from '../actionsTypes'

export const getSuppliers = () => ({
  type: NEOMED.GET_SUPPLIERS_REQUEST,
})

export const requestGetSupplierById = (supplierId) => ({
  type: NEOMED.GET_SUPPLIER_DETAILS_REQUEST,
  payload: {
    supplierId,
  },
})

export const getSupplierByDistributor = (distributorId, page, size, loadMore) => ({
  type: NEOMED.GET_SUPPLIER_BY_DISTRIBUTOR_REQUEST,
  payload: {
    distributorId,
    page,
    size,
    loadMore,
  },
})
