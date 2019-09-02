import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { createPropsFromKnobs, Document, TextSection } from '../../helpers/storybook';
import { Backdrop } from './index';


const props = createPropsFromKnobs({
  hidden: false,
  invisible: false,
});

storiesOf('Elements|Backdrop', module)
  .lokiSkip('Backdrop', () => <Document>
    <TextSection>
      <h1>Backdrop</h1>
      <p>
        The purpose of a backdrop is to provide a background for modes like modal dialogs.
      </p>
    </TextSection>
  </Document>);

storiesOf('Elements|Backdrop', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['spec'] })
  .add('default', () => (
    <Backdrop {...props()} />
  ));
