import Kitsu from 'kitsu'
import { BASE_AUTH_PATH } from '~/constants/config'

const api = new Kitsu({
  baseURL: BASE_AUTH_PATH,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  camelCaseTypes: false,
  axiosOptions: {
    withCredentials: true,
  },
})

export default api

