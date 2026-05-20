import Status from '../../common/Status/Status'
import { NEOMED } from '../../store/actionsTypes'

const initialState = {
    status: Status.DEFAULT,
    listBanner: [],
    idDistriBanner: 1,
    nameDistribute: 'Đa Phúc',
    errorGetListBanner: '',

    statusAllBanner: Status.DEFAULT,
    listAllBanner: [],
    errorGetAllListBanner: '',
}
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case NEOMED.GET_BANNERS_REQUEST:
            return {
                ...state,
                status: Status.LOADING
            }
        case NEOMED.GET_BANNERS_SUCCESS:
            let BannerByDistri = payload.listBanner ? payload.listBanner : []
            if (payload.loadMore) {
                BannerByDistri = [...state.listBanner, ...BannerByDistri]
            }
            return {
                ...state,
                listBanner: BannerByDistri,
                status: Status.SUCCESS
            }
        case NEOMED.GET_BANNERS_FAILURE:
            return {
                ...state,
                status: Status.ERROR,
                errorGetListBanner: payload.error
            }
        case 'RESET_BANNERS':
            return {
                ...state,
                status: Status.DEFAULT,
                listBanner: [],
                errorGetListBanner: ''
            }
        case NEOMED.GET_ALL_BANNERS_REQUEST:
            return {
                ...state,
                statusAllBanner: Status.LOADING
            }
        case NEOMED.GET_ALL_BANNERS_SUCCESS:
            let allBanner = payload.listAllBanner ? payload.listAllBanner : []
            if (payload.loadMore) {
                allBanner = [...state.listAllBanner, ...allBanner]
            }
            return {
                ...state,
                listAllBanner: allBanner,
                statusAllBanner: Status.SUCCESS
            }
        case NEOMED.GET_ALL_BANNERS_FAILURE:
            return {
                ...state,
                statusAllBanner: Status.ERROR,
                errorGetAllListBanner: payload.error
            }
        case 'RESET_ALL_BANNERS':
            return {
                ...state,
                statusAllBanner: Status.DEFAULT,
                listAllBanner: [],
                errorGetAllListBanner: ''
            }
        case 'SAVE_ID_BANNER':
            return {
                ...state,
                idDistriBanner: payload.idDistriBanner,
                nameDistribute: payload.nameDistribute
            }
        default:
            return state;
    }
}