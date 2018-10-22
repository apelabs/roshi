import React from 'react';
import { RoshiForm } from '@roshi/ui';
import { createUserFormData } from './formData';

const CreateUserForm = ({ onSubmitHandler, onChangeHandler }) => (
  <RoshiForm
    formData={createUserFormData}
    onSubmitHandler={onSubmitHandler}
    onChangeHandler={onChangeHandler}
  />
);

export default CreateUserForm;
