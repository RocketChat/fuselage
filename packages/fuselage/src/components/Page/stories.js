import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { Page, PageHeader, PageHeaderTitle } from './index';


const props = () => ({});

storiesOf('Components|Page', module)
  .addDecorator(withKnobs)
  .addParameters({ jest: ['Page'] })
  .add('default', () => (
    <Page {...props()}>
      <PageHeader>
        <PageHeaderTitle>Page example</PageHeaderTitle>
      </PageHeader>
    </Page>
  ));
