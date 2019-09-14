import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { createPropsFromKnobs } from '../../helpers/storybook';
import { Subtitle } from './index';


const props = createPropsFromKnobs({
  children: 'Subtitle',
  hidden: false,
  invisible: false,
});

storiesOf('Elements|Subtitle', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['Subtitle/spec'] })
  .add('default', () => <Subtitle {...props()} />);
