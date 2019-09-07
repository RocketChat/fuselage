import centered from '@storybook/addon-centered/react';
import { withKnobs, object } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { createPropsFromKnobs } from '../../helpers/storybook';
import { Box } from './index';


const props = createPropsFromKnobs({
  as: 'div',
  hidden: false,
  invisible: false,
});

const divProps = () => object('props', {
  children: 'Box context as text',
});

const aProps = () => object('props', {
  children: 'Box as link',
  href: 'https://rocket.chat',
  target: '_blank',
  rel: 'noopener noreferrer',
});

storiesOf('Elements|Box', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['Box/spec'] })
  .add('default', () => <Box {...props()} {...divProps()} />)
  .add('as link', () => <Box {...props({ as: 'a' })} {...aProps()} />)
  .add('hidden', () => <Box {...props({ hidden: true })} {...divProps()} />)
  .add('invisible', () => <Box {...props({ invisible: true })} {...divProps()} />);
