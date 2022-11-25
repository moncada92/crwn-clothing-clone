import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD9EU_CQ2s_XsSYEvbLyDXYZoaWQScuG2I",
  authDomain: "crwn-db-6a55d.firebaseapp.com",
  projectId: "crwn-db-6a55d",
  storageBucket: "crwn-db-6a55d.appspot.com",
  messagingSenderId: "272554248238",
  appId: "1:272554248238:web:48483ddc8c6177e53b77bf"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()

export const singInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additiontals = {}) => {

  if(!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userAuth);

  const snapshotUser = await getDoc(userDocRef);

    if(!snapshotUser.exists()) {

      const { displayName, email } = userAuth;
      const createAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createAt,
          ...additiontals,
        })
      } catch (error) {
        console.log('Error create user ', error.message);
      }
    }
  
    return userDocRef;

}

export const createrAuthUserEmailPassowrd = async (email, password) => {

  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)
}