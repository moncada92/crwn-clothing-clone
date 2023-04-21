import { CART_ACTIONS_TYPE } from "./cart.types";


export const CART_INITIAL_VALUE = {
  cartItems: [],
  isCardOpen: false,
}

export const CartReducer = (state = CART_INITIAL_VALUE, action = {}) => {

  const {type, payload} = action;

  switch(type) {

    case CART_ACTIONS_TYPE.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTIONS_TYPE.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    default:
      return state

  }
}
