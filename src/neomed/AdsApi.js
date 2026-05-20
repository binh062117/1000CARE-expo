import apiClient, { setToken } from './api/apiClient'

class NeoMedApi {
  constructor() { }

  updateToken(accessToken) {
    setToken(accessToken)
  }

  getAdsByDistributor = async (distributorId, position, status, isAdvertise, size, page) => {
    console.log('getAdsByDistributor', distributorId)
    const params = { status, isAdvertise, size, page }
    const response = await apiClient.get(`/ads-banners/distributors/${distributorId}`, { params })
    console.log('API called successfully. Returned data:', response)
    return response
  }
}
export const Ads = new NeoMedApi()