import type { Meta, Story } from '@storybook/react';
import type { ComponentProps } from 'react';

import TotpForm from './TotpForm';

type Args = ComponentProps<typeof TotpForm>;

export default {
  title: 'forms/TotpForm',
  component: TotpForm,
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta<Args>;

export const _TotpForm: Story<Args> = (args) => <TotpForm {...args} />;
_TotpForm.storyName = 'TotpForm';
