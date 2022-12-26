import { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";


export const UserContex = createContext({
  currentUser: null,
  setCurrentUser: () => null
})

export const UserProvider = ({children}) => {

  const [currentUser, setCurrentUser] = useState(null)

  const value = {currentUser, setCurrentUser}

  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user) => {
      console.log(user);

      if(user){
        createUserDocumentFromAuth(user);
      }

      setCurrentUser(user);
    })

    return unSubscribe;
  }, [])

  return(
    <UserContex.Provider value={value}>
      {children}
    </UserContex.Provider>
  )
}
