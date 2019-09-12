import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import {
  createPropsFromKnobs,
  Document,
  PseudoInput,
  ShowCaseSection,
  TextSection,
} from '../../helpers/storybook';
import { Hint } from '../Hint';
import { Label } from '../Label';
import { Field } from './index';


storiesOf('Elements|Field', module)
  .lokiSkip('Field', () => <Document>
    <TextSection>
      <h1>Field</h1>
    </TextSection>
    <ShowCaseSection>
      <Field helpText='Help text' style={{ width: '100%' }}>
        <Label text='Label'>
          <PseudoInput />
        </Label>
        <Hint>Help text</Hint>
      </Field>
    </ShowCaseSection>
  </Document>);

const props = createPropsFromKnobs({
  children: <>
    <Label text='Label'>
      <PseudoInput />
    </Label>
    <Hint>Help text</Hint>
  </>,
  hidden: false,
  invisible: false,
});

storiesOf('Elements|Field', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['Field/spec'] })
  .add('default', () => <Field {...props()} />)
  .add('hidden', () => <Field {...props({ hidden: true })} />)
  .add('invisible', () => <Field {...props({ invisible: true })} />);
