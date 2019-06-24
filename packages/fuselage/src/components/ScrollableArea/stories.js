import React from 'react';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';

import { Button } from '../Button';
import { ButtonGroup } from '../ButtonGroup';

import { ScrollableArea } from './index';


storiesOf('Behaviors|ScrollableArea', module)
  .addDecorator(centered)
  .addParameters({ jest: ['spec'] })
  .add('horizontal', () => (
    <ScrollableArea style={{ maxWidth: '10rem' }}>
      <ButtonGroup>
        <Button>Button #1</Button>
        <Button>Button #2</Button>
        <Button>Button #3</Button>
        <Button>Button #4</Button>
        <Button>Button #5</Button>
        <Button>Button #6</Button>
        <Button>Button #7</Button>
        <Button>Button #8</Button>
        <Button>Button #9</Button>
      </ButtonGroup>
    </ScrollableArea>
  ))
  .add('vertical', () => (
    <ScrollableArea style={{ maxHeight: '10rem' }}>
      <ButtonGroup vertical>
        <Button>Button #1</Button>
        <Button>Button #2</Button>
        <Button>Button #3</Button>
        <Button>Button #4</Button>
        <Button>Button #5</Button>
        <Button>Button #6</Button>
        <Button>Button #7</Button>
        <Button>Button #8</Button>
        <Button>Button #9</Button>
      </ButtonGroup>
    </ScrollableArea>
  ))
  .add('both', () => (
    <ScrollableArea style={{ maxWidth: '5rem', maxHeight: '5rem' }}>
      <ButtonGroup wrap>
        <Button>Button #1</Button>
        <Button>Button #2</Button>
        <Button>Button #3</Button>
        <Button>Button #4</Button>
        <Button>Button #5</Button>
        <Button>Button #6</Button>
        <Button>Button #7</Button>
        <Button>Button #8</Button>
        <Button>Button #9</Button>
      </ButtonGroup>
    </ScrollableArea>
  ));
