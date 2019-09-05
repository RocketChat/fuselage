import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { createPropsFromKnobs, Document, ShowCaseSection, TextSection } from '../../helpers/storybook';
import { Field } from '../Field';
import { Input } from '../Input';
import { FieldGroup } from './index';


const ChildComponent = () => <div
  style={{
    backgroundImage: `repeating-linear-gradient(
      45deg,
      lightgray,
      lightgray 10px,
      white 10px,
      white 20px
    )`,
    border: '1px solid lightgray',
    width: '100%',
    minWidth: '6rem',
    height: '2rem',
  }}
/>;

storiesOf('Collections|FieldGroup', module)
  .lokiSkip('FieldGroup', () => <Document>
    <TextSection>
      <h1>FieldGroup</h1>
      <p>A container for grouping fields that semantically share a common data context.</p>
    </TextSection>
    <ShowCaseSection>
      <FieldGroup>
        <Field label='Email'>
          <Input type='email' />
        </Field>
        <Field label='Password'>
          <Input type='password' />
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
    <ChildComponent />
  </Field>
);

storiesOf('Collections|FieldGroup', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['spec'] })
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
