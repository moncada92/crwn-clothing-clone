import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


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


  const [isCardShow, setIsCardShow] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCounter, setCartCounter] = useState(0)
  const [totalPriceCart, setTotalPriceCart] = useState(0)


  const addItemToCard = (productToCard) => {
    setCartItems(addCardItem(cartItems, productToCard, ))
  }
  const removeItemToCard = (removeProductToCard) => {
    setCartItems(removeCartItem(cartItems, removeProductToCard, ))
  }

  const clearItemToCart = (cartIdToClear) => {
    setCartItems(clearCartItem(cartItems, cartIdToClear))
  }

  useEffect(() => {

    const countAllItems = cartItems.reduce((accumTotal, cartItem) => {
      return accumTotal + cartItem.quantity
    }, 0)
    setCartCounter(countAllItems);

  }, [cartItems])

  useEffect(() => {

    const countAllPriceItems = cartItems.reduce((accumTotal, cartItem) => {
      return accumTotal + cartItem.quantity * cartItem.price
    }, 0)
    setTotalPriceCart(countAllPriceItems);

  }, [cartItems])

  const value = {isCardShow, setIsCardShow, addItemToCard, cartItems, cartCounter, removeItemToCard, clearItemToCart, totalPriceCart}

  return(
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
} 
