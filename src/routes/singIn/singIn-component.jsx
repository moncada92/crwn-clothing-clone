import React from 'react';
import { singInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const SingIn = () => {

  const signInGoogle = async () => {
    const {user} = await singInWithGooglePopup()

    const userDocRef = await createUserDocumentFromAuth(user);

  }

  return (
    <div>
      <h2>Sing In</h2>
      <div>
        <button onClick={signInGoogle}>Sign In Google Popup</button>
      </div>
    </div>
  );
};

export default SingIn;