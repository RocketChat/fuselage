import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import React from 'react';

import '../fuselage.scss';


storiesOf('Elements|Headline', module)
  .addDecorator(centered)
  .add('Headline', () =>
    <h1 className='rcx-headline'>Headline</h1>
  );
