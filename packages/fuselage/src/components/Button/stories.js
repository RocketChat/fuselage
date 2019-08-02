import * as icons from '@rocket.chat/icons/dist/font';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import React from 'react';

import { createPropsFromKnobs, handleEvent, Document, TextSection, VariationsTable } from '../../helpers/storybook';
import { Icon } from '../Icon';
import { Button } from './index';


const props = createPropsFromKnobs({
  children: 'Button',
  bland: false,
  outline: false,
  nude: false,
  square: false,
  primary: false,
  secondary: false,
  danger: false,
  disabled: false,
  hidden: false,
  onClick: handleEvent('click'),
});

storiesOf('Elements|Button', module)
  .lokiSkip('Button', () => <Document>
    <TextSection>
      <h1>Button</h1>
      <p>
      A button indicates a possible user action. By default, it's rendered as a HTML5 <code>{'<button>'}</code> element.
      </p>
    </TextSection>
    <TextSection>
      <h2>Basic</h2>
    </TextSection>
    <VariationsTable
      component={Button}
      xAxis={{
        text: { children: 'Button' },
        'square + icon': { square: true, children: <Icon name='circled-arrow-down' /> },
        'text + icon': { children: <><Icon name='circled-arrow-down' /> Button</> },
        'text + icon + danger': { children: <><Icon name='circled-arrow-down' /> Button</>, danger: true },
      }}
      yAxis={{
        default: {},
        hover: { className: 'hover' },
        active: { className: 'active' },
        focus: { className: 'focus' },
        disabled: { disabled: true },
      }}
    />
    <TextSection>
      <h2>Primary</h2>
    </TextSection>
    <VariationsTable
      component={Button}
      common={{ primary: true }}
      xAxis={{
        text: { children: 'Button' },
        'square + icon': { square: true, children: <Icon name='circled-arrow-down' /> },
        'text + icon': { children: <><Icon name='circled-arrow-down' /> Button</> },
        'text + icon + danger': { children: <><Icon name='circled-arrow-down' /> Button</>, danger: true },
      }}
      yAxis={{
        default: { primary: true },
        hover: { primary: true, className: 'hover' },
        active: { primary: true, className: 'active' },
        focus: { primary: true, className: 'focus' },
        disabled: { primary: true, disabled: true },
      }}
    />
    <TextSection>
      <h2>Ghost</h2>
    </TextSection>
    <VariationsTable
      component={Button}
      common={{ ghost: true }}
      xAxis={{
        text: { children: 'Button' },
        'square + icon': { square: true, children: <Icon name='circled-arrow-down' /> },
        'text + icon': { children: <><Icon name='circled-arrow-down' /> Button</> },
        'text + icon + danger': { children: <><Icon name='circled-arrow-down' /> Button</>, danger: true },
      }}
      yAxis={{
        default: { ghost: true },
        hover: { ghost: true, className: 'hover' },
        active: { ghost: true, className: 'active' },
        focus: { ghost: true, className: 'focus' },
        disabled: { ghost: true, disabled: true },
      }}
    />
  </Document>);

storiesOf('Elements|Button', module)
  .addDecorator(jsxDecorator)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['spec'] })
  .add('primary', () => <Button {...props({ primary: true })} />)
  .add('secondary', () => <Button {...props()} />)
  .add('ghost', () => <Button {...props({ ghost: true })} />)
  .add('danger', () => <Button {...props({ danger: true })} />)
  .add('disabled', () => <Button {...props({ disabled: true })} />)
  .add('hidden', () => <Button {...props({ hidden: true })} />)
  .add('with icon', () => <Button
    {...props({
      bland: true,
      children: <>
          <Icon name={select('children/icon', icons, icons.edit)} /> {text('children/text', 'Edit')}
        </>,
    })}
  />)
  .add('as link', () => <Button
    {...props()}
    as='a'
    href={text('href', 'https://rocket.chat')}
    target={text('target', '_blank')}
    rel={text('rel', 'noopener noreferrer')}
  />
  )
  .add('square', () => (
    <Button {...props({ square: true, children: <Icon name={select('children/icon', icons, icons.plus)} /> })} />
  ));
