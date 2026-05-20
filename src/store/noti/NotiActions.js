import { NEOMED } from '../actionsTypes'

export const saveTokenFcm = (tokenFcm) => ({
  type: 'SAVE_TOKEN_FCM',
  payload: {
    tokenFcm
  },
});
export const registerFcm = (tokenFcm) => ({
  type: NEOMED.REGISTER_FCM_REQUEST,
  payload: {
    tokenFcm
  },
});
export const unRegisterFcm = tokenFcm => ({
  type: NEOMED.UN_REGISTER_FCM_REQUEST,
  payload: {
    tokenFcm
  }
})
export const offOpenNoti = () => ({
  type: "OFF_OPEN_NOTI"
});
export const getListNoti = (size,page,loadMore,isRead) => ({
  type: NEOMED.GET_LIST_NOTI_REQUEST,
  payload: {
    page,
    size,
    loadMore,
    isRead
  }
});
export const resetListNoti = () => ({
  type: 'RESET_LIST_NOTI'
})

export const getCheckReadNoti =(id_Noti,status) => ({
  type: NEOMED.GET_CHECK_READ_NOTI_REQUEST,
  payload: {
    id_Noti,
    status
  }
})