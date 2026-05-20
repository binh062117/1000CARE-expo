import Status from '../../common/Status/Status'
import { NEOMED } from '../../store/actionsTypes'
const initialState = {
    tokenFcm: null,
    openNoti: true,
    listNoti: [],
    statusListNoti: Status.DEFAULT,
    errorGetListNoti: '',
    isListNotiNonRead: [],
    statusCheckRead: Status.DEFAULT,
}
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SAVE_TOKEN_FCM':
            return {
                ...state,
                tokenFcm: payload.tokenFcm
            }
        case 'OFF_OPEN_NOTI':
            return {
                ...state,
                openNoti: false
            }
        case NEOMED.GET_LIST_NOTI_REQUEST:
            return{
                ...state,
                statusListNoti: Status.LOADING
            }
        case NEOMED.GET_LIST_NOTI_SUCCESS:
            if(payload.isRead == 0) {
                let listNotificationNonRead = payload.listNoti?payload.listNoti:[]
                return {
                    ...state,
                    isListNotiNonRead: listNotificationNonRead,
                    statusListNoti: Status.SUCCESS
                }
            }else{
                let listNotification = payload.listNoti?payload.listNoti:[]
                if(payload.loadMore) {
                    listNotification = [...state.listNoti,...listNotification]
                }
                return {
                    ...state,
                    listNoti: listNotification,
                    statusListNoti: Status.SUCCESS
                }
            }
        case NEOMED.GET_LIST_NOTI_FAILURE:
            return{
                ...state,
                statusListNoti: Status.ERROR,
                errorGetListNoti: payload.errorMsg
            }
        case 'RESET_LIST_NOTI':
            return{
                ...state,
                errorGetListNoti: '',
                statusListNoti: Status.DEFAULT,
                listNoti: []
            }
        case NEOMED.GET_CHECK_READ_NOTI_REQUEST:
            return{
                ...state,
                statusCheckRead: Status.LOADING
            }
        case NEOMED.GET_CHECK_READ_NOTI_SUCCESS:
            return{
                ...state,
                statusCheckRead: Status.SUCCESS
            }
        default:
            return state
    }
}
