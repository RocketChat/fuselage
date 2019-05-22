import React from 'react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Button } from './index';


const buttonText = 'Powered by Rocket.Chat';

storiesOf('Button', module)
  .addDecorator(withInfo)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .addParameters({ jest: ['Button'] })
  .add('default', () => (
    <Button
      disabled={boolean('disabled', false)}
      onClick={action('clicked')}
    >
      {text('text', buttonText)}
    </Button>
  ))
;
