import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import React from 'react';

import '../fuselage.scss';


storiesOf('Elements|Paragraph', module)
  .addDecorator(centered)
  .add('Paragraph', () =>
    <p className='rcx-paragraph'>Paragraph</p>
  );
