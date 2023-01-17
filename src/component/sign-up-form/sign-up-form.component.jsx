import { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { signUpStart } from '../../store/user/user.action';

import { SignUpContainer } from './sign-up-form.styles';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert(`password don't match`);
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use')
        alert('this email is alrady used! try another one.');
      else console.log('user creation encounterd an error.', error);
    }
  };

  const handlerChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up With your Eamil and Password</span>
      <form onSubmit={handlerSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          autoComplete="off"
          onChange={handlerChange}
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          autoComplete="off"
          onChange={handlerChange}
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          autoComplete="off"
          onChange={handlerChange}
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          name="confirmPassword"
          autoComplete="off"
          onChange={handlerChange}
          value={confirmPassword}
        />
        <Button type="submit">Sign up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
