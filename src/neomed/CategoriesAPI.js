import apiClient, { setToken } from './api/apiClient'

class CategoriesAPI {
    updateToken(accessToken) {
        setToken(accessToken)
    }

    getCategoriesFull = async (page, size) => {
        const params = { size, page }
        const response = await apiClient.get('/categories/', { params })
        console.log('API called successfully. Returned data:', response)
        return response
    }

    getCateBySup = async (supplierId, page, size) => {
        const params = { size, page }
        const response = await apiClient.get(`/categories/suppliers/${supplierId}/products`, { params })
        console.log('API called successfully. Returned data:', response)
        return response
    }
}

export const Categories = new CategoriesAPI()
