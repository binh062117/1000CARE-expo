import apiClient, { setToken } from './api/apiClient'

class AddressAPI {
    updateToken(accessToken) {
        setToken(accessToken)
    }

    getAll = async (customerId, opts = {}) => {
        console.log('getAll', customerId)
        const params = { ...opts }
        const response = await apiClient.get(`/address/address-books/customers/${customerId}`, { params })
        console.log('API called successfully. Returned data:', response)
        return response
    }

    getProvinces = async (country) => {
        const params = { country }
        const response = await apiClient.get('/address/provinces', { params })
        console.log('API called successfully. Returned data:', response)
        return response
    }

    getDistricts = async (province) => {
        const params = { province }
        const response = await apiClient.get('/address/districts', { params })
        console.log('API called successfully. Returned data:', response)
        return response
    }

    getWards = async (district) => {
        const params = { district }
        const response = await apiClient.get('/address/wards', { params })
        console.log('API called successfully. Returned data:', response)
        return response
    }

    addAddress = async (address) => {
        console.log('addAddress', address)
        const response = await apiClient.post('/address/address-books', address)
        console.log('API called successfully. Returned data:', response)
        return response
    }

    deleteAddress = async (id) => {
        const response = await apiClient.delete(`/address/address-books/${id}`)
        console.log('API called successfully. Returned data:', response)
        return response
    }

    updateAddress = async (id, body) => {
        const response = await apiClient.put(`/address/address-books/${id}`, body)
        console.log('API called successfully. Returned data:', response)
        return response
    }
}

export const Addresses = new AddressAPI()
