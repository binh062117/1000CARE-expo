import {NEOMED} from '../../store/actionsTypes'

export const pushImage = (image) => ({
    type: NEOMED.PUSH_IMAGE_REQUEST,
    payload: {
      image
    },
})