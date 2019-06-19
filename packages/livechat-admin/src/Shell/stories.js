import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Shell } from './index';


const props = () => ({
  closeable: boolean('closeable', true),
  title: text('title', 'Page title'),
  onClosing: action('closing'),
});

storiesOf('Components|Shell', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Shell {...props()} />
  ));
