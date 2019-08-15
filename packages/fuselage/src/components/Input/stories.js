import { storiesOf } from '@storybook/react';
import React from 'react';

import { Document, TextSection, VariationsTable } from '../../helpers/storybook';
import { Input } from './index';


const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
  + 'incididunt ut labore et dolore magna aliqua.';

storiesOf('Elements|Input', module)
  .lokiSkip('Input', () => <Document>
    <TextSection>
      <h1>Input</h1>
    </TextSection>
    <TextSection>
      <h2><code>type='text'</code></h2>
    </TextSection>
    <VariationsTable
      component={Input}
      common={{
        type: 'text',
        value: '',
        onChange: () => {},
      }}
      xAxis={{
        default: {},
        'with placeholder': { placeholder: 'Placeholder' },
        'with value': { value: loremIpsum },
        'with icon': { icon: 'at', value: loremIpsum },
      }}
      yAxis={{
        default: {},
        hover: { className: 'hover' },
        active: { className: 'active' },
        focus: { className: 'focus' },
        disabled: { disabled: true },
        error: { error: true },
        'error + hover': { error: true, className: 'hover' },
        'error + active': { error: true, className: 'active' },
        'error + focus': { error: true, className: 'focus' },
      }}
    />
    <TextSection>
      <h2><code>type='password'</code></h2>
    </TextSection>
    <VariationsTable
      component={Input}
      common={{
        type: 'password',
        value: '',
        onChange: () => {},
      }}
      xAxis={{
        default: {},
        'with placeholder': { placeholder: 'Placeholder' },
        'with value': { value: loremIpsum },
        'with icon': { icon: 'key', value: loremIpsum },
      }}
      yAxis={{
        default: {},
        hover: { className: 'hover' },
        active: { className: 'active' },
        focus: { className: 'focus' },
        disabled: { disabled: true },
        error: { error: true },
        'error + hover': { error: true, className: 'hover' },
        'error + active': { error: true, className: 'active' },
        'error + focus': { error: true, className: 'focus' },
      }}
    />
    <TextSection>
      <h2><code>type='textarea'</code></h2>
    </TextSection>
    <VariationsTable
      component={Input}
      common={{
        type: 'textarea',
        value: '',
        onChange: () => {},
      }}
      xAxis={{
        default: {},
        'with placeholder': { placeholder: 'Placeholder' },
        'with value': { value: loremIpsum },
        'with icon': { icon: 'edit', value: loremIpsum },
      }}
      yAxis={{
        default: {},
        hover: { className: 'hover' },
        active: { className: 'active' },
        focus: { className: 'focus' },
        disabled: { disabled: true },
        error: { error: true },
        'error + hover': { error: true, className: 'hover' },
        'error + active': { error: true, className: 'active' },
        'error + focus': { error: true, className: 'focus' },
      }}
    />
  </Document>);
