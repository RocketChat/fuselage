import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import {
  createPropsFromKnobs,
  Document,
  ShowCaseSection,
  TextSection,
  ThemingVariables,
} from '../../helpers/storybook';
import { Hint } from './index';


storiesOf('Elements|Hint', module)
  .lokiSkip('Hint', () => <Document>
    <TextSection>
      <h1>Hint</h1>
    </TextSection>
    <ShowCaseSection>
      <Hint>
        Help text
      </Hint>
    </ShowCaseSection>
    <ThemingVariables componentName='hint' />
  </Document>);

const props = createPropsFromKnobs({
  children: 'Help text',
  hidden: false,
  invisible: false,
});

storiesOf('Elements|Hint', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['Hint/spec'] })
  .add('default', () => <Hint {...props()} />)
  .add('hidden', () => <Hint {...props({ hidden: true })} />)
  .add('invisible', () => <Hint {...props({ invisible: true })} />);
