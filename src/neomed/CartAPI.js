import apiClient, { setToken } from './api/apiClient'

class CartAPI {
    updateToken(accessToken) {
        setToken(accessToken)
    }

    addToCart = async (productId, distributorId, quantity) => {
        const params = { qty: quantity, distributorId }
        const response = await apiClient.post(`/carts/${productId}`, null, { params })
        console.log('API called successfully. Returned data:', response)
        return response
    }

    updateCart = async (productId, distributorId, quantity, body) => {
        const params = { qtt: quantity, distributorId }
        const response = await apiClient.put(`/carts/${productId}`, body, { params })
        console.log('API called successfully. Returned data:', response)
        return response
    }

    viewCart = async (step, ids) => {
        console.log('111STEP VIEW CART CHECK:::', step, ids)
        const params = { step, ids }
        const response = await apiClient.get('/carts/view', { params })
        console.log('VIEW CART dataaaaaaaaa:', response)
        return response
    }

    getInfo = async () => {
        const response = await apiClient.get('/carts/info')
        console.log('API called successfully. Returned data:', response)
        return response
    }

    checkout = async (app_trans_id = null) => {
        const body = app_trans_id ? { app_trans_id } : null
        const response = await apiClient.post('/carts/checkout', body)
        console.log('API called successfully. Returned data:', response)
        return response
    }

    addOptionInfo = async (value, type, distributorId, paymentType) => {
        const params = { value, type, distributorId, paymentType }
        const response = await apiClient.put('/carts/optional', null, { params })
        console.log('1111addOptionInfo API RESPONSE::::', response)
        return response
    }

    getListPaymentMethob = async (distributorId, paymentType) => {
        const params = { distributorId, paymentType }
        const response = await apiClient.get('/carts/payment-methods', { params })
        console.log('API called successfully. Returned data:', response)
        return response
    }

    addMultiProdToCart = async (body) => {
        console.log('aaaaaaaaaaaaaaaa:', body)
        const response = await apiClient.post('/carts/products', body)
        console.log('API called successfully. Returned data:', response)
        return response
    }

    addProdPromotionToCart = async (body) => {
        const response = await apiClient.post('/carts/add-promo-products', body)
        console.log('API called successfully. Returned data:', response)
        return response
    }
}

export const Carts = new CartAPI()
