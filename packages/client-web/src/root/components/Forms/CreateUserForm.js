import React, { Fragment } from 'react';
import RoshiForm from './RoshiForm';
import { createUserFormData } from './formData';

const CreateUserForm = ({ onSubmitHandler, onChangeHandler }) => (
  <RoshiForm
    formData={createUserFormData}
    onSubmitHandler={onSubmitHandler}
    onChangeHandler={onChangeHandler}
  />
);

export default CreateUserForm;
