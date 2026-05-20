import apiClient, { setToken } from './api/apiClient'

class VersionAPI {
    updateToken(accessToken) {
        setToken(accessToken)
    }

    getVersion = async (os, version) => {
        const response = await apiClient.get(`/version/${os}/${version}`)
        console.log('API called successfully. Returned data:', response)
        return response
    }
}

export const Version = new VersionAPI()
