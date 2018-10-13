export const authFormData = {
  text: {
    header: 'Login',
    button: 'Login',
    form: 'Fill the form to login',
  },
  inputsData: [
    {
      type: 'email',
      id: 'auth-email',
      name: 'auth-email',
      label: 'Email',
      placeholder: 'Type your email',
      variant: 'outlined',
      required: true,
    },
    {
      type: 'password',
      id: 'auth-password',
      name: 'auth-password',
      label: 'Password',
      placeholder: 'Type your password',
      variant: 'outlined',
      required: true,
    },
  ],
};

export const createUserFormData = {
  text: {
    header: 'Create new User',
    button: 'Create new User',
    form: 'Fill the form to create a new user',
  },
  inputsData: [
    {
      type: 'email',
      id: 'new-email',
      name: 'new-email',
      label: 'Email',
      placeholder: 'Type your email',
      variant: 'outlined',
      required: true,
    },
    {
      type: 'password',
      id: 'new-password',
      name: 'new-password',
      label: 'Password',
      placeholder: 'Type your password',
      variant: 'outlined',
      required: true,
    },
    {
      type: 'text',
      id: 'new-firstName',
      name: 'new-firstName',
      label: 'firstName',
      placeholder: 'Type your firstName',
      variant: 'outlined',
    },
    {
      type: 'text',
      id: 'new-lastName',
      name: 'new-lastName',
      label: 'lastName',
      placeholder: 'Type your lastName',
      variant: 'outlined',
    },
    {
      type: 'text',
      id: 'new-avatarUrl',
      name: 'new-avatarUrl',
      label: 'avatarUrl',
      placeholder: 'Type your avatarUrl',
      variant: 'outlined',
    },
  ],
};

export const formInputs = {
  ...authFormData.inputsData,
  ...createUserFormData.inputsData,
};

export const onChangeHandler = event => {
  const { name, value } = event.target;

  formInputs[name] = value;
};
