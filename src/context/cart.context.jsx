import { useReducer } from "react";
import { createContext } from "react";
import { createAction } from "../utils/reducer/reducer.utils";


const CART_ACTIONS_TYPE = {
  SET_CARD_ITEMS: 'SET_CARD_ITEMS',
  IS_CARD_SHOW: 'IS_CARD_SHOW',
}

const CartReducer = (state, action) => {

  const {type, payload} = action;

  switch(type) {

    case CART_ACTIONS_TYPE.SET_CARD_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTIONS_TYPE.IS_CARD_SHOW:
      return {
        ...state,
        isCardShow: payload,
      };

    default:
      throw new Error(`Erron in type reducer ${type}`)

  }
}

const INITIAL_VALUE = {
  cartCounter: 0,
  totalPriceCart: 0,
  cartItems: [],
  isCardShow: false,
}


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

  return cartItems

}

const clearCartItem = (cartItems, cartIdToClear) => {
  const filterDeleteCart = cartItems.filter((cartItem) => cartItem.id !== cartIdToClear);
  return filterDeleteCart;

}

export const CartContext = createContext({
  isCardShow: false,
  setIsCardShow: () => {},
  cartItems: [],
  addItemToCard: () => {},
  clearItemToCart: () => {},
  cartCounter: 0,
  totalPriceCart: 0
})

export const CardProvider = ({children}) => {


  const [{cartItems, isCardShow, cartCounter, totalPriceCart}, dispatch] = useReducer(CartReducer, INITIAL_VALUE);

  const addItemToCard = (productToCard) => {
    const newCartItems = addCardItem(cartItems, productToCard )
    updateCartItemsReducer(newCartItems)
  }
  const removeItemToCard = (removeProductToCard) => {
    const newCartItems = removeCartItem(cartItems, removeProductToCard, )
    updateCartItemsReducer(newCartItems)
  }

  const clearItemToCart = (cartIdToClear) => {
    const newCartItems = clearCartItem(cartItems, cartIdToClear)
    updateCartItemsReducer(newCartItems)
  }


  const updateCartItemsReducer = (newCartItems) => {

    const countAllItems = cartItems.reduce((accumTotal, cartItem) => {
      return accumTotal + cartItem.quantity
    }, 0)

    const countAllPriceItems = cartItems.reduce((accumTotal, cartItem) => {
      return accumTotal + cartItem.quantity * cartItem.price
    }, 0)

    dispatch(createAction(
      CART_ACTIONS_TYPE.SET_CARD_ITEMS,
      {
        cartItems: newCartItems,
        cartCounter: countAllItems,
        totalPriceCart: countAllPriceItems,
    }))

  }
  const setIsCardShow = (bool) => {
    dispatch(createAction(CART_ACTIONS_TYPE.IS_CARD_SHOW, bool))
  }

  const value = {
    isCardShow,
    setIsCardShow,
    addItemToCard,
    cartItems,
    cartCounter,
    removeItemToCard,
    clearItemToCart,
    totalPriceCart
}

  return(
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
} 
