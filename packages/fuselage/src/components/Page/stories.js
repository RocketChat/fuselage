import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { Page, PageHeader, PageHeaderTitle } from './index';


const props = () => ({});

storiesOf('Views|Page', module)
  .addDecorator(withKnobs)
  .addParameters({ jest: ['spec'] })
  .add('default', () => (
    <Page {...props()}>
      <PageHeader>
        <PageHeaderTitle>Page example</PageHeaderTitle>
      </PageHeader>
    </Page>
  ));
