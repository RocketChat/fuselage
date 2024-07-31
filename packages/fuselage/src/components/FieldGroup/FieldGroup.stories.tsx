import { Title, Description, Primary, Stories } from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Field from '../Field/Field';
import FieldHint from '../Field/FieldHint';
import FieldLabel from '../Field/FieldLabel';
import FieldRow from '../Field/FieldRow';
import InputBox from '../InputBox';
import FieldGroup from './FieldGroup';

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
} satisfies ComponentMeta<typeof Field>;

export const Default: ComponentStory<typeof FieldGroup> = () => (
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
