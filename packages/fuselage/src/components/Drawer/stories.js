import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Button } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import notes from './README.md';

import { Drawer } from './index';


const props = ({
  docked = false,
  dockWhen = '',
  hysteresis = 0.55,
  open = false,
  reverse = false,
  swipeAreaWidth = 20,
} = {}) => ({
  docked: boolean('docked', docked),
  dockWhen: text('dockWhen', dockWhen),
  hysteresis: number('hysteresis', hysteresis, { min: 0, max: 1, step: 0.05 }),
  open: boolean('open', open),
  reverse: boolean('reverse', reverse),
  swipeAreaWidth: number('swipeAreaWidth', swipeAreaWidth, { min: 0 }),
  onOpening: action('opening'),
  onClosing: action('closing'),
  onDockStateChange: action('dockStateChange'),
});

const DrawerContent = () => (
  <div>
    <ButtonGroup>
      <Button secondary>Drawer content</Button>
    </ButtonGroup>
  </div>
);

const MainContent = () => (
  <div>
    <ButtonGroup>
      <Button primary>Main content</Button>
    </ButtonGroup>
  </div>
);

storiesOf('Behaviors|Drawer', module)
  .addDecorator(withKnobs)
  .addParameters({
    jest: ['spec'],
    notes,
  })
  .add('default', () => (
    <div style={{ display: 'flex' }}>
      <Drawer {...props({ open: true })}>
        <DrawerContent />
      </Drawer>
      <MainContent />
    </div>
  ))
  .add('reverse', () => (
    <div style={{ display: 'flex' }}>
      <Drawer {...props({ open: true, reverse: true })}>
        <DrawerContent />
      </Drawer>
      <MainContent />
    </div>
  ))
  .add('docked', () => (
    <div style={{ display: 'flex' }}>
      <Drawer {...props({ docked: true })}>
        <DrawerContent />
      </Drawer>
      <MainContent />
    </div>
  ));

storiesOf('Behaviors|Drawer', module)
  .addDecorator(withKnobs)
  .addParameters({ jest: ['Drawer'] })
  .addParameters({ viewport: { defaultViewport: 'iphone5' } })
  .add('responsive', () => (
    <div style={{ display: 'flex' }}>
      <Drawer {...props({ open: true, dockWhen: '(min-width: 321px)' })}>
        <DrawerContent />
      </Drawer>
      <MainContent />
    </div>
  ));
