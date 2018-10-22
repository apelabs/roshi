import React from 'react';
import { RoshiForm } from '@roshi/ui';
import { updateUserFormData } from './formData';

const UpdateUserForm = ({ onSubmitHandler, onChangeHandler, user }) => {
  const copyInputsData = [...updateUserFormData.inputsData].map(input => {
    input.defaultValue = user[input.name];

    return input;
  });

  updateUserFormData.inputsData = copyInputsData;

  return (
    <RoshiForm
      formData={updateUserFormData}
      onSubmitHandler={onSubmitHandler}
      onChangeHandler={onChangeHandler}
    />
  );
};

export default UpdateUserForm;
