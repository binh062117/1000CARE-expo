import axios from 'axios'
import { BASE_ACCOUNT_PATH } from '~/constants/config'
import { handleError } from '~/utils/error'

const accountingClient = axios.create({
    baseURL: BASE_ACCOUNT_PATH,
    timeout: 60000,
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
    },
})

let accessToken = null

export const setToken = (token) => {
    accessToken = token
    if (token) {
        accountingClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
        delete accountingClient.defaults.headers.common['Authorization']
    }
}

export const getToken = () => accessToken

accountingClient.interceptors.response.use(
    (response) => {
        console.log('Accounting API Response:', response)
        return response.data
    },
    (error) => {
        console.log('Accounting API Error:', error)
        const errMess = handleError(error.response?.data, error.response?.status)
        return Promise.reject(errMess)
    }
)

export default accountingClient
