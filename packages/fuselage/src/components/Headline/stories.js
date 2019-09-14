import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { createPropsFromKnobs } from '../../helpers/storybook';
import { Headline } from './index';


const props = createPropsFromKnobs({
  children: 'Headline',
  hidden: false,
  invisible: false,
});

storiesOf('Elements|Headline', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['Headline/spec'] })
  .add('default', () => <Headline {...props()} />);
