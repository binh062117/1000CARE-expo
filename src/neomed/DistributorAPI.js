import apiClient, { setToken } from './api/apiClient'

class DistributorAPI {
    updateToken(accessToken) {
        setToken(accessToken)
    }

    getAllDistributors = async (page, size, status) => {
        const params = { page, size, status }
        const response = await apiClient.get('/distributors/', { params })
        // console.log('API called distribute successfully. Returned data:', response)
        return response
    }

    getDistributorActive = async (sortBy, page, size) => {
        const params = { sortBy, page, size }
        const response = await apiClient.get('/distributors/active', { params })
        // console.log('DISTRIBUTOR API RESPONSE:::', response)
        // console.log('API called distribute successfully. Returned data:', response)
        return response
    }

    getSearchDistributor = async (name, size, page, status) => {
        const params = { name, size, page, status }
        const response = await apiClient.get('/distributors/_search', { params })
        // console.log('API called distribute successfully. Returned data:', response)
        return response
    }
}

export const Distributor = new DistributorAPI()
