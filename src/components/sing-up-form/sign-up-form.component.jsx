import React, { useState }  from 'react'
import { createrAuthUserEmailPassowrd, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

import './sign-up-form.style.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const handlerChange = (event) => {
    
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value})

    console.log(formFields);

  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handlerSubmit = async (e) =>  {
    
    e.preventDefault();
    resetFormFields();
    
    if(password !== confirmPassword) {
      alert('The password does not Match !!');
      return
    }

    try {
      
      const { user } = await createrAuthUserEmailPassowrd(email, password)

      await createUserDocumentFromAuth(user, { displayName });

    } catch (error) {
      if(error.code === 'auth/email-already-in-use') {
        alert('This email is used ');
      } else {
        console.log('error for create user', error);
      }
    }


  }
  return (
    <div className='sign-up-container'>
    <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handlerSubmit}>

        <FormInput
          labelText='Display Name'
          type="text"
          name='displayName'
          onChange={handlerChange}
          value={displayName}
          required
        />
        
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

        <FormInput
          labelText='Confirm Password'
          type="password"
          name='confirmPassword'
          onChange={handlerChange}
          value={confirmPassword}
          required />

        <Button type='submit'>Sign up</Button> 
      </form>
    </div>
  );
};

export default SignUpForm;