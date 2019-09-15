import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import React from 'react';

import '../fuselage.scss';


storiesOf('Elements|Hint', module)
  .addDecorator(centered)
  .add('Hint', () =>
    <div className='rcx-hint'>
      Help text
    </div>
  );
