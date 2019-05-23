import React from 'react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { centeredWithWidth } from '../helpers/storybook';

import { Button } from './index';


const buttonText = 'Powered by Rocket.Chat';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['Button'] })
  .add('default', () => (
    <Button
      disabled={boolean('disabled', false)}
      invisible={boolean('invisible', false)}
      primary={boolean('primary', false)}
      secondary={boolean('secondary', false)}
      outline={boolean('outline', false)}
      nude={boolean('nude', false)}
      cancel={boolean('cancel', false)}
      small={boolean('small', false)}
      square={boolean('square', false)}
      stack={boolean('stack', false)}
      noPadding={boolean('noPadding', false)}
      loading={boolean('loading', false)}
      full={boolean('full', false)}
      onClick={action('clicked')}
    >
      {text('text', buttonText)}
    </Button>
  ))
  .add('disabled', () => (
    <Button
      disabled={boolean('disabled', true)}
      invisible={boolean('invisible', false)}
      primary={boolean('primary', false)}
      secondary={boolean('secondary', false)}
      outline={boolean('outline', false)}
      nude={boolean('nude', false)}
      cancel={boolean('cancel', false)}
      small={boolean('small', false)}
      square={boolean('square', false)}
      stack={boolean('stack', false)}
      noPadding={boolean('noPadding', false)}
      loading={boolean('loading', false)}
      full={boolean('full', false)}
      onClick={action('clicked')}
    >
      {text('text', buttonText)}
    </Button>
  ))
  .add('invisible', () => (
    <Button
      disabled={boolean('disabled', false)}
      invisible={boolean('invisible', true)}
      primary={boolean('primary', false)}
      secondary={boolean('secondary', false)}
      outline={boolean('outline', false)}
      nude={boolean('nude', false)}
      cancel={boolean('cancel', false)}
      small={boolean('small', false)}
      square={boolean('square', false)}
      stack={boolean('stack', false)}
      noPadding={boolean('noPadding', false)}
      loading={boolean('loading', false)}
      full={boolean('full', false)}
      onClick={action('clicked')}
    >
      {text('text', buttonText)}
    </Button>
  ))
  .add('primary', () => (
    <Button
      disabled={boolean('disabled', false)}
      invisible={boolean('invisible', false)}
      primary={boolean('primary', true)}
      secondary={boolean('secondary', false)}
      outline={boolean('outline', false)}
      nude={boolean('nude', false)}
      cancel={boolean('cancel', false)}
      small={boolean('small', false)}
      square={boolean('square', false)}
      stack={boolean('stack', false)}
      noPadding={boolean('noPadding', false)}
      loading={boolean('loading', false)}
      full={boolean('full', false)}
      onClick={action('clicked')}
    >
      {text('text', buttonText)}
    </Button>
  ))
  .add('secondary', () => (
    <Button
      disabled={boolean('disabled', false)}
      invisible={boolean('invisible', false)}
      primary={boolean('primary', false)}
      secondary={boolean('secondary', true)}
      outline={boolean('outline', false)}
      nude={boolean('nude', false)}
      cancel={boolean('cancel', false)}
      small={boolean('small', false)}
      square={boolean('square', false)}
      stack={boolean('stack', false)}
      noPadding={boolean('noPadding', false)}
      loading={boolean('loading', false)}
      full={boolean('full', false)}
      onClick={action('clicked')}
    >
      {text('text', buttonText)}
    </Button>
  ))
  .add('outline', () => (
    <Button
      disabled={boolean('disabled', false)}
      invisible={boolean('invisible', false)}
      primary={boolean('primary', false)}
      secondary={boolean('secondary', false)}
      outline={boolean('outline', true)}
      nude={boolean('nude', false)}
      cancel={boolean('cancel', false)}
      small={boolean('small', false)}
      square={boolean('square', false)}
      stack={boolean('stack', false)}
      noPadding={boolean('noPadding', false)}
      loading={boolean('loading', false)}
      full={boolean('full', false)}
      onClick={action('clicked')}
    >
      {text('text', buttonText)}
    </Button>
  ))
  .add('nude', () => (
    <Button
      disabled={boolean('disabled', false)}
      invisible={boolean('invisible', false)}
      primary={boolean('primary', false)}
      secondary={boolean('secondary', false)}
      outline={boolean('outline', false)}
      nude={boolean('nude', true)}
      cancel={boolean('cancel', false)}
      small={boolean('small', false)}
      square={boolean('square', false)}
      stack={boolean('stack', false)}
      noPadding={boolean('noPadding', false)}
      loading={boolean('loading', false)}
      full={boolean('full', false)}
      onClick={action('clicked')}
    >
      {text('text', buttonText)}
    </Button>
  ))
  .add('cancel', () => (
    <Button
      disabled={boolean('disabled', false)}
      invisible={boolean('invisible', false)}
      primary={boolean('primary', false)}
      secondary={boolean('secondary', false)}
      outline={boolean('outline', false)}
      nude={boolean('nude', false)}
      cancel={boolean('cancel', true)}
      small={boolean('small', false)}
      square={boolean('square', false)}
      stack={boolean('stack', false)}
      noPadding={boolean('noPadding', false)}
      loading={boolean('loading', false)}
      full={boolean('full', false)}
      onClick={action('clicked')}
    >
      {text('text', buttonText)}
    </Button>
  ))
  .add('small', () => (
    <Button
      disabled={boolean('disabled', false)}
      invisible={boolean('invisible', false)}
      primary={boolean('primary', false)}
      secondary={boolean('secondary', false)}
      outline={boolean('outline', false)}
      nude={boolean('nude', false)}
      cancel={boolean('cancel', false)}
      small={boolean('small', true)}
      square={boolean('square', false)}
      stack={boolean('stack', false)}
      noPadding={boolean('noPadding', false)}
      loading={boolean('loading', false)}
      full={boolean('full', false)}
      onClick={action('clicked')}
    >
      {text('text', buttonText)}
    </Button>
  ))
  .add('square', () => (
    <Button
      disabled={boolean('disabled', false)}
      invisible={boolean('invisible', false)}
      primary={boolean('primary', false)}
      secondary={boolean('secondary', false)}
      outline={boolean('outline', false)}
      nude={boolean('nude', false)}
      cancel={boolean('cancel', false)}
      small={boolean('small', false)}
      square={boolean('square', true)}
      stack={boolean('stack', false)}
      noPadding={boolean('noPadding', false)}
      loading={boolean('loading', false)}
      full={boolean('full', false)}
      onClick={action('clicked')}
    >
      {text('text', buttonText)}
    </Button>
  ))
  .add('stack', () => (
    <Button
      disabled={boolean('disabled', false)}
      invisible={boolean('invisible', false)}
      primary={boolean('primary', false)}
      secondary={boolean('secondary', false)}
      outline={boolean('outline', false)}
      nude={boolean('nude', false)}
      cancel={boolean('cancel', false)}
      small={boolean('small', false)}
      square={boolean('square', false)}
      stack={boolean('stack', true)}
      noPadding={boolean('noPadding', false)}
      loading={boolean('loading', false)}
      full={boolean('full', false)}
      onClick={action('clicked')}
    >
      {text('text', buttonText)}
    </Button>
  ))
  .add('noPadding', () => (
    <Button
      disabled={boolean('disabled', false)}
      invisible={boolean('invisible', false)}
      primary={boolean('primary', false)}
      secondary={boolean('secondary', false)}
      outline={boolean('outline', false)}
      nude={boolean('nude', false)}
      cancel={boolean('cancel', false)}
      small={boolean('small', false)}
      square={boolean('square', false)}
      stack={boolean('stack', false)}
      noPadding={boolean('noPadding', true)}
      loading={boolean('loading', false)}
      full={boolean('full', false)}
      onClick={action('clicked')}
    >
      {text('text', buttonText)}
    </Button>
  ))
  .add('loading', () => (
    <Button
      disabled={boolean('disabled', false)}
      invisible={boolean('invisible', false)}
      primary={boolean('primary', false)}
      secondary={boolean('secondary', false)}
      outline={boolean('outline', false)}
      nude={boolean('nude', false)}
      cancel={boolean('cancel', false)}
      small={boolean('small', false)}
      square={boolean('square', false)}
      stack={boolean('stack', false)}
      noPadding={boolean('noPadding', false)}
      loading={boolean('loading', true)}
      full={boolean('full', false)}
      onClick={action('clicked')}
    >
      {text('text', buttonText)}
    </Button>
  ));
storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(centeredWithWidth('100vw'))
  .addParameters({ jest: ['Button'] })
  .add('full', () => (
    <Button
      disabled={boolean('disabled', false)}
      invisible={boolean('invisible', false)}
      primary={boolean('primary', false)}
      secondary={boolean('secondary', false)}
      outline={boolean('outline', false)}
      nude={boolean('nude', false)}
      cancel={boolean('cancel', false)}
      small={boolean('small', false)}
      square={boolean('square', false)}
      stack={boolean('stack', false)}
      noPadding={boolean('noPadding', false)}
      loading={boolean('loading', false)}
      full={boolean('full', true)}
      onClick={action('clicked')}
    >
      {text('text', buttonText)}
    </Button>
  ), { viewport: { defaultViewport: 'iphonex' } });
