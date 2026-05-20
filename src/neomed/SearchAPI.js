import apiClient, { setToken } from './api/apiClient'

class SearchAPI {
    updateToken(accessToken) {
        setToken(accessToken)
    }

    searchProduct = async (query, autocomplete, distributorId) => {
        const params = {
            name: query,
            distributor_id: distributorId,
            autocomplete,
        }
        console.log('search opts', params)
        const response = await apiClient.get('/search/', { params })
        console.log('API called successfully. Returned data:', response)
        return response
    }
}

export const Search = new SearchAPI()
