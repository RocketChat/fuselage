import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { Button } from '../../Button';
import { ButtonGroup } from '../../ButtonGroup';

import { PageHeader, PageHeaderTitle, PageHeaderBurgerButton } from './index';


const titleProps = () => ({
  children: text('title/children', 'Page header title'),
});

storiesOf('Views|Page/PageHeader', module)
  .addDecorator(withKnobs)
  .addParameters({ jest: ['PageHeader'] })
  .add('default', () => (
    <PageHeader>
      <PageHeaderTitle {...titleProps()} />
    </PageHeader>
  ))
  .add('with buttons', () => (
    <PageHeader>
      <PageHeaderTitle {...titleProps()} />
      <ButtonGroup>
        <Button secondary>Secondary action</Button>
        <Button primary>Primary action</Button>
      </ButtonGroup>
    </PageHeader>
  ))
  .add('with burger button', () => (
    <PageHeader>
      <PageHeaderBurgerButton />
      <PageHeaderTitle {...titleProps()} />
    </PageHeader>
  ));
