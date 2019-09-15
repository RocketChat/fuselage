import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import React from 'react';

import '../fuselage.scss';


storiesOf('Elements|Button', module)
  .addDecorator(centered)
  .add('Button', () =>
    <button className='rcx-button' type='button'>
      Button
    </button>
  )
  .add('primary', () =>
    <button className='rcx-button rcx-button--primary' type='button'>
      Button
    </button>
  )
  .add('ghost', () =>
    <button className='rcx-button rcx-button--ghost' type='button'>
      Button
    </button>
  )
  .add('danger', () => <>
    <button className='rcx-button rcx-button--danger' type='button' style={{ margin: '1rem' }}>
      Button
    </button>
    <button className='rcx-button rcx-button--primary rcx-button--danger' type='button' style={{ margin: '1rem' }}>
      Button
    </button>
    <button className='rcx-button rcx-button--ghost rcx-button--danger' type='button' style={{ margin: '1rem' }}>
      Button
    </button>
  </>)
  .add('small', () =>
    <button className='rcx-button rcx-button--small' type='button'>
      Button
    </button>
  )
  .add('with icon', () =>
    <button className='rcx-button' type='button'>
      <i aria-hidden='true' className='rcx-icon rcx-icon--edit' /> Edit
    </button>
  )
  .add('as link', () =>
    <a className='rcx-button' href='https://rocket.chat' rel='noopener noreferrer' target='_blank'>
      Button
    </a>
  )
  .add('square', () =>
    <button className='rcx-button rcx-button--square' type='button'>
      <i aria-hidden='true' className='rcx-icon rcx-icon--plus' />
    </button>
  )
  .add('disabled', () =>
    <button className='rcx-button' disabled type='button'>
      Button
    </button>
  );
