import React from 'react';
import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { Tab } from '../Tab';

import { Tabs } from './index';


storiesOf('Components|Tabs', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['Tabs'] })
  .add('default', () => (
    <Tabs>
      <Tab active>Tab text 1</Tab>
      <Tab>Tab text 2</Tab>
      <Tab>Tab text 3</Tab>
    </Tabs>
  ));
