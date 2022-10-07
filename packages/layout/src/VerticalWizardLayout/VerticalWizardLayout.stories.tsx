import { Field, InputBox } from '@rocket.chat/fuselage';
import type { Meta, Story } from '@storybook/react';

import Form from '../FormPageLayout';
import {
  VerticalWizardLayout,
  VerticalWizardLayoutTitle,
  VerticalWizardLayoutForm,
  VerticalWizardLayoutFooter,
} from './VerticalWizardLayout';

export default {
  title: 'VerticalWizardLayout',
  component: VerticalWizardLayout,
} as Meta;

export const Default: Story = () => (
  <VerticalWizardLayout>
    <VerticalWizardLayoutTitle>Title</VerticalWizardLayoutTitle>
    <VerticalWizardLayoutForm>
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
    </VerticalWizardLayoutForm>
    <VerticalWizardLayoutFooter>
      New here? Create account
    </VerticalWizardLayoutFooter>
  </VerticalWizardLayout>
);
