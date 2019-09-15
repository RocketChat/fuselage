import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import React from 'react';

import '../fuselage.scss';


const Buttons = ({ count }) => new Array(count).fill(undefined).map((_, i) =>
  <button className='rcx-button' key={i} type='button'>Button {i + 1}</button>
);

storiesOf('Collections|ButtonGroup', module)
  .addDecorator((storyFn) =>
    <div
      style={{
        boxSizing: 'border-box',
        width: '100vw',
      }}
    >
      {storyFn()}
    </div>
  )
  .addDecorator(centered)
  .add('default', () =>
    <div className='rcx-button-group' role='group'>
      <Buttons count={3} />
    </div>
  )
  .add('wrap', () =>
    <div className='rcx-button-group rcx-button-group--wrap' role='group'>
      <Buttons count={20} />
    </div>
  )
  .add('stretch', () =>
    <div className='rcx-button-group rcx-button-group--stretch' role='group'>
      <Buttons count={3} />
    </div>
  )
  .add('vertical', () =>
    <div className='rcx-button-group rcx-button-group--vertical' role='group'>
      <Buttons count={3} />
    </div>
  )
  .add('vertical with stretch', () =>
    <div className='rcx-button-group rcx-button-group--stretch rcx-button-group--vertical' role='group'>
      <Buttons count={3} />
    </div>
  );
