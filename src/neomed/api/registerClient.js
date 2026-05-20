import axios from 'axios'
import { BASE_REGISTER_PATH } from '~/constants/config'
import { handleError } from '~/utils/error'

const registerClient = axios.create({
    baseURL: BASE_REGISTER_PATH,
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
        registerClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
        delete registerClient.defaults.headers.common['Authorization']
    }
}

export const getToken = () => accessToken

registerClient.interceptors.response.use(
    (response) => {
        console.log('Register API Response:', response)
        return response.data
    },
    (error) => {
        console.log('Register API Error:', error, BASE_REGISTER_PATH)
        const errMess = handleError(error.response?.data, error.response?.status)
        return Promise.reject(errMess)
    }
)

export default registerClient
