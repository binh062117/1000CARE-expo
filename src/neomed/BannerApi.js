import apiClient, { setToken } from './api/apiClient'

class NeoMedApi {
  constructor() { }

  updateToken(accessToken) {
    setToken(accessToken)
  }

  getBanner = async (size, page, distributorId) => {
    const params = { size, page }
    const response = await apiClient.get(`/banners/distributors/${distributorId}`, { params })
    console.log('API called successfully. Returned data:', response)
    return response
  }

  getAllBanners = async (size, page) => {
    const params = { size, page }
    const response = await apiClient.get('/banners/', { params })
    console.log('API called successfully. Returned data getAllBanners:', response)
    return response
  }
}

export const Banners = new NeoMedApi()