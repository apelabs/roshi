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

const defaultUserFields = [
  {
    type: 'email',
    id: 'email',
    name: 'email',
    label: 'Email',
    placeholder: 'Type your email',
    variant: 'outlined',
    required: true,
  },
  {
    type: 'password',
    id: 'password',
    name: 'password',
    label: 'Password',
    placeholder: 'Type your password',
    variant: 'outlined',
    required: true,
  },
  {
    type: 'text',
    id: 'firstName',
    name: 'firstName',
    label: 'First Name',
    placeholder: 'Type your firstName',
    variant: 'outlined',
  },
  {
    type: 'text',
    id: 'lastName',
    name: 'lastName',
    label: 'Last Name',
    placeholder: 'Type your lastName',
    variant: 'outlined',
  },
  {
    type: 'text',
    id: 'avatarUrl',
    name: 'avatarUrl',
    label: 'avatarUrl',
    placeholder: 'Type your avatarUrl',
    variant: 'outlined',
  },
];

export const createUserFormData = {
  text: {
    header: 'Create new User',
    button: 'Create new User',
    form: 'Fill the form to create a new user',
  },
  inputsData: [...defaultUserFields],
};

export const updateUserFormData = {
  text: {
    header: 'Update User details',
    button: 'Update User details',
    form: 'Fill the form to Update your details',
  },
  inputsData: [...defaultUserFields],
};

export const formInputs = {
  ...authFormData.inputsData,
  ...defaultUserFields,
};

export const onChangeHandler = event => {
  const { name, value } = event.target;

  formInputs[name] = value;
};
