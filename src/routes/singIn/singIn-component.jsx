import React from 'react';
import SignUpForm from '../../components/sing-up-form/sign-up-form.component';
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

      <SignUpForm/>

    </div>
  );
};

export default SingIn;