import { DECREASE, INCREASE, CLEAR_CART } from '../actions/actions';

function reducer(state, action) {
  console.log(state, action);
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  return state;
}

export default reducer;
