import { Tile } from '@rocket.chat/fuselage';
import type { Meta, Story } from '@storybook/react';
import type { ComponentProps } from 'react';

import FormPageLayout from './FormPageLayout';

type Args = ComponentProps<typeof FormPageLayout>;

export default {
  title: 'common/FormPageLayout',
  component: FormPageLayout,
  parameters: {
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on.*' },
  },
  args: {
    title: <Tile>Title</Tile>,
    subtitle: <Tile>Subtitle</Tile>,
    description: <Tile>Description</Tile>,
    children: <Tile>Form</Tile>,
  },
} as Meta<Args>;

export const _FormPageLayout: Story<Args> = (args) => (
  <FormPageLayout {...args} />
);
_FormPageLayout.storyName = 'FormPageLayout';
