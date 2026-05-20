import axios from 'axios'
import { handleError } from '~/utils/error'

const PAYMENT_API_BASE_URL = 'https://dev-api.1000m.vn/payments'

// Create dedicated VietQR client with same patterns as apiClient
const vietQrClient = axios.create({
    baseURL: PAYMENT_API_BASE_URL,
    timeout: 60000,
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
    },
})

let accessToken = null

const setVietQrToken = (token) => {
    accessToken = token
    if (token) {
        vietQrClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
        delete vietQrClient.defaults.headers.common['Authorization']
    }
}

// Request interceptor for debugging and timing
vietQrClient.interceptors.request.use(
    (config) => {
        if (config) {
            config.metadata = { startTime: new Date().getTime() }

            let requestData = null
            try {
                if (config.data) {
                    requestData = typeof config.data === 'string' ? JSON.parse(config.data) : config.data
                }
            } catch (e) {
                requestData = config.data
            }

            console.log('🚀 VietQR API Request:', {
                method: config.method?.toUpperCase(),
                url: config.url,
                fullUrl: config.baseURL + config.url,
                requestData: requestData,
                requestParams: config.params,
                headers: config.headers
            })
        } else {
            console.log('🚀 VietQR API Request:', config)
        }
        return config
    },
    (error) => {
        console.log('❌ VietQR API Error:', error)
        return Promise.reject(error)
    }
)

// Response interceptor
vietQrClient.interceptors.response.use(
    (response) => {
        try {
            const endTime = new Date().getTime()
            const duration = response.config?.metadata?.startTime
                ? `${endTime - response.config?.metadata.startTime}ms`
                : 'N/A'

            let requestData = null
            try {
                if (response.config?.data) {
                    requestData = typeof response.config.data === 'string'
                        ? JSON.parse(response.config.data)
                        : response.config.data
                }
            } catch (e) {
                requestData = response.config?.data
            }
            console.log('✅ VietQR API Response Success:', {
                method: response.config?.method?.toUpperCase(),
                url: response.config?.url,
                fullUrl: response.config?.baseURL + response.config?.url,
                status: response.status,
                statusText: response.statusText,
                duration: duration,
                requestData: requestData,
                requestParams: response.config?.params,
                responseData: response.data,
                headers: response.config?.headers
            })
        } catch (error) {
            console.log('❌ VietQR API Error:', error)
        }
        return response.data
    },
    (error) => {
        let requestData = null
        try {
            if (error.config?.data) {
                requestData = typeof error.config.data === 'string'
                    ? JSON.parse(error.config.data)
                    : error.config.data
            }
        } catch (e) {
            requestData = error.config?.data
        }

        console.log('❌ VietQR API Error:', {
            method: error.config?.method?.toUpperCase(),
            url: error.config?.url,
            fullUrl: error.config?.baseURL + error.config?.url,
            status: error.response?.status,
            statusText: error.response?.statusText,
            requestData: requestData,
            requestParams: error.config?.params,
            responseData: error.response?.data,
            errorMessage: error.message,
            headers: error.config?.headers
        })
        const errMess = handleError(error.response?.data, error.response?.status)
        return Promise.reject(errMess)
    }
)

class VietQrAPI {
    updateToken(accessToken) {
        setVietQrToken(accessToken)
    }

    /**
     * Generate QR code for payment
     * @param {Object} params
     * @param {number} params.brand_id - Brand ID (100 for healthcare, 110 for tea)
     * @param {number} params.merchant_id - Distributor ID
     * @param {number} params.branch_id - Branch ID (can use distributor_id)
     * @param {string} params.order_id - Order ID
     * @param {number} params.amount - Payment amount
     * @param {string} params.user_id - User ID
     * @returns {Promise}
     */
    generateQR = async ({ brand_id, merchant_id, branch_id, order_id, amount, user_id }) => {
        const response = await vietQrClient.post('/vietqr/generate/qr', {
            brand_id,
            merchant_id,
            branch_id: branch_id || merchant_id, // Use merchant_id if branch_id not provided
            order_id,
            amount,
            user_id,
        })
        return response
    }

    /**
     * Check payment status
     * @param {string} appTransId - App transaction ID from generateQR response
     * @returns {Promise}
     */
    checkPaymentStatus = async (appTransId) => {
        const response = await vietQrClient.get(`/vietqr/bank/check/${appTransId}`)
        return response
    }

    /**
     * Get bank information for merchant
     * @param {number} brand_id
     * @param {number} merchant_id
     * @param {number} branch_id
     * @returns {Promise}
     */
    getBankInfo = async (brand_id, merchant_id, branch_id) => {
        const params = { brand_id, merchant_id, branch_id }
        const response = await vietQrClient.get('/vietqr/bank', { params })
        return response
    }
}

export const VietQr = new VietQrAPI()
