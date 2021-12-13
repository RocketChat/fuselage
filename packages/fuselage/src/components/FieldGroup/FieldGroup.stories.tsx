import { Title, Description, Primary, Stories } from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Field, FieldGroup, InputBox } from '../..';

export default {
  title: 'Forms/FieldGroup_new',
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
} as ComponentMeta<typeof Field>;

export const Default: ComponentStory<typeof FieldGroup> = () => (
  <FieldGroup>
    <Field>
      <Field.Label>Field #1</Field.Label>
      <Field.Row>
        <InputBox.Skeleton />
      </Field.Row>
    </Field>
    <Field>
      <Field.Label>Field #2</Field.Label>
      <Field.Row>
        <InputBox.Skeleton />
      </Field.Row>
      <Field.Hint>Help text</Field.Hint>
    </Field>
    <Field>
      <Field.Label>Field #3</Field.Label>
      <Field.Row>
        <InputBox.Skeleton />
      </Field.Row>
    </Field>
  </FieldGroup>
);
