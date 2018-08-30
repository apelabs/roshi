import React from 'react';

import { storiesOf } from '@storybook/react';

import Image from '../../components/Image';

storiesOf('Image', module)
  .add('without src attribute', () => <Image />)
  .add('with width', () => <Image width={200} />)
  .add('with withshadow', () => <Image withshadow />)
  .add('with withshadow withradius', () => <Image withshadow withradius="50%" />)
  .add('with extra styles', () => <Image style={{ transform: 'rotate(45deg)' }} />);
