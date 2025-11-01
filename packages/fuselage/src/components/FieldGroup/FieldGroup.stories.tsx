import type { StoryFn, Meta } from '@storybook/react-vite';

import { Field, FieldHint, FieldLabel, FieldRow } from '../Field/index.js';
import { InputBoxSkeleton } from '../InputBox/index.js';

import { FieldGroup } from './FieldGroup.js';

export default {
  title: 'Inputs/FieldGroup',
  component: FieldGroup,
} satisfies Meta<typeof FieldGroup>;

export const Default: StoryFn<typeof FieldGroup> = () => (
  <FieldGroup>
    <Field>
      <FieldLabel>Field #1</FieldLabel>
      <FieldRow>
        <InputBoxSkeleton />
      </FieldRow>
    </Field>
    <Field>
      <FieldLabel>Field #2</FieldLabel>
      <FieldRow>
        <InputBoxSkeleton />
      </FieldRow>
      <FieldHint>Help text</FieldHint>
    </Field>
    <Field>
      <FieldLabel>Field #3</FieldLabel>
      <FieldRow>
        <InputBoxSkeleton />
      </FieldRow>
    </Field>
  </FieldGroup>
);
