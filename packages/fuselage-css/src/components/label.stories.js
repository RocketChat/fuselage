import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import React from 'react';

import '../fuselage.scss';
import { PseudoInput } from '../storybookHelpers';


storiesOf('Elements|Label', module)
  .addDecorator(centered)
  .add('Label', () =>
    <label className='rcx-label'>
      <div className='rcx-label__wrapper'>
        <span className='rcx-label__text'>Label</span>
      </div>
    </label>
  )
  .add('required', () =>
    <label className='rcx-label rcx-label--required'>
      <div className='rcx-label__wrapper'>
        <span className='rcx-label__text'>Label</span>
      </div>
    </label>
  )
  .add('with error', () =>
    <label className='rcx-label'>
      <div className='rcx-label__wrapper'>
        <span className='rcx-label__text'>Label</span>
        <span className='rcx-label__error'>Error</span>
      </div>
    </label>
  )
  .add('with children', () =>
    <label className='rcx-label'>
      <div className='rcx-label__wrapper'>
        <span className='rcx-label__text'>Label</span>
      </div>
      <PseudoInput />
    </label>
  )
  .add('with children, top position', () =>
    <label className='rcx-label rcx-label--position-top'>
      <div className='rcx-label__wrapper'>
        <span className='rcx-label__text'>Label</span>
      </div>
      <PseudoInput />
    </label>
  )
  .add('with children, start position', () =>
    <label className='rcx-label rcx-label--position-start'>
      <div className='rcx-label__wrapper'>
        <span className='rcx-label__text'>Label</span>
      </div>
      <PseudoInput />
    </label>
  )
  .add('with children, end position', () =>
    <label className='rcx-label rcx-label--position-end'>
      <div className='rcx-label__wrapper'>
        <span className='rcx-label__text'>Label</span>
      </div>
      <PseudoInput />
    </label>
  )
  .add('nested', () =>
    <label className='rcx-label'>
      <div className='rcx-label__wrapper'>
        <span className='rcx-label__text'>Outer label</span>
      </div>
      <span className='rcx-label'>
        <div className='rcx-label__wrapper'>
          <span className='rcx-label__text'>Label</span>
        </div>
      </span>
    </label>
  );
