import React from 'react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { Button } from '../Button';

import { ButtonGroup } from './index';


storiesOf('Components|ButtonGroup', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['ButtonGroup'] })
  .add('default', () => (
    <ButtonGroup
      wrap={boolean('wrap', false)}
      stretch={boolean('stretch', false)}
      vertical={boolean('vertical', false)}
    >
      <Button primary>Button 1</Button>
      <Button secondary>Button 2</Button>
      <Button danger>Button 3</Button>
    </ButtonGroup>
  ))
  .add('wrap', () => (
    <ButtonGroup
      wrap={boolean('wrap', true)}
      stretch={boolean('stretch', false)}
      vertical={boolean('vertical', false)}
      style={{ width: '50vw' }}
    >
      <Button primary>Button 1</Button>
      <Button secondary>Button 2</Button>
      <Button danger>Button 3</Button>
      <Button bland>Button 4</Button>
      <Button outline>Button 5</Button>
      <Button nude>Button 6</Button>
    </ButtonGroup>
  ))
  .add('stretch', () => (
    <ButtonGroup
      wrap={boolean('wrap', false)}
      stretch={boolean('stretch', true)}
      vertical={boolean('vertical', false)}
      style={{ width: '100vw', margin: '0' }}
    >
      <Button primary>Button 1</Button>
      <Button secondary>Button 2</Button>
      <Button danger>Button 3</Button>
    </ButtonGroup>
  ))
  .add('vertical', () => (
    <ButtonGroup
      wrap={boolean('wrap', false)}
      stretch={boolean('stretch', false)}
      vertical={boolean('vertical', true)}
    >
      <Button primary>Button 1</Button>
      <Button secondary>Button 2</Button>
      <Button danger>Button 3</Button>
    </ButtonGroup>
  ));
