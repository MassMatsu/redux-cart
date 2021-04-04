import {
  DECREASE,
  INCREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTALS,
} from '../actions/actions';

function reducer(state, action) {
  console.log(state, action);
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === DECREASE) {
    let tempCart = [];
    if (action.payload.amount === 1) {
      tempCart = state.cart.filter((item) => item.id !== action.payload.id);
    } else {
      tempCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item = { ...item, amount: item.amount - 1 };
        }
        return item;
      });
    }
    return { ...state, cart: tempCart };
  }
  if (action.type === INCREASE) {
    const tempCart = state.cart.map((item) => {
      if (item.id === action.payload.id) {
        item = { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === REMOVE) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempCart };
  }
  if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, item) => {
        const { price, amount } = item;
        cartTotal.amount = cartTotal.amount + amount;
        cartTotal.total = cartTotal.total + price * amount;
        return cartTotal;
      },
      { total: 0, amount: 0 }
    );
    console.log('totals', total, amount);
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }
  return state;
}

export default reducer;
