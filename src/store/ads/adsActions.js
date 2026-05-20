import { NEOMED } from '../actionsTypes'

export const requestGetListAdsBannerByDistributor = (distributorId, position, status, isAdvertise, size, page) => ({
  type: NEOMED.GET_ADS_BANNER_BY_DISTRIBUTOR_REQUEST,
  payload: {
    distributorId, position, status, isAdvertise: -1, size, page,
  },
})

export const requestGetListAdsBannerHomeNeomedByDistributor = (position, status, isAdvertise, size, page) => ({
  type: NEOMED.GET_ADS_BANNER_HOME_NEOMED_BY_DISTRIBUTOR_REQUEST,
  payload: {
    distributorId: 0,
    isAdvertise: 1,
    position, status, size, page,
  },
})