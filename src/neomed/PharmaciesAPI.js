import apiClient, { setToken } from './api/apiClient'

class PharmaciesAPI {
    updateToken(accessToken) {
        setToken(accessToken)
    }

    getPharmacyInfo = async (id) => {
        const response = await apiClient.get(`/pharmacies/${id}`)
        console.log('GET PHARMACY INFO --------- response:::', response)
        return response
    }

    updatePharmacys = async (pharId, body) => {
        const response = await apiClient.put(`/pharmacies/${pharId}`, body)
        console.log('API called successfully. Returned data:', response)
        return response
    }

    getAddFavouriteSupplier = async (idPharma, idSupplier) => {
        const response = await apiClient.put(`/pharmacies/${idPharma}/favourite/${idSupplier}`)
        console.log('API called successfully. Returned data:', response)
        return response
    }

    addAuthorizedSupplier = async (body) => {
        const response = await apiClient.post('/pharmacies/accredit', body)
        console.log('API called successfully. Returned data:', response)
        return response
    }

    getCheckOnlinePharma = async () => {
        const response = await apiClient.get('/pharmacies/online')
        console.log('API called successfully. Returned data:', response)
        return response
    }
}

export const Pharmacy = new PharmaciesAPI()
