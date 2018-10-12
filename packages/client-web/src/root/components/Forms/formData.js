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
