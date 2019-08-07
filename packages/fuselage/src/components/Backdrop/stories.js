import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { createPropsFromKnobs } from '../../helpers/storybook';
import { Backdrop } from './index';


const props = createPropsFromKnobs({
  hidden: false,
  invisible: false,
});

storiesOf('Elements|Backdrop', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['spec'] })
  .add('default', () => (
    <Backdrop {...props()} />
  ));
