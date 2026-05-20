import { NEOMED } from '../../store/actionsTypes'

export const getCateBySup = (supplierId, page, size, loadMore) => ({
  type: NEOMED.GET_CATE_BY_SUP_REQUEST,
  payload: {
    supplierId,
    page,
    size,
    loadMore,
  },
})

export const resetCateBySup = () => ({
  type: 'RESET_CATE_BY_SUP',
})