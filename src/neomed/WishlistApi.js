import apiClient, { setToken } from './api/apiClient'

class WishlistAPI {
    updateToken(accessToken) {
        setToken(accessToken)
    }

    getAll = async (page, size) => {
        console.log('getAll')
        const params = { page, size }
        const response = await apiClient.get('/wishlist/', { params })
        console.log('API called successfully. Returned data:', response)
        return response
    }

    deleteProductWishlist = async (customerId, productId) => {
        const response = await apiClient.delete(`/wishlist/${customerId}/${productId}`)
        console.log('API called successfully. Returned data:', response)
        return response
    }

    addProductWishlist = async (customerId, productId) => {
        const body = { customer_id: customerId, product_id: productId }
        const response = await apiClient.post('/wishlist/', body)
        console.log('API called successfully. Returned data:', response)
        return response
    }
}

export const Wishlist = new WishlistAPI()
