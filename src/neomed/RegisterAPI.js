import registerClient, { setToken } from './api/registerClient'
import { handleError } from '~/utils/error'

class RegisterAPI {
    updateToken(accessToken) {
        setToken(accessToken)
    }

    signUp = async (phone) => {
        const body = { mobile: phone }
        const response = await registerClient.post('/users/sign-up-by-phone', body)
        console.log('API called successfully. Returned data:', response)
        return response
    }

    confirmSignUp = async (requestId, otp) => {
        const body = { otp, request_id: requestId }
        const response = await registerClient.post('/users/confirm-sign-up-by-phone', body)
        console.log('API called successfully. Returned data:', response)
        return response
    }

    loginByPhone = async (phone, rememberMe) => {
        const body = { mobile: phone, rememberMe }
        const response = await registerClient.post('/auth/token-by-mobile', body)
        console.log('API called successfully. Returned data:', response)
        return response
    }

    confirmLoginByPhone = async (requestId, otp) => {
        const body = { otp, request_id: requestId }
        const response = await registerClient.post('/auth/confirm-token-by-mobile', body)
        console.log('API called successfully. Returned data:', response)
        return response
    }

    loginMobile = async (phone, rememberMe) => {
        try {
            const body = { mobile: phone, rememberMe }
            const response = await registerClient.post('/auth/login-by-mobile-otp', body)
            console.log('API called successfully. Returned data:', response)
            return response
        } catch (error) {
            const e = error?.message?.includes('invalid')
                ? { error: 'string', message: 'Số điện thoại không hợp lệ' }
                : error?.message?.includes('network')
                    ? { error: 'string', message: 'Không có kết nối mạng. Xin vui lòng kiểm tra lại.' }
                    : error
            console.log('API called Errrorrrrrrr. Returned data::::', error)
            const errMess = handleError(e, error.toString())
            throw errMess
        }
    }

    confirmLoginMobile = async (otpToken, requestId, otp) => {
        const body = { otp, otp_token: otpToken, request_id: requestId }
        const response = await registerClient.post('/auth/confirm-login-by-mobile-otp', body)
        console.log('API called successfully. Returned data:', response)
        return response
    }

    updateIdentity = async (dob, dateIssue, fullName, nationalId, placeIssue, residenceAddress) => {
        const body = {
            date_of_birth: dob,
            date_of_issue: dateIssue,
            full_name: fullName,
            national_id: nationalId,
            place_of_issue: placeIssue,
            residence_address: residenceAddress,
        }
        const response = await registerClient.put('/users/identity', body)
        console.log('API called successfully. Returned data Update EKYC:', response)
        return response
    }

    updateProfile = async (email) => {
        const body = { email }
        const params = { fields: 'email' }
        const response = await registerClient.put('/users/', body, { params })
        console.log('API called successfully. Returned data:', response)
        return response
    }

    loginFirebaseToken = async (token) => {
        const body = { token }
        const response = await registerClient.post('/auth/token-by-firebase', body)
        console.log('API called successfully. Returned data:', response)
        return response
    }

    getListPhoneByPasFirebase = async () => {
        const response = await registerClient.get('/auth/bypass-firebase')
        console.log('API called successfully. Returned data:', response)
        return response
    }

    deleteAccount = async (idUser) => {
        const response = await registerClient.delete(`/users/${idUser}`)
        console.log('API called successfully. Returned data:', response)
        return response
    }
}

export const Register = new RegisterAPI()
