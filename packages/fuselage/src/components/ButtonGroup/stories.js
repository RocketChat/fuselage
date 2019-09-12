import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { createPropsFromKnobs, Document, ShowCaseSection, TextSection } from '../../helpers/storybook';
import { Button } from '../Button';
import { ButtonGroup } from './index';


storiesOf('Collections|ButtonGroup', module)
  .lokiSkip('ButtonGroup', () => <Document>
    <TextSection>
      <h1>ButtonGroup</h1>
      <p>
      A container for grouping buttons that semantically share a common action context.
      </p>
    </TextSection>
    <ShowCaseSection>
      <ButtonGroup>
        <Button primary>Yes</Button>
        <Button danger>No</Button>
        <Button>Maybe</Button>
      </ButtonGroup>
    </ShowCaseSection>
  </Document>);

const props = createPropsFromKnobs({
  hidden: false,
  invisible: false,
  stretch: false,
  vertical: false,
  wrap: false,
  align: [null, {
    start: 'start',
    end: 'end',
  }],
});

const Buttons = ({ count }) => new Array(count).fill(undefined).map((_, i) =>
  <Button key={i}>Button {i + 1}</Button>
);

storiesOf('Collections|ButtonGroup', module)
  .addDecorator(withKnobs)
  .addDecorator((storyFn) =>
    <div
      style={{
        // border: '1px dashed lightgray',
        boxSizing: 'border-box',
        width: '100vw',
      }}
    >
      {storyFn()}
    </div>
  )
  .addDecorator(centered)
  .addParameters({ jest: ['ButtonGroup/spec'] })
  .add('default', () =>
    <ButtonGroup {...props()}>
      <Buttons count={3} />
    </ButtonGroup>
  )
  .add('wrap', () =>
    <ButtonGroup {...props({ wrap: true })}>
      <Buttons count={20} />
    </ButtonGroup>
  )
  .add('stretch', () =>
    <ButtonGroup {...props({ stretch: true })}>
      <Buttons count={3} />
    </ButtonGroup>
  )
  .add('vertical', () =>
    <ButtonGroup {...props({ vertical: true })}>
      <Buttons count={3} />
    </ButtonGroup>
  )
  .add('vertical with stretch', () =>
    <ButtonGroup {...props({ stretch: true, vertical: true })}>
      <Buttons count={3} />
    </ButtonGroup>
  )
  .add('hidden', () =>
    <ButtonGroup {...props({ hidden: true })}>
      <Buttons count={3} />
    </ButtonGroup>
  )
  .add('invisible', () =>
    <ButtonGroup {...props({ invisible: true })}>
      <Buttons count={3} />
    </ButtonGroup>
  );
