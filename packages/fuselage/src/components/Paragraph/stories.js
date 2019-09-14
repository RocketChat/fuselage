import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { createPropsFromKnobs } from '../../helpers/storybook';
import { Paragraph } from './index';


const props = createPropsFromKnobs({
  children: 'Paragraph',
  hidden: false,
  invisible: false,
});

storiesOf('Elements|Paragraph', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['Paragraph/spec'] })
  .add('default', () => <Paragraph {...props()} />);
