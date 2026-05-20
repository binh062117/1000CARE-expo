import apiClient, { setToken } from './api/apiClient'

class ReferralAPI {
    updateToken(accessToken) {
        setToken(accessToken)
    }

    checkReferral = async () => {
        const response = await apiClient.get('/referral/check-event')
        console.log('API called successfully. Returned data:', response)
        return response
    }

    applyReferral = async (refCode) => {
        const response = await apiClient.post(`/referral/apply/${refCode}`)
        console.log('error:', response)
        console.log('API called successfully. Returned data:', response)
        return response
    }
}

export const Referral = new ReferralAPI()
