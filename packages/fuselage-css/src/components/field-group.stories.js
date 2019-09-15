import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import React from 'react';

import '../fuselage.scss';
import { PseudoInput } from '../storybookHelpers';


const Fields = ({ count }) => new Array(count).fill(undefined).map((_, i) =>
  <div className='rcx-field' key={i}>
    <label className='rcx-label'>
      <PseudoInput />
    </label>
    <div className='rcx-hint'>Help text</div>
  </div>
);

storiesOf('Collections|FieldGroup', module)
  .addDecorator(centered)
  .add('FieldGroup', () =>
    <div className='rcx-field-group' role='group'>
      <Fields count={3} />
    </div>
  );
