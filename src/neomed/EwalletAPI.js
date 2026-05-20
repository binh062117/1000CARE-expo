import apiClient, { setToken } from './api/apiClient'

class EwalletAPI {
    updateToken(accessToken) {
        setToken(accessToken)
    }

    getLinkAccount = async (page, size) => {
        const params = { size, page }
        const response = await apiClient.get('/ewallet/linked-payment-accounts', { params })
        console.log('API called successfully. Returned data LinkedPaymentAccount:', response)
        return response
    }

    linkPayment = async () => {
        const response = await apiClient.post('/ewallet/payment-accounts')
        console.log('API called successfully. Returned data:', response)
        return response
    }

    confirmLinkPayment = async (otp, requestId) => {
        const body = { otp, requestId }
        console.log('confirmLinkPayment body', body)
        const response = await apiClient.post('/ewallet/payment-accounts/confirm', body)
        console.log('API called successfully. Returned data:', response)
        return response
    }

    requestPayment = async (distributorId, amount, accountIdStr) => {
        const body = {
            amount,
            distributor_id: distributorId,
            account_id_str: accountIdStr,
        }
        console.log('paymentRequest body', body)
        const response = await apiClient.post('/ewallet/payment-request', body)
        console.log('API called successfully. Returned data:', response)
        return response
    }

    confirmPayment = async (otp, requestId) => {
        const body = { otp, request_id: requestId }
        console.log('confirmLinkPayment body', body)
        const response = await apiClient.post('/ewallet/payment-confirm', body)
        console.log('API called successfully. Returned data:', response)
        return response
    }

    requestTopup = async (distributorId, amount, paymentCode) => {
        const body = {
            amount,
            distributor_id: distributorId,
            payment_code: paymentCode,
        }
        console.log('paymentRequest body', body)
        const response = await apiClient.post('/ewallet/topup-request', body)
        console.log('API called successfully. Returned data:', response)
        return response
    }

    confirmTopup = async (otp, requestId) => {
        const body = { otp, request_id: requestId }
        console.log('confirmLinkPayment body', body)
        const response = await apiClient.post('/ewallet/topup-confirm', body)
        console.log('API called successfully. Returned data:', response)
        return response
    }

    getCustomerInfo = async () => {
        const response = await apiClient.get('/ewallet/customer-info')
        console.log('API called successfully. Returned data:', response)
        return response
    }

    getBalances = async () => {
        const params = { payment: 1 }
        const response = await apiClient.get('/ewallet/balances', { params })
        console.log('EWALLET API DATA:::', response)
        console.log('API called successfully. Returned data:', response)
        return response
    }

    getTransactionHistory = async (type = 'all', distributor, page, size) => {
        const params = { page, size }
        const response = await apiClient.get(`/ewallet/trans-history/${type}`, { params })
        return response
    }

    getInfoWallet = async () => {
        const response = await apiClient.get('/ewallet/')
        console.log('API called successfully. Returned data Info Ewallet:', response)
        return response
    }

    checkLoan = async () => {
        const response = await apiClient.get('/ewallet/check-loan')
        console.log('API called successfully. Returned data:', response)
        return response
    }

    getLoanInfo = async () => {
        const response = await apiClient.get('/ewallet/loan-info')
        console.log('API called successfully. Returned data:', response)
        return response
    }

    createLoan = async (data) => {
        const response = await apiClient.post('/ewallet/loan-request', data)
        console.log('API called successfully. Returned data:', response)
        return response
    }

    createLoanConfirm = async (body) => {
        const response = await apiClient.post('/ewallet/loan-confirm', body)
        console.log('API called successfully. Returned data:', response)
        return response
    }

    preClose = async () => {
        const response = await apiClient.get('/ewallet/pre-close')
        console.log('API called successfully. Returned data:', response)
        return response
    }

    preCloseConfirm = async (body) => {
        const response = await apiClient.post('/ewallet/pre-close-confirm', body)
        console.log('API called successfully. Returned data:', response)
        return response
    }

    getLoanProposals = async () => {
        const response = await apiClient.get('/ewallet/proposals')
        console.log('API called successfully. Returned data:', response)
        return response
    }

    linkResource = async () => {
        const response = await apiClient.get('/ewallet/link-resource')
        console.log('API called successfully. Returned data:', response)
        return response
    }

    linkResourceConfirm = async (body) => {
        const response = await apiClient.post('/ewallet/link-resource-confirm', body)
        console.log('API called successfully. Returned data:', response)
        return response
    }

    chargeFee = async (amount, action) => {
        const params = { amount, action }
        const response = await apiClient.get('/ewallet/charge-fee', { params })
        console.log('API called successfully. Returned data:', response)
        return response
    }
}

export const Ewallet = new EwalletAPI()
