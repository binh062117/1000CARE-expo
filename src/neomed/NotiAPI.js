import apiClient, { setToken } from './api/apiClient'

class NotiAPI {
    updateToken(accessToken) {
        setToken(accessToken)
    }

    getRegisterFcm = async (token) => {
        const response = await apiClient.post(`/noti/register/${token}`)
        console.log('API called successfully. Returned data:', response)
        return response
    }

    getUnRegisterFcm = async (token) => {
        const response = await apiClient.delete(`/noti/unregister/${token}`)
        console.log('lỗi Noti:', response)
        console.log('API called successfully. Returned data:', response)
        return response
    }

    getListNotification = async (size, page, isRead) => {
        const params = { size, page, isRead }
        const response = await apiClient.get('/noti/', { params })
        console.log('API called successfully. Returned data:', response)
        return response
    }

    checkReadNoti = async (id, status) => {
        const params = { isRead: true, status }
        const response = await apiClient.put(`/noti/${id}`, null, { params })
        console.log('API called successfully. Returned data:', response)
        return response
    }
}

export const Noti = new NotiAPI()
