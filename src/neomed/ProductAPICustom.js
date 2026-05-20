import apiClient, { setToken } from './api/apiClient'

class ProductAPICustomClass {
    getProductPriceSock = async (distributorId, productStatus, reserve, size, page) => {
        const params = { distributor_id: distributorId, product_status: productStatus, reserve, size, page }
        const response = await apiClient.get('/products/reserve', { params })
        console.log('API called successfully. Returned data:', response)
        return response
    }

    setToken = (token) => {
        setToken(token)
    }
}

export const ProductAPICustom = new ProductAPICustomClass()
