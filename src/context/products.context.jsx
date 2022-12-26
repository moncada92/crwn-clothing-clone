import { useEffect } from "react";
import { createContext, useState } from "react";

import PRODUCTS from '../shop-data.json';

export const ProductContext = createContext({
  products: [],
})

export const ProductProvider = ({children}) => {

  const [products, setProducts] = useState(PRODUCTS);

  const value = {products, setProducts};

  useEffect(() => {

    setProducts(PRODUCTS);

  }, [])

  return(
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  )

}