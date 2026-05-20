import { NEOMED } from '../actionsTypes'

export const getBanners = (distributorId,size,page,loadMore) => ({
    type: NEOMED.GET_BANNERS_REQUEST,
    distributorId,
    payload: {
        size,
        page,
        loadMore
    }
});

export const getAllBanners = (size,page,loadMore) => ({
    type: NEOMED.GET_ALL_BANNERS_REQUEST,
    payload: {
        size,
        page,
        loadMore
    }
});
export const resetAllBanners = () => ({
    type: 'RESET_ALL_BANNERS'
});

export const resetBanners = () => ({
    type: 'RESET_BANNERS'
});

export const saveIdBanner = (idDistriBanner, nameDistribute) => ({
    type: 'SAVE_ID_BANNER',
    payload: {
        idDistriBanner,
        nameDistribute
    }
});