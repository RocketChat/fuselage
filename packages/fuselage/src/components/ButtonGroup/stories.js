import centered from '@storybook/addon-centered/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Button } from '../Button';
import notes from './README.md';
import { ButtonGroup } from './index';


const props = ({
  wrap = false,
  stretch = false,
  vertical = false,
} = {}) => ({
  wrap: boolean('wrap', wrap),
  stretch: boolean('stretch', stretch),
  vertical: boolean('vertical', vertical),
});

storiesOf('Collections|ButtonGroup', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({
    jest: ['spec'],
    notes,
  })
  .add('default', () => (
    <ButtonGroup {...props()}>
      <Button primary>Button 1</Button>
      <Button secondary>Button 2</Button>
      <Button danger>Button 3</Button>
    </ButtonGroup>
  ))
  .add('wrap', () => (
    <ButtonGroup {...props({ wrap: true })} style={{ width: '50vw' }}>
      <Button primary>Button 1</Button>
      <Button secondary>Button 2</Button>
      <Button danger>Button 3</Button>
      <Button bland>Button 4</Button>
      <Button outline>Button 5</Button>
      <Button nude>Button 6</Button>
    </ButtonGroup>
  ))
  .add('stretch', () => (
    <ButtonGroup {...props({ stretch: true })} style={{ width: '100vw', margin: '0' }}>
      <Button primary>Button 1</Button>
      <Button secondary>Button 2</Button>
      <Button danger>Button 3</Button>
    </ButtonGroup>
  ))
  .add('vertical', () => (
    <ButtonGroup {...props({ vertical: true })}>
      <Button primary>Button 1</Button>
      <Button secondary>Button 2</Button>
      <Button danger>Button 3</Button>
    </ButtonGroup>
  ));
