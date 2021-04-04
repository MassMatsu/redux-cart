export const DECREASE = 'DECREASE'
export const INCREASE = 'INCREASE'
export const REMOVE = 'REMOVE'
export const CLEAR_CART = 'CLEAR_CART'
export const GET_TOTALS = 'GET_TOTALS'

// action creator to export action object instead of only action vaiable
export const removeItem = (id) => {
  return {type: REMOVE, payload: id}
}