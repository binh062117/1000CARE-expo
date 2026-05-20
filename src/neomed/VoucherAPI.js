import apiClient, { setToken } from './api/apiClient'

class VoucherAPI {
    updateToken(accessToken) {
        setToken(accessToken)
    }

    getListVoucherByCustomers = async (distributorId, status, page, size) => {
        const params = { size, page, status, distributorId }
        const response = await apiClient.get('/vouchers/customers', { params })
        console.log('API called successfully. Returned data:', response)
        return response
    }

    getListVoucherValidByCustomers = async (customerId, distributorId, orderAmount, page, size, payment_method) => {
        const params = { size, page }
        const response = await apiClient.get(`/vouchers/valid/${distributorId}/${orderAmount}/${payment_method}`, { params })
        console.log('API called successfully. Returned data:', response)
        return response
    }
}

export const Voucher = new VoucherAPI()
