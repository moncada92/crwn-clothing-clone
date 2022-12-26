import { useState } from "react";
import { createContext } from "react";


export const CartContext = createContext({
  isCardShow: false,
  setIsCardShow: () => {}
})


export const CardProvider = ({children}) => {


  const [isCardShow, setIsCardShow] = useState({})

  const value = {isCardShow, setIsCardShow}

  return(
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
} 
