import apiClient, { setToken } from './api/apiClient'

class CdnAPI {
    updateToken(accessToken) {
        setToken(accessToken)
    }

    pushImages = async (images) => {
        console.log('gggggggggggggggggggggggg', images)
        const formData = new FormData()
        if (Array.isArray(images)) {
            images.forEach((image, index) => {
                formData.append('images', image)
            })
        } else {
            formData.append('images', images)
        }

        const response = await apiClient.post('/cdn/images', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        console.log('API called successfully. Returned data push IMAGE:', response)
        return response
    }
}

export const Cdn = new CdnAPI()
