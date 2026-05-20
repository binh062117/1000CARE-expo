import { NEOMED } from '../actionsTypes'

export const requestGetCampaignById = (campaignId) => ({
  type: NEOMED.GET_COMPAIGN_DETAIL_REQUEST,
  payload: {
    campaignId,
  },
})

export const requestGetCampaignByDistributorId = (distributorId) => ({
  type: NEOMED.GET_COMPAIGN_BY_DISTRIBUTOR_REQUEST,
  payload: {
    distributorId,
  },
})

export const requestGetCampaignByDistributorIdByProduct = (distributorId, productId) => ({
  type: NEOMED.GET_COMPAIGN_BY_DISTRIBUTOR_BY_PRODUCT_REQUEST,
  payload: {
    distributorId,
    productId,
    type: 0,
  },
})

export const requestGetCampaignOfDistributorIdByProduct = (distributorId, productId) => ({
  type: NEOMED.GET_COMPAIGN_OF_DISTRIBUTOR_BY_PRODUCT_REQUEST,
  payload: {
    distributorId,
    productId,
    type: 1,
  },
})

export const requestGetCampaignTopupByDistributorId = (distributorId) => ({
  type: NEOMED.GET_COMPAIGN_TOPUP_BY_DISTRIBUTOR_REQUEST,
  payload: {
    distributorId,
  },
})