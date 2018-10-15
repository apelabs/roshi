import React from 'react';
import { storiesOf } from '@storybook/react';

import RoshiLoader from './index';

storiesOf('RoshiLoader', module)
  .add('default styles', () => <RoshiLoader />)
  .add('Overwritting default styles', () => <RoshiLoader style={{ color: 'yellowgreen' }} />)
  .add('Providing more props', () => <RoshiLoader value={30} variant="determinate" />);
