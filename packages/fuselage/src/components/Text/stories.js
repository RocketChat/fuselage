import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { createPropsFromKnobs } from '../../helpers/storybook';
import { Text } from './index';


const props = createPropsFromKnobs({
  children: 'Lorem ipsum dolor sit amet',
  variant: ['p1', [
    'h1',
    's1',
    's2',
    'p1',
    'p2',
    'c1',
    'c2',
    'micro',
  ]],
});

storiesOf('Elements|Text', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['Text/spec'] })
  .add('default', () => <Text {...props()} />)
  .add('h1 variant', () => <Text {...props({ variant: 'h1' })} />)
  .add('s1 variant', () => <Text {...props({ variant: 's1' })} />)
  .add('s2 variant', () => <Text {...props({ variant: 's2' })} />)
  .add('p1 variant', () => <Text {...props({ variant: 'p1' })} />)
  .add('p2 variant', () => <Text {...props({ variant: 'p2' })} />)
  .add('c1 variant', () => <Text {...props({ variant: 'c1' })} />)
  .add('c2 variant', () => <Text {...props({ variant: 'c2' })} />)
  .add('micro variant', () => <Text {...props({ variant: 'micro' })} />);
