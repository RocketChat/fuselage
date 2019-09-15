import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import React from 'react';

import '../fuselage.scss';


storiesOf('Elements|ToggleSwitch', module)
  .addDecorator(centered)
  .add('ToggleSwitch', () =>
    <label className='rcx-toggle-switch'>
      <input className='rcx-toggle-switch__input' type='checkbox' />
      <i aria-hidden='true' className='rcx-toggle-switch__fake' />
    </label>
  )
  .add('unchecked', () =>
    <label className='rcx-toggle-switch'>
      <input checked={false} className='rcx-toggle-switch__input' type='checkbox' onChange={() => {}} />
      <i aria-hidden='true' className='rcx-toggle-switch__fake' />
    </label>
  )
  .add('checked', () =>
    <label className='rcx-toggle-switch'>
      <input checked className='rcx-toggle-switch__input' type='checkbox' onChange={() => {}} />
      <i aria-hidden='true' className='rcx-toggle-switch__fake' />
    </label>
  )
  .add('disabled', () =>
    <label className='rcx-toggle-switch'>
      <input className='rcx-toggle-switch__input' disabled type='checkbox' />
      <i aria-hidden='true' className='rcx-toggle-switch__fake' />
    </label>
  );
