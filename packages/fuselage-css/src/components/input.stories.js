import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import React from 'react';

import '../fuselage.scss';


storiesOf('Elements|Input', module)
  .addDecorator(centered)
  .add('Input', () =>
    <input className='rcx-input' type='text' />
  )
  .add('with placeholder', () =>
    <input className='rcx-input' placeholder='Placeholder' type='text' />
  )
  .add('with value', () =>
    <input className='rcx-input' defaultValue='Value' type='text' />
  )
  .add('disabled', () =>
    <input className='rcx-input' disabled type='text' />
  )
  .add('invalid', () =>
    <input className='rcx-input rcx-input--invalid' type='text' />
  )
  .add('with icon', () =>
    <span className='rcx-input__wrapper'>
      <input className='rcx-input' type='text' />
      <i aria-hidden='true' className='rcx-icon rcx-icon--mail' />
    </span>
  )
  .add('of textarea type', () =>
    <textarea className='rcx-input' />
  )
  .add('of select type', () => React.createElement(function() {
    const [value, setValue] = React.useState('');

    return <span className='rcx-input__wrapper'>
      <select
        className={['rcx-input', !value && 'rcx-input--has-placeholder'].filter(Boolean).join(' ')}
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      >
        <option className='rcx-input__placeholder' value=''>Placeholder</option>
        <option value='A'>Item A</option>
        <option value='B'>Item B</option>
        <option value='C'>Item C</option>
      </select>
      <i aria-hidden='true' className='rcx-icon rcx-icon--arrow-down' />
    </span>;
  }));
