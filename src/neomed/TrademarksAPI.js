import apiClient, { setToken } from './api/apiClient'

class TrademarksAPI {
    updateToken(accessToken) {
        setToken(accessToken)
    }

    getAdvertisement = async (distributorId, type, page, size) => {
        const params = { distributorId, type, page, size }
        const response = await apiClient.get('/trademarks/advertisement', { params })
        console.log('API called successfully. Returned data:', response)
        return response
    }

    getListTrademarksByDistributorId = async (distributorId, page, size) => {
        const params = { page, size }
        console.log('search opts', params)
        const response = await apiClient.get(`/trademarks/distributors/${distributorId}`, { params })
        console.log('API called successfully. Returned data:', response)
        return response
    }
}

export const Trademarks = new TrademarksAPI()
