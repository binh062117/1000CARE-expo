import { NEOMED } from '../actionsTypes'

export const requestGetTrademarksAdvertisement = (distributorId, type = 1, page = 1, size = 10, loadMore = false) => ({
  type: NEOMED.GET_TRADEMARKS_ADVERTISEMENT_REQUEST,
  payload: {
    distributorId: distributorId || 0,
    type,
    page, 
    size,
    loadMore,
  },
})

export const requestGetTrademarksByDistributor = (distributorId, page = 1, size = 10, loadMore = false) => ({
  type: NEOMED.GET_TRADEMARKS_BY_DISTRIBUTOR_REQUEST,
  payload: {
    distributorId: distributorId || 0,
    page, 
    size,
    loadMore,
  },
})