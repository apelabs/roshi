import React from 'react';
import { storiesOf } from '@storybook/react';

import RoshiBaseModal from './index';
import RoshiInfoModal from './RoshiInfoModal';
import RoshiErrorModal from './RoshiErrorModal';
import RoshiSuccessModal from './RoshiSuccessModal';
import RoshiWarningModal from './RoshiWarningModal';

storiesOf('RoshiBaseModal', module)
  .add('default component', () => <RoshiBaseModal />)
  .add('Error variant', () => <RoshiErrorModal message="Error variant" />)
  .add('Warning variant', () => <RoshiWarningModal message="Warning variant" />)
  .add('Info variant', () => <RoshiInfoModal message="Info variant" />)
  .add('Success variant', () => <RoshiSuccessModal message="Success variant" />);
