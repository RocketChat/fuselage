import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import React from 'react';

import '../fuselage.scss';


storiesOf('Elements|Subtitle', module)
  .addDecorator(centered)
  .add('Subtitle', () =>
    <h2 className='rcx-subtitle'>Subtitle</h2>
  );
