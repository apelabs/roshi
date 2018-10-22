import React from 'react';
import { RoshiForm } from '@roshi/ui';
import { authFormData } from './formData';

const AuthenticateUserForm = ({ onSubmitHandler, onChangeHandler }) => (
  <RoshiForm
    formData={authFormData}
    onSubmitHandler={onSubmitHandler}
    onChangeHandler={onChangeHandler}
  />
);

export default AuthenticateUserForm;
