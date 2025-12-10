import type { StoryFn, Meta } from '@storybook/react-webpack5';

import { Field, FieldHint, FieldLabel, FieldRow } from '../Field';
import { InputBoxSkeleton } from '../InputBox';

import { FieldGroup } from './FieldGroup';
import { FieldLegend } from './FieldLegend';

export default {
  title: 'Inputs/FieldGroup',
  component: FieldGroup,
} satisfies Meta<typeof FieldGroup>;

export const Default: StoryFn<typeof FieldGroup> = () => (
  <FieldGroup>
    <FieldLegend>This text should be visually hidden but still semantically present</FieldLegend>
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
