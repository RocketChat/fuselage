import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import React from 'react';

import '../fuselage.scss';
import { PseudoInput } from '../storybookHelpers';


storiesOf('Elements|Field', module)
  .addDecorator(centered)
  .add('Field', () =>
    <div className='rcx-field'>
      <label className='rcx-label'>
        <span className='rcx-label__text'>Label</span>
        <PseudoInput />
      </label>
      <div className='rcx-hint'>Help text</div>
    </div>
  );
