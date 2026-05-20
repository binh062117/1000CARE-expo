import apiClient, { setToken } from './api/apiClient'

class CartAPICustom {
    setToken = (token) => {
        setToken(token)
    }

    viewCart = async (step, ids) => {
        const params = { step }
        if (ids) {
            params.ids = ids
        }
        const response = await apiClient.get('/carts/view', { params })
        console.log('responseeeeeeeeee:', response)
        console.log('API called successfully. Returned dataaaaaaaaa:', response)
        return response
    }
}

export const CartCustom = new CartAPICustom()
