import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from '../actions/actions';

function reducer(state, action) {
  console.log(state, action);
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === DECREASE) {
    
  }
  if (action.type === INCREASE) {

  }
  if (action.type === REMOVE) {
    console.log('remove', action.payload)
    const tempCart = state.cart.filter((item) => item.id !== action.payload)
    return {...state, cart: tempCart}
  }

  return state;
}

export default reducer;
