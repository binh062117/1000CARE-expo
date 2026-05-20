import apiClient, { setToken } from './api/apiClient'

class SuppliersAPI {
    updateToken(accessToken) {
        setToken(accessToken)
    }

    getSuppliersAll = async () => {
        const response = await apiClient.get('/suppliers/')
        console.log('Check Data Suppliers:', response)
        return response
    }

    getSupplierById = async (supplierId) => {
        const response = await apiClient.get(`/suppliers/${supplierId}`)
        return response
    }

    getSupplierByDistributor = async (distributorId, page, size) => {
        const params = { size, page }
        const response = await apiClient.get(`/suppliers/distributors/${distributorId}`, { params })
        console.log('API called successfully. Returned data:', response)
        return response
    }
}

export const Suppliers = new SuppliersAPI()
