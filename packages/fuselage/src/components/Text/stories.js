import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { createPropsFromKnobs } from '../../helpers/storybook';
import { Text } from './index';


const props = createPropsFromKnobs({
  children: 'Lorem ipsum dolor sit amet',
  colorVariant: ['default', Text.colorVariants],
  variant: ['p1', Text.variants],
});

storiesOf('Elements|Text', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['Text/spec'] })
  .add('default', () => <Text {...props()} />);

Text.colorVariants.forEach((colorVariant) => {
  storiesOf('Elements|Text', module)
    .addDecorator(withKnobs)
    .addDecorator(centered)
    .addParameters({ jest: ['Text/spec'] })
    .add(`${ colorVariant } color variant`, () => <Text {...props({ colorVariant })} />);
});

Text.variants.forEach((variant) => {
  storiesOf('Elements|Text', module)
    .addDecorator(withKnobs)
    .addDecorator(centered)
    .addParameters({ jest: ['Text/spec'] })
    .add(`${ variant } variant`, () => <Text {...props({ variant })} />);
});
