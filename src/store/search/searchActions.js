import { NEOMED } from '../actionsTypes'

export const search = (query, autocomplete = false, distributorId) => ({
  type: NEOMED.SEARCH_REQUEST,
  payload: {
    query,
    autocomplete,
    distributorId
  },
})

export const addSearchHistory = (query) => ({
  type: 'ADD_SEARCH_HISTORY',
  payload: {
    query,
  },
})

export const removeSearchHistory = (query) => ({
  type: 'REMOVE_SEARCH_HISTORY',
  payload: {
    query,
  },
})

export const resetSearch = () =>( {
  type: 'RESET_SEARCH'
})