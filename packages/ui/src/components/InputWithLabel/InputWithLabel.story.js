import React from 'react';

import { storiesOf } from '@storybook/react';

import InputWithLabel from './InputWithLabel';

storiesOf('InputWithLabel', module)
  .add('without type attribute', () => <InputWithLabel labeltext="hello there" />)
  .add('with type attribute', () => <InputWithLabel labeltext="hello there" type="password" />)
  .add('with extra styles for input', () => (
    <InputWithLabel labeltext="hello there" inputprops={{ border: '4px solid red' }} />
  ))
  .add('with extra styles for label', () => (
    <InputWithLabel labeltext="hello there" labelprops={{ border: '4px solid green' }} />
  ));
