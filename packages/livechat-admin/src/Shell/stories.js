import { withKnobs, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Shell } from './index';


const props = () => ({
  title: text('title', 'Page title')
});

storiesOf('Components|Shell', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Shell {...props()} />
  ));
