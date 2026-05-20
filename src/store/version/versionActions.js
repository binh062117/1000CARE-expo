import { NEOMED } from '../actionsTypes'

export const getVersion = (os, version) => ({
  type: NEOMED.GET_VERSION_REQUEST,
  payload: {
    os,
    version
  },
})