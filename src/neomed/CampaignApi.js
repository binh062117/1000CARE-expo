import apiClient, { setToken } from './api/apiClient'

class CampaignAPI {
    updateToken(accessToken) {
        setToken(accessToken)
    }

    getCampaignById = async (campaignId) => {
        const response = await apiClient.get(`/campaigns/${campaignId}`)
        console.log('API called successfully. Returned data:', response)
        return response
    }

    getCampaignByDistributor = async (distributorId) => {
        console.log('getCampaignByDistributor', distributorId)
        const params = { status: 1, size: 100 }
        const response = await apiClient.get(`/campaigns/distributors/${distributorId}`, { params })
        console.log('API called successfully. Returned data:', response)
        return response
    }

    getCampaignByDistributorByProduct = async (distributorId, productId, type = 0) => {
        console.log('getCampaignByDistributorByProduct', distributorId)
        const params = { type }
        const response = await apiClient.get(`/campaigns/distributors/${distributorId}/products/${productId}`, { params })
        console.log('API called successfully. Returned data:', response)
        return response
    }

    getCampaignTopupByDistributor = async (distributorId) => {
        console.log('getCampaignTopupByDistributor', distributorId)
        const response = await apiClient.get(`/campaigns/distributors/${distributorId}/topup`)
        console.log('API called successfully. Returned data:', response)
        return response
    }
}

export const Campaign = new CampaignAPI()
