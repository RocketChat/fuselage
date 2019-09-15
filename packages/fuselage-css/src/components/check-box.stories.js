import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import '../fuselage.scss';


storiesOf('Elements|CheckBox', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('CheckBox', () =>
    <label className='rcx-check-box'>
      <input className='rcx-check-box__input' type='checkbox' />
      <i aria-hidden='true' className='rcx-check-box__fake' />
    </label>
  )
  .add('unchecked', () =>
    <label className='rcx-check-box'>
      <input checked={false} className='rcx-check-box__input' type='checkbox' onChange={() => {}} />
      <i aria-hidden='true' className='rcx-check-box__fake' />
    </label>
  )
  .add('checked', () =>
    <label className='rcx-check-box'>
      <input checked className='rcx-check-box__input' type='checkbox' onChange={() => {}} />
      <i aria-hidden='true' className='rcx-check-box__fake' />
    </label>
  )
  .add('indeterminate', () =>
    <label className='rcx-check-box'>
      <input
        className='rcx-check-box__input'
        ref={(input) => {
          if (input) {
            input.indeterminate = true;
          }
        }}
        type='checkbox'
      />
      <i aria-hidden='true' className='rcx-check-box__fake' />
    </label>
  )
  .add('disabled', () =>
    <label className='rcx-check-box'>
      <input className='rcx-check-box__input' disabled type='checkbox' />
      <i aria-hidden='true' className='rcx-check-box__fake' />
    </label>
  );
