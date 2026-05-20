import apiClient, { setToken } from './api/apiClient'

class ProductsAPI {
    updateToken(accessToken) {
        setToken(accessToken)
    }

    getProducts = async (page, size) => {
        const params = { size, page }
        const response = await apiClient.get('/products/', { params })
        return response
    }

    getProductsByCategory = async (categoryId, page, size) => {
        const params = { size, page }
        const response = await apiClient.get(`/products/categories/${categoryId}`, { params })
        console.log('API called successfully. Returned data:', response)
        return response
    }

    getProductsByDistributor = async (distributorId, page, size) => {
        const params = { size, page }
        const response = await apiClient.get(`/products/distributor/${distributorId}`, { params })
        console.log('API called successfully. Returned data:', response)
        return response
    }

    getProductBySupplier = async (supplierId, page, size) => {
        const params = { size, page }
        const response = await apiClient.get(`/products/supplier/${supplierId}`, { params })
        console.log('API called successfully. Returned data:', response)
        return response
    }

    getProductsExclusiveByDistributor = async (distributorId, page, size) => {
        const params = { size, page }
        const response = await apiClient.get(`/products/distributor/${distributorId}/exclusive`, { params })
        console.log('API called successfully. Returned data:', response)
        return response
    }

    getProductsRecentlyViewed = async (page, size) => {
        const params = { size, page }
        const response = await apiClient.get('/products/recently-viewed', { params })
        console.log('API called successfully. Returned data:', response)
        return response
    }

    getProductByPaymentType = async (distributorId, paymentType, page, size) => {
        const params = { size, page }
        const response = await apiClient.get(`/products/distributor/${distributorId}/payment/${paymentType}`, { params })
        console.log('API called successfully. Returned data:', response)
        return response
    }

    getProductById = async (productId) => {
        const response = await apiClient.get(`/products/${productId}`)
        console.log('API called successfully. Returned data:', response)
        return response
    }

    searchProduct = async (query, distributorId) => {
        const params = { name: query, distributor_id: distributorId }
        const response = await apiClient.get('/products/search', { params })
        console.log('API called successfully. Returned data:', response)
        return response
    }

    autoCompleteProduct = async (query, distributorId) => {
        const params = { name: query, distributor_id: distributorId }
        const response = await apiClient.get('/products/autocomplete', { params })
        console.log('API called successfully. Returned data:', response)
        return response
    }

    getProductsByTrademarkId = async (trademarkId, page, size) => {
        const params = { size, page }
        const response = await apiClient.get(`/products/trademark/${trademarkId}`, { params })
        return response
    }

    getProductsAdvertisement = async (distributorId, type, page, size) => {
        const params = { distributorId, type, size, page }
        const response = await apiClient.get('/products/advertisement', { params })
        return response
    }

    getWishList = async (page, size) => {
        const params = { size, page }
        const response = await apiClient.get('/products/wishlist', { params })
        return response
    }

    getProductPriceSock = async (productStatus, reserve, size, page) => {
        const params = { product_status: productStatus, reserve, size, page }
        const response = await apiClient.get('/products/reserve', { params })
        console.log('API called successfully. Returned data:', response)
        return response
    }

    getProductPropose = async (distributorId, productId, productType, page, size) => {
        const params = { distributor_id: distributorId, product_id: productId, product_type: productType, page, size }
        const response = await apiClient.get('/products/propose/', { params })
        console.log('API called successfully. Returned data:', response)
        return response
    }
}

export const Products = new ProductsAPI()
