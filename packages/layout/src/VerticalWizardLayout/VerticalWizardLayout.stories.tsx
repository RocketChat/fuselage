import {
  Field,
  FieldDescription,
  FieldError,
  FieldHint,
  FieldLabel,
  FieldRow,
  InputBox,
} from '@rocket.chat/fuselage';
import type { Meta, Story } from '@storybook/react';

import {
  VerticalWizardLayout,
  VerticalWizardLayoutTitle,
  VerticalWizardLayoutForm,
  VerticalWizardLayoutFooter,
} from './VerticalWizardLayout';
import Form from '../FormPageLayout';

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
            <FieldLabel>Label</FieldLabel>
            <FieldDescription>Description</FieldDescription>
            <FieldRow>
              <InputBox.Skeleton />
            </FieldRow>
            <FieldError>Error</FieldError>
            <FieldHint>Hint</FieldHint>
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

export const WithScroll: Story = () => (
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
            <FieldLabel>Label</FieldLabel>
            <FieldDescription>Description</FieldDescription>
            <FieldRow>
              <InputBox.Skeleton />
            </FieldRow>
            <FieldError>Error</FieldError>
            <FieldHint>Hint</FieldHint>
          </Field>{' '}
          <Field>
            <FieldLabel>Label</FieldLabel>
            <FieldDescription>Description</FieldDescription>
            <FieldRow>
              <InputBox.Skeleton />
            </FieldRow>
            <FieldError>Error</FieldError>
            <FieldHint>Hint</FieldHint>
          </Field>{' '}
          <Field>
            <FieldLabel>Label</FieldLabel>
            <FieldDescription>Description</FieldDescription>
            <FieldRow>
              <InputBox.Skeleton />
            </FieldRow>
            <FieldError>Error</FieldError>
            <FieldHint>Hint</FieldHint>
          </Field>{' '}
          <Field>
            <FieldLabel>Label</FieldLabel>
            <FieldDescription>Description</FieldDescription>
            <FieldRow>
              <InputBox.Skeleton />
            </FieldRow>
            <FieldError>Error</FieldError>
            <FieldHint>Hint</FieldHint>
          </Field>{' '}
          <Field>
            <FieldLabel>Label</FieldLabel>
            <FieldDescription>Description</FieldDescription>
            <FieldRow>
              <InputBox.Skeleton />
            </FieldRow>
            <FieldError>Error</FieldError>
            <FieldHint>Hint</FieldHint>
          </Field>{' '}
          <Field>
            <FieldLabel>Label</FieldLabel>
            <FieldDescription>Description</FieldDescription>
            <FieldRow>
              <InputBox.Skeleton />
            </FieldRow>
            <FieldError>Error</FieldError>
            <FieldHint>Hint</FieldHint>
          </Field>{' '}
          <Field>
            <FieldLabel>Label</FieldLabel>
            <FieldDescription>Description</FieldDescription>
            <FieldRow>
              <InputBox.Skeleton />
            </FieldRow>
            <FieldError>Error</FieldError>
            <FieldHint>Hint</FieldHint>
          </Field>{' '}
          <Field>
            <FieldLabel>Label</FieldLabel>
            <FieldDescription>Description</FieldDescription>
            <FieldRow>
              <InputBox.Skeleton />
            </FieldRow>
            <FieldError>Error</FieldError>
            <FieldHint>Hint</FieldHint>
          </Field>{' '}
          <Field>
            <FieldLabel>Label</FieldLabel>
            <FieldDescription>Description</FieldDescription>
            <FieldRow>
              <InputBox.Skeleton />
            </FieldRow>
            <FieldError>Error</FieldError>
            <FieldHint>Hint</FieldHint>
          </Field>{' '}
          <Field>
            <FieldLabel>Label</FieldLabel>
            <FieldDescription>Description</FieldDescription>
            <FieldRow>
              <InputBox.Skeleton />
            </FieldRow>
            <FieldError>Error</FieldError>
            <FieldHint>Hint</FieldHint>
          </Field>{' '}
          <Field>
            <FieldLabel>Label</FieldLabel>
            <FieldDescription>Description</FieldDescription>
            <FieldRow>
              <InputBox.Skeleton />
            </FieldRow>
            <FieldError>Error</FieldError>
            <FieldHint>Hint</FieldHint>
          </Field>{' '}
          <Field>
            <FieldLabel>Label</FieldLabel>
            <FieldDescription>Description</FieldDescription>
            <FieldRow>
              <InputBox.Skeleton />
            </FieldRow>
            <FieldError>Error</FieldError>
            <FieldHint>Hint</FieldHint>
          </Field>{' '}
          <Field>
            <FieldLabel>Label</FieldLabel>
            <FieldDescription>Description</FieldDescription>
            <FieldRow>
              <InputBox.Skeleton />
            </FieldRow>
            <FieldError>Error</FieldError>
            <FieldHint>Hint</FieldHint>
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
