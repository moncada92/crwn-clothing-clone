import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTIONS_TYPE } from "./cart.types";


const addCardItem = (cartItems, productToAdd) => {
  const isExistInCart = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

  if(isExistInCart) {

    return cartItems.map((cartItem) => 
      cartItem.id === productToAdd.id
        ? {...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
      
  }

  return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
  const isExistInCart = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id)

  if(isExistInCart?.quantity === 1) {
    return cartItems.filter((cardItem) => cardItem.id !== cartItemToRemove.id)
  }

  if(isExistInCart) {

    return cartItems.map((cartItem) => 
      cartItem.id === cartItemToRemove.id
        ? {...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )
      
  }

  return cartItems;
}

const clearCartItem = (cartItems, cartIdToClear) => {
  const filterDeleteCart = cartItems.filter((cartItem) => cartItem.id !== cartIdToClear);
  return filterDeleteCart;

}

export const setIsCartOpen = (booblean) => createAction(CART_ACTIONS_TYPE.SET_IS_CART_OPEN, booblean);

export const addItemToCard = (cartItems, productToCard) => {
  const newCartItems = addCardItem(cartItems, productToCard )
  return createAction(CART_ACTIONS_TYPE.SET_CART_ITEMS, newCartItems)
}

export const removeItemToCard = (cartItems, removeProductToCard) => {
  const newCartItems = removeCartItem(cartItems, removeProductToCard, )
  return createAction(CART_ACTIONS_TYPE.SET_CART_ITEMS, newCartItems)
}

export const clearItemToCart = (cartItems, cartIdToClear) => {
  const newCartItems = clearCartItem(cartItems, cartIdToClear)
  return createAction(CART_ACTIONS_TYPE.SET_CART_ITEMS, newCartItems)
}