import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { jsxDecorator } from 'storybook-addon-jsx';

import { Document, TextSection, VariationsTable, createPropsFromKnobs, handleEvent } from '../../helpers/storybook';
import { Input } from './index';


const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
  + 'incididunt ut labore et dolore magna aliqua.';

storiesOf('Elements|Input', module)
  .lokiSkip('Input', () => <Document>
    <TextSection>
      <h1>Input</h1>
      <p>The purpose of the <code>Input</code> component is to allow user input.</p>
    </TextSection>
    <TextSection>
      <h2>Input types</h2>
      <p>The `type` property defines how and whick kind of user input will be collected on <code>Input</code>.</p>
    </TextSection>
    <TextSection>
      <h3><code>type='text'</code></h3>
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
        error: { error: 'Error' },
        'error + hover': { error: 'Error', className: 'hover' },
        'error + active': { error: 'Error', className: 'active' },
        'error + focus': { error: 'Error', className: 'focus' },
      }}
    />
    <TextSection>
      <h3><code>type='password'</code></h3>
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
        error: { error: 'Error' },
        'error + hover': { error: 'Error', className: 'hover' },
        'error + active': { error: 'Error', className: 'active' },
        'error + focus': { error: 'Error', className: 'focus' },
      }}
    />
    <TextSection>
      <h3><code>type='textarea'</code></h3>
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
        error: { error: 'Error' },
        'error + hover': { error: 'Error', className: 'hover' },
        'error + active': { error: 'Error', className: 'active' },
        'error + focus': { error: 'Error', className: 'focus' },
      }}
    />
    <TextSection>
      <h3><code>type='select'</code></h3>
    </TextSection>
    <VariationsTable
      component={Input}
      common={{
        type: 'select',
        children: <>
          <option value='A'>Item A</option>
          <option value='B'>Item B</option>
          <option value='C'>Item C</option>
        </>,
        value: '',
        onChange: () => {},
      }}
      xAxis={{
        default: {},
        'with placeholder': { placeholder: 'Placeholder' },
        'with value': { value: 'B' },
      }}
      yAxis={{
        default: {},
        hover: { className: 'hover' },
        active: { className: 'active' },
        focus: { className: 'focus' },
        disabled: { disabled: true },
        error: { error: 'Error' },
        'error + hover': { error: 'Error', className: 'hover' },
        'error + active': { error: 'Error', className: 'active' },
        'error + focus': { error: 'Error', className: 'focus' },
      }}
    />
    <TextSection>
      <h2>Add-ons</h2>
      <p>The <code>Input</code> component can be equipped with form-related elements, like label and help text.</p>
    </TextSection>
    <VariationsTable
      component={Input}
      common={{
        type: 'text',
        value: '',
        onChange: () => {},
      }}
      xAxis={{
        'with label': { label: 'Label' },
        required: { label: 'Label', required: true },
        'with help': { help: 'Help text' },
      }}
      yAxis={{
        default: {},
        hover: { className: 'hover' },
        active: { className: 'active' },
        focus: { className: 'focus' },
        disabled: { disabled: true },
        error: { error: 'Error' },
        'error + hover': { error: 'Error', className: 'hover' },
        'error + active': { error: 'Error', className: 'active' },
        'error + focus': { error: 'Error', className: 'focus' },
      }}
    />
  </Document>);

const types = ['text', 'password', 'url', 'search', 'email', 'tel', 'url', 'textarea', 'select'];
const props = createPropsFromKnobs({
  disabled: false,
  error: '',
  help: '',
  hidden: false,
  icon: '',
  invisible: false,
  label: '',
  placeholder: '',
  required: false,
  type: ['text', types],
  value: '',
  onChange: handleEvent('change'),
});

storiesOf('Elements|Input', module)
  .addDecorator(jsxDecorator)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['spec'] })
  .add('default', () => <Input {...props()} />)
  .add('with placeholder', () => <Input {...props({ placeholder: 'Placeholder' })} />)
  .add('with value', () => <Input {...props({ value: 'Value' })} />)
  .add('disabled', () => <Input {...props({ disabled: true })} />)
  .add('invisible', () => <Input {...props({ invisible: true })} />)
  .add('hidden', () => <Input {...props({ hidden: true })} />)
  .add('with label', () => <Input {...props({ label: 'Label' })} />)
  .add('required', () => <Input {...props({ label: 'Label', required: true })} />)
  .add('with error', () => <Input {...props({ error: 'Error' })} />)
  .add('with label and error', () => <Input {...props({ label: 'Label', error: 'Error' })} />)
  .add('with icon', () => <Input {...props({ icon: 'mail' })} />)
  .add('with icon', () => <Input {...props({ icon: 'mail' })} />)
  .add('of textarea type', () => <Input {...props({ type: ['textarea', types] })} />)
  .add('of select type', () => <Input {...props({
    type: ['select', types],
    children: <>
      <option value='A'>Item A</option>
      <option value='B'>Item B</option>
      <option value='C'>Item C</option>
    </>,
  })} />)
  .add('uncontrolled', () => <Input {...props({ value: undefined })} />);
