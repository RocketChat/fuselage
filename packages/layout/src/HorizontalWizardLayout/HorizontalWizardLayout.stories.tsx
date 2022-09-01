import { Field, InputBox } from '@rocket.chat/fuselage';
import type { Meta, Story } from '@storybook/react';

import { Form } from '..';
import {
  HorizontalWizardLayout,
  HorizontalWizardLayoutAside,
  HorizontalWizardLayoutContent,
  HorizontalWizardLayoutDescription,
  HorizontalWizardLayoutSubtitle,
  HorizontalWizardLayoutTitle,
} from './HorizontalWizardLayout';

export default {
  title: 'HorizontalWizardLayout',
  component: HorizontalWizardLayout,
} as Meta;

export const Default: Story = () => (
  <HorizontalWizardLayout>
    <HorizontalWizardLayoutAside>
      <HorizontalWizardLayoutTitle>Title</HorizontalWizardLayoutTitle>
      <HorizontalWizardLayoutSubtitle>Subtitle</HorizontalWizardLayoutSubtitle>
      <HorizontalWizardLayoutDescription>
        Description
      </HorizontalWizardLayoutDescription>
    </HorizontalWizardLayoutAside>
    <HorizontalWizardLayoutContent>
      <Form onSubmit={console.log}>
        <Form.Header>
          <Form.Title>Title</Form.Title>
          <Form.Subtitle>Subtitle</Form.Subtitle>
        </Form.Header>
        <Form.Container>
          <Field>
            <Field.Label>Label</Field.Label>
            <Field.Description>Description</Field.Description>
            <Field.Row>
              <InputBox.Skeleton />
            </Field.Row>
            <Field.Error>Error</Field.Error>
            <Field.Hint>Hint</Field.Hint>
          </Field>
        </Form.Container>
        <Form.Footer>footer</Form.Footer>
      </Form>
    </HorizontalWizardLayoutContent>
  </HorizontalWizardLayout>
);
