import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import React from 'react';

import '../fuselage.scss';


storiesOf('Elements|RadioButton', module)
  .addDecorator(centered)
  .add('RadioButton', () =>
    <label className='rcx-radio-button'>
      <input className='rcx-radio-button__input' type='radio' />
      <i aria-hidden='true' className='rcx-radio-button__fake' />
    </label>
  )
  .add('unchecked', () =>
    <label className='rcx-radio-button'>
      <input checked={false} className='rcx-radio-button__input' type='radio' onChange={() => {}} />
      <i aria-hidden='true' className='rcx-radio-button__fake' />
    </label>
  )
  .add('checked', () =>
    <label className='rcx-radio-button'>
      <input checked className='rcx-radio-button__input' type='radio' onChange={() => {}} />
      <i aria-hidden='true' className='rcx-radio-button__fake' />
    </label>
  )
  .add('disabled', () =>
    <label className='rcx-radio-button'>
      <input className='rcx-radio-button__input' disabled type='radio' />
      <i aria-hidden='true' className='rcx-radio-button__fake' />
    </label>
  );
