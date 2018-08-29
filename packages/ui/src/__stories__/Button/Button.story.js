import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from '../../components/Button';

const c = () => (
  <span role="img" aria-label="so cool">
    😀 😎 👍 💯
  </span>
);

storiesOf('Button', module).add('with text', () => (
  <Button onClick={action('clicked')} children="xoxo" />
));
