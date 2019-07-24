import centered from '@storybook/addon-centered/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { jsxDecorator } from 'storybook-addon-jsx';

import { Document, TextSection } from '../../helpers/storybook';
import { Button } from '../Button';
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
  .lokiSkip('ButtonGroup', () => <Document>
    <TextSection>
      <h1>ButtonGroup</h1>
      <p>
      A container for grouping buttons that semantically share a common action context.
      </p>
    </TextSection>
  </Document>);

storiesOf('Collections|ButtonGroup', module)
  .addDecorator(jsxDecorator)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['spec'] })
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
