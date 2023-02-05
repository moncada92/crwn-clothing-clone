import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
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
console.log('__initFirebase___', firebaseApp);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()

export const singInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd, field) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  objectsToAdd.forEach((object) => {
    console.log(object.title.toLowerCase())
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object);
  })

  await batch.commit();
  console.log('Done!!');
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  const categoryMap = querySnapshot.docs.reduce((acc, snapshot) => {
    const {title, items} = snapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})


  return categoryMap;
}

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

export const signInAuthUserEmailPassowrd = async (email, password) => {

if (!email || !password) return;

return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
}