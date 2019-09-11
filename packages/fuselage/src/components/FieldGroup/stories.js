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
import { Field } from '../Field';
import { Label } from '../Label';
import { FieldGroup } from './index';


storiesOf('Collections|FieldGroup', module)
  .lokiSkip('FieldGroup', () => <Document>
    <TextSection>
      <h1>FieldGroup</h1>
      <p>A container for grouping fields that semantically share a common data context.</p>
    </TextSection>
    <ShowCaseSection>
      <FieldGroup>
        <Field>
          <Label text='Label #1'>
            <PseudoInput />
          </Label>
        </Field>
        <Field>
          <Label text='Label #2'>
            <PseudoInput />
          </Label>
        </Field>
      </FieldGroup>
    </ShowCaseSection>
  </Document>);

const props = createPropsFromKnobs({
  hidden: false,
  invisible: false,
});

const Fields = ({ count }) => new Array(count).fill(undefined).map((_, i) =>
  <Field key={i}>
    <Label>
      <PseudoInput />
    </Label>
  </Field>
);

storiesOf('Collections|FieldGroup', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['FieldGroup/spec'] })
  .add('default', () =>
    <FieldGroup {...props()}>
      <Fields count={3} />
    </FieldGroup>
  )
  .add('hidden', () =>
    <FieldGroup {...props({ hidden: true })}>
      <Fields count={3} />
    </FieldGroup>
  )
  .add('invisible', () =>
    <FieldGroup {...props({ invisible: true })}>
      <Fields count={3} />
    </FieldGroup>
  );
