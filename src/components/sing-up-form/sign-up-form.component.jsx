import React, { useState }  from 'react';
import { createrAuthUserEmailPassowrd, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

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
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handlerSubmit}>
        <label>Display Name</label>
        <input 
          type="text"
          name='displayName'
          onChange={handlerChange}
          value={displayName}
          required />

        <label>Email</label>
        <input type="email"
          name='email'
          onChange={handlerChange}
          value={email}
          required />

        <label>Passwors</label>
        <input type="password"
          name='password'
          onChange={handlerChange}
          value={password}
          required />

        <label>Confirm Password</label>
        <input type="password"
          name='confirmPassword'
          onChange={handlerChange}
          value={confirmPassword}
          required />

        <button type='submit'>Send</button>
      </form>
    </div>
  );
};

export default SignUpForm;