import { Title, Description, Primary, Stories } from '@storybook/addon-docs';
import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import {
  Field,
  FieldGroup,
  FieldHint,
  FieldLabel,
  FieldRow,
  InputBox,
} from '../..';

export default {
  title: 'Inputs/FieldGroup',
  component: FieldGroup,
  parameters: {
    docs: {
      description: {
        component:
          'A container for grouping fields that semantically share a common data context.',
      },

      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Stories title={'Label positioning for selection buttons'} />
        </>
      ),
    },
  },
} as Meta<typeof Field>;

export const Default: StoryFn<typeof FieldGroup> = () => (
  <FieldGroup>
    <Field>
      <FieldLabel>Field #1</FieldLabel>
      <FieldRow>
        <InputBox.Skeleton />
      </FieldRow>
    </Field>
    <Field>
      <FieldLabel>Field #2</FieldLabel>
      <FieldRow>
        <InputBox.Skeleton />
      </FieldRow>
      <FieldHint>Help text</FieldHint>
    </Field>
    <Field>
      <FieldLabel>Field #3</FieldLabel>
      <FieldRow>
        <InputBox.Skeleton />
      </FieldRow>
    </Field>
  </FieldGroup>
);
