import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Tab } from '../Tab';

import { Tabs } from './index';


storiesOf('Collections|Tabs', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['spec'] })
  .add('default', () => (
    <Tabs>
      <Tab active>Tab text 1</Tab>
      <Tab>Tab text 2</Tab>
      <Tab>Tab text 3</Tab>
    </Tabs>
  ));
