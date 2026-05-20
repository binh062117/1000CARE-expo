
import { NEOMED } from '../actionsTypes'

export const getAllDistributors = (page, size, status, loadMore) => ({
  type: NEOMED.GET_ALL_DISTRIBUTORS_REQUEST,
  payload: {
    page,
    size,
    loadMore,
    status,
  },
})

export const getDistributorsActive = (sortBy,page, size, loadMore) => ({
  type: NEOMED.GET_DISTRIBUTORS_ACTIVE_REQUEST,
  payload: {
    sortBy,
    page,
    size,
    loadMore,
  },
})

export const setSelectedDistri = (selectedDistri) => ({
  type: 'SET_DISTRIBUTOR_SELECTED',
  payload: {
    selectedDistri,
  },
})

export const getSearchDistributor = (name, size, page, status) => ({
  type: NEOMED.GET_SEARCH_DISTRIBUTOR_REQUEST,
  payload: {
    name,
    size,
    page,
    status,
  },
})
export const resetSearchDistributor = () => ({
  type: 'RESET_SEARCH_DISTRIBUTOR',
})