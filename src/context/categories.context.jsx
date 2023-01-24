import { useEffect } from "react";
import { createContext, useState } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
})

export const CategoriesProvider = ({children}) => {

  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {

    const getCategoriesMap = async () => {
      const mapCategory = await getCategoriesAndDocuments();
      setCategoriesMap(mapCategory);
    }

    getCategoriesMap();

  }, [])

  const value = {categoriesMap, setCategoriesMap};


  return(
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )

}