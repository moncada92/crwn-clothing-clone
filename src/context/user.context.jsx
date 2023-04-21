import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";


export const UserContex = createContext({
  currentUser: null,
  setCurrentUser: () => null
})

const USER_ACTION_TYPE = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch(type) {
    case USER_ACTION_TYPE.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      }
    
    default:
      throw new Error(`unavalibale type user ${type} in userReducer`)
  }

}

const INITIAL_VALUE = {
  currentUser: null
}

export const UserProvider = ({children}) => {

  //const [currentUser, setCurrentUser] = useState(null)
  // [state, dispatch]
  const [{currentUser}, dispatch ]= useReducer(userReducer, INITIAL_VALUE)

  
  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPE.SET_CURRENT_USER, payload: user })
  }

  const value = {currentUser, setCurrentUser}

  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user) => {

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
