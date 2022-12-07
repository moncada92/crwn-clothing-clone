import React, { useState }  from 'react';
import { singInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserEmailPassowrd } from '../../utils/firebase/firebase.utils';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

import './sign-in-form.style.scss';

const defaultFormFields = {
  email: '',
  password: '',

}

const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const handlerChange = (event) => {
    
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value})

  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInGoogle = async () => {

    console.log('google');
    const {user} = await singInWithGooglePopup()
    await createUserDocumentFromAuth(user);

  }

  const handlerSubmit = async (e) =>  {
    
    e.preventDefault();
    
    
    try {
      const response = await signInAuthUserEmailPassowrd(email, password);
      console.log(response);
      resetFormFields();

    } catch (error) {

      switch(error.code) {

        case 'auth/wrong-password':
          alert('password incorrect for email');
          break;
        
        case 'auth/user-not-found':
          alert('User not found');
          break;
        
        default:
          console.log(error)

      }
    }


  }

  return (
    <div className='sign-in-container'>
    <h2>Already have an account?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handlerSubmit}>


        <FormInput
          labelText='Email'
          type="email"
          name='email'
          onChange={handlerChange}
          value={email}
          required />

        <FormInput
          labelText='Password'
          type="password"
          name='password'
          onChange={handlerChange}
          value={password}
          required />

        <div className="buttons-cont">
          <Button type='submit'>Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInGoogle} >Sign In With Google</Button>
        </div>    

      </form>
    </div>
  );
};

export default SignInForm;