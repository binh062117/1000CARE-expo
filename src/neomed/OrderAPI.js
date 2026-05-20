import apiClient, { setToken } from './api/apiClient'

class OrderAPI {
    updateToken(accessToken) {
        setToken(accessToken)
    }

    getAll = async (next, size, status, paymentMethob, paymentStatus) => {
        const params = { next, size, status, paymentStatus, pmc: paymentMethob }
        const response = await apiClient.get('/orders/', { params })
        console.log('API called successfully. Returned data:', response)
        return response
    }

    getOne = async (orderId) => {
        const response = await apiClient.get(`/orders/${orderId}`)
        console.log('API called successfully. Returned data:', response)
        return response
    }

    userConfirm = async (orderId) => {
        const response = await apiClient.put(`/orders/${orderId}/user-confirmed`)
        console.log('API called successfully. Returned data:', response)
        return response
    }

    paymentOrder = async (orderId, paymentCode) => {
        const response = await apiClient.post(`/orders/${orderId}/payment/${paymentCode}`)
        console.log('API called successfully. Returned data:', response)
        return response
    }

    paymentListOrderByBank = async (order_ids, distributor_id, payment_code) => {
        const body = { order_ids, distributor_id, payment_code }
        const response = await apiClient.post('/orders/payment-request', body)
        console.log('API called successfully. Returned data:', response)
        return response
    }

    paymentByBankConfirm = async (otp, request_id) => {
        const body = { otp, request_id }
        const response = await apiClient.post('/orders/payment-confirm', body)
        console.log('API called successfully. Returned data:', response)
        return response
    }

    getItemHistory = async (orderId, cursor) => {
        const params = { cursor }
        const response = await apiClient.get(`/orders/${orderId}/items-changed-history`, { params })
        console.log('API called successfully. Returned data:', response)
        return response
    }

    buyAgain = async (orderId) => {
        const response = await apiClient.post(`/orders/${orderId}/buy-again`)
        console.log('API called successfully. Returned data:', response)
        return response
    }

    changeOrderStatus = async (orderId, userId, reason) => {
        const body = { order_id: orderId, user_id: userId, reason }
        const response = await apiClient.put('/orders/cancel', body)
        console.log('API called successfully. Returned data:', response)
        return response
    }
}

export const Orders = new OrderAPI()
