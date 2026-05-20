import axios from 'axios'
import { BASEPATH } from '~/constants/config'
import { handleError } from '~/utils/error'

const apiClient = axios.create({
    baseURL: BASEPATH,
    timeout: 60000,
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
    },
    paramsSerializer: {
        indexes: false
    }
})

let accessToken = null

export const setToken = (token) => {
    accessToken = token
    if (token) {
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
        delete apiClient.defaults.headers.common['Authorization']
    }
}

export const getToken = () => accessToken

// Request interceptor for debugging and timing
apiClient.interceptors.request.use(
    (config) => {
        if (config) {
            config.metadata = { startTime: new Date().getTime() }

            let requestData = null
            try {
                // Check if data is a string (needs parsing) or already an object
                if (config.data) {
                    requestData = typeof config.data === 'string' ? JSON.parse(config.data) : config.data
                }
            } catch (e) {
                requestData = config.data
            }

            console.log('🚀 API Request:', {
                method: config.method?.toUpperCase(),
                url: config.url,
                fullUrl: config.baseURL + config.url,
                requestData: requestData,
                requestParams: config.params,
                headers: config.headers
            })
        } else {
            console.log('🚀 API Request:', config)
        }
        return config
    },
    (error) => {
        console.log('❌ API Error:', error)
        return Promise.reject(error)
    }
)

apiClient.interceptors.response.use(
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
            console.log('✅ API Response Success:', {
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
            console.log('✅ API Response Success Full Url:', response)
        } catch (error) {
            console.log('❌ API Error:', error)
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

        console.log('❌ API Error:', {
            method: error.config?.method?.toUpperCase(),
            url: error.config?.url,
            fullUrl: (error.config?.baseURL || '') + (error.config?.url || ''),
            status: error.response?.status,
            statusText: error.response?.statusText,
            requestData: requestData,
            requestParams: error.config?.params,
            responseData: error.response?.data,
            errorMessage: error.message,
            headers: error.config?.headers
        })
        const errMess = handleError(error.response?.data, error.response?.status)
        
        // If it's a 401, we might want to trigger something else, 
        // but for now, we just pass the error up to the saga
        return Promise.reject(errMess)
    }
)

export default apiClient
