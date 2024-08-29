import {
  Field,
  FieldDescription,
  FieldError,
  FieldHint,
  FieldLabel,
  FieldRow,
  InputBox,
} from '@rocket.chat/fuselage';
import type { Meta, StoryFn } from '@storybook/react';

import ActionLink from '../ActionLink';
import Form from '../FormPageLayout';
import {
  HorizontalWizardLayout,
  HorizontalWizardLayoutAside,
  HorizontalWizardLayoutContent,
  HorizontalWizardLayoutDescription,
  HorizontalWizardLayoutSubtitle,
  HorizontalWizardLayoutTitle,
  HorizontalWizardTextHighlight,
} from './HorizontalWizardLayout';

export default {
  title: 'HorizontalWizardLayout',
  component: HorizontalWizardLayout,
} satisfies Meta<typeof HorizontalWizardLayout>;

export const Default: StoryFn<typeof HorizontalWizardLayout> = (props) => (
  <>
    <HorizontalWizardLayout {...props}>
      <HorizontalWizardLayoutAside>
        <HorizontalWizardLayoutTitle>
          Title{' '}
          <HorizontalWizardTextHighlight>
            highlight
          </HorizontalWizardTextHighlight>
        </HorizontalWizardLayoutTitle>
        <HorizontalWizardLayoutSubtitle>
          Subtitle{' '}
          <HorizontalWizardTextHighlight>
            highlight
          </HorizontalWizardTextHighlight>
        </HorizontalWizardLayoutSubtitle>
        <HorizontalWizardLayoutDescription>
          Description <ActionLink>highlight</ActionLink>
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
      </HorizontalWizardLayoutContent>
    </HorizontalWizardLayout>
  </>
);
Default.args = { forceDarkMode: false };

export const WithScroll: StoryFn<typeof HorizontalWizardLayout> = (props) => (
  <HorizontalWizardLayout {...props}>
    <HorizontalWizardLayoutAside>
      <HorizontalWizardLayoutTitle>Title</HorizontalWizardLayoutTitle>
      <HorizontalWizardLayoutSubtitle>Subtitle</HorizontalWizardLayoutSubtitle>
      <HorizontalWizardLayoutDescription>
        Description{' '}
        <HorizontalWizardTextHighlight>highlight</HorizontalWizardTextHighlight>
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
            <FieldLabel>Label</FieldLabel>
            <FieldDescription>Description</FieldDescription>
            <FieldRow>
              <InputBox.Skeleton />
            </FieldRow>
            <FieldRow>Error</FieldRow>
            <FieldHint>Hint</FieldHint>
          </Field>
          <Field>
            <FieldLabel>Label</FieldLabel>
            <FieldDescription>Description</FieldDescription>
            <FieldRow>
              <InputBox.Skeleton />
            </FieldRow>
            <FieldRow>Error</FieldRow>
            <FieldHint>Hint</FieldHint>
          </Field>
          <Field>
            <FieldLabel>Label</FieldLabel>
            <FieldDescription>Description</FieldDescription>
            <FieldRow>
              <InputBox.Skeleton />
            </FieldRow>
            <FieldRow>Error</FieldRow>
            <FieldHint>Hint</FieldHint>
          </Field>
          <Field>
            <FieldLabel>Label</FieldLabel>
            <FieldDescription>Description</FieldDescription>
            <FieldRow>
              <InputBox.Skeleton />
            </FieldRow>
            <FieldRow>Error</FieldRow>
            <FieldHint>Hint</FieldHint>
          </Field>
          <Field>
            <FieldLabel>Label</FieldLabel>
            <FieldDescription>Description</FieldDescription>
            <FieldRow>
              <InputBox.Skeleton />
            </FieldRow>
            <FieldRow>Error</FieldRow>
            <FieldHint>Hint</FieldHint>
          </Field>
          <Field>
            <FieldLabel>Label</FieldLabel>
            <FieldDescription>Description</FieldDescription>
            <FieldRow>
              <InputBox.Skeleton />
            </FieldRow>
            <FieldRow>Error</FieldRow>
            <FieldHint>Hint</FieldHint>
          </Field>
          <Field>
            <FieldLabel>Label</FieldLabel>
            <FieldDescription>Description</FieldDescription>
            <FieldRow>
              <InputBox.Skeleton />
            </FieldRow>
            <FieldRow>Error</FieldRow>
            <FieldHint>Hint</FieldHint>
          </Field>
          <Field>
            <FieldLabel>Label</FieldLabel>
            <FieldDescription>Description</FieldDescription>
            <FieldRow>
              <InputBox.Skeleton />
            </FieldRow>
            <FieldRow>Error</FieldRow>
            <FieldHint>Hint</FieldHint>
          </Field>
          <Field>
            <FieldLabel>Label</FieldLabel>
            <FieldDescription>Description</FieldDescription>
            <FieldRow>
              <InputBox.Skeleton />
            </FieldRow>
            <FieldRow>Error</FieldRow>
            <FieldHint>Hint</FieldHint>
          </Field>
          <Field>
            <FieldLabel>Label</FieldLabel>
            <FieldDescription>Description</FieldDescription>
            <FieldRow>
              <InputBox.Skeleton />
            </FieldRow>
            <FieldRow>Error</FieldRow>
            <FieldHint>Hint</FieldHint>
          </Field>
          <Field>
            <FieldLabel>Label</FieldLabel>
            <FieldDescription>Description</FieldDescription>
            <FieldRow>
              <InputBox.Skeleton />
            </FieldRow>
            <FieldRow>Error</FieldRow>
            <FieldHint>Hint</FieldHint>
          </Field>
          <Field>
            <FieldLabel>Label</FieldLabel>
            <FieldDescription>Description</FieldDescription>
            <FieldRow>
              <InputBox.Skeleton />
            </FieldRow>
            <FieldRow>Error</FieldRow>
            <FieldHint>Hint</FieldHint>
          </Field>
        </Form.Container>
        <Form.Footer>footer</Form.Footer>
      </Form>
    </HorizontalWizardLayoutContent>
  </HorizontalWizardLayout>
);
WithScroll.args = { forceDarkMode: undefined };
