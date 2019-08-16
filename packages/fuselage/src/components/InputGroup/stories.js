import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { jsxDecorator } from 'storybook-addon-jsx';

import { Document, TextSection, ShowCaseSection, createPropsFromKnobs } from '../../helpers/storybook';
import { InputGroup } from './index';
import { Input } from '../Input';


storiesOf('Collections|InputGroup', module)
  .lokiSkip('InputGroup', () => <Document>
    <TextSection>
      <h1>InputGroup</h1>
      <p>A container for grouping inputs that semantically share a common data context.</p>
    </TextSection>
    <ShowCaseSection>
      <InputGroup>
        <Input
          type='email'
          label='Email'
        />
        <Input
          type='password'
          label='Password'
        />
      </InputGroup>
    </ShowCaseSection>
  </Document>);

const props = createPropsFromKnobs({
  hidden: false,
  invisible: false,
});

const Inputs = ({ count }) => new Array(count).fill(undefined).map((_, i) =>
  <Input key={i} placeholder={String(i + 1)} />
);

storiesOf('Collections|InputGroup', module)
  .addDecorator(jsxDecorator)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['spec'] })
  .add('default', () =>
    <InputGroup {...props()}>
      <Inputs count={3} />
    </InputGroup>
  )
  .add('hidden', () =>
    <InputGroup {...props({ hidden: true })}>
      <Inputs count={3} />
    </InputGroup>
  )
  .add('invisible', () =>
    <InputGroup {...props({ invisible: true })}>
      <Inputs count={3} />
    </InputGroup>
  );
