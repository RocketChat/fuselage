import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { centeredWithWidth } from '../helpers/storybook';
import { Button } from '../Button';

import { ButtonGroup } from './index';


storiesOf('Components|ButtonGroup', module)
  .addDecorator(withKnobs)
  .addDecorator(centeredWithWidth('500px'))
  .addParameters({ jest: ['ButtonGroup'] })
  .add('default', () => (
    <ButtonGroup
      wrap={boolean('wrap', false)}
      stretch={boolean('stretch', false)}
      vertical={boolean('vertical', false)}
    >
      <Button primary>Button 1</Button>
      <Button secondary>Button 2</Button>
      <Button cancel>Button 3</Button>
    </ButtonGroup>
  ))
  .add('wrap', () => (
    <ButtonGroup
      wrap={boolean('wrap', true)}
      stretch={boolean('stretch', false)}
      vertical={boolean('vertical', false)}
    >
      <Button primary>Button 1</Button>
      <Button secondary>Button 2</Button>
      <Button cancel>Button 3</Button>
    </ButtonGroup>
  ))
  .add('stretch', () => (
    <ButtonGroup
      wrap={boolean('wrap', false)}
      stretch={boolean('stretch', true)}
      vertical={boolean('vertical', false)}
    >
      <Button primary>Button 1</Button>
      <Button secondary>Button 2</Button>
      <Button cancel>Button 3</Button>
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
      <Button cancel>Button 3</Button>
    </ButtonGroup>
  ));
