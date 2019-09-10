import * as icons from '@rocket.chat/icons/dist/font';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Document, TextSection, VariationsTable, createPropsFromKnobs, handleEvent } from '../../helpers/storybook';
import { Icon } from '../Icon';
import { Button } from './index';


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
        'square + icon': { square: true, children: <Icon iconName='circled-arrow-down' /> },
        'text + icon': { children: <><Icon iconName='circled-arrow-down' /> Button</> },
        'text + icon + danger': { children: <><Icon iconName='circled-arrow-down' /> Button</>, danger: true },
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
        'square + icon': { square: true, children: <Icon iconName='circled-arrow-down' /> },
        'text + icon': { children: <><Icon iconName='circled-arrow-down' /> Button</> },
        'text + icon + danger': { children: <><Icon iconName='circled-arrow-down' /> Button</>, danger: true },
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
      <h2>Ghost</h2>
    </TextSection>
    <VariationsTable
      component={Button}
      common={{ ghost: true }}
      xAxis={{
        text: { children: 'Button' },
        'square + icon': { square: true, children: <Icon iconName='circled-arrow-down' /> },
        'text + icon': { children: <><Icon iconName='circled-arrow-down' /> Button</> },
        'text + icon + danger': { children: <><Icon iconName='circled-arrow-down' /> Button</>, danger: true },
      }}
      yAxis={{
        default: {},
        hover: { className: 'hover' },
        active: { className: 'active' },
        focus: { className: 'focus' },
        disabled: { disabled: true },
      }}
    />
  </Document>);

const props = createPropsFromKnobs({
  danger: false,
  ghost: false,
  hidden: false,
  invisible: false,
  primary: false,
  small: false,
  square: false,
  children: 'Button',
  onClick: handleEvent('click'),
});

storiesOf('Elements|Button', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['Button/spec'] })
  .add('basic', () => <Button {...props()} />)
  .add('primary', () => <Button {...props({ primary: true })} />)
  .add('ghost', () => <Button {...props({ ghost: true })} />)
  .add('danger', () => <Button {...props({ danger: true })} />)
  .add('small', () => <Button {...props({ small: true })} />)
  .add('with icon', () => <Button
    {...props({
      children: <>
        <Icon iconName={select('children/icon', icons, icons.edit)} /> {text('children/text', 'Edit')}
      </>,
    })}
  />)
  .add('as link', () => <Button
    {...props()}
    as='a'
    href='https://rocket.chat'
    target='_blank'
    rel='noopener noreferrer'
  />
  )
  .add('square', () => (
    <Button {...props({ square: true, children: <Icon iconName={select('children/icon', icons, icons.plus)} /> })} />
  ))
  .add('hidden', () => <Button {...props({ hidden: true })} />)
  .add('invisible', () => <Button {...props({ invisible: true })} />);
