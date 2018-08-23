import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Image from '../../components/Image';

storiesOf('Image', module).add('with src', () => <Image src="http://any" />);
