import type { Meta, Story } from '@storybook/react';
import { countries } from 'countries-list';
import type { ComponentProps } from 'react';

import RequestTrialForm from './RequestTrialForm';

type Args = ComponentProps<typeof RequestTrialForm>;

export default {
  title: 'forms/RequestTrialForm',
  component: RequestTrialForm,
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on.*' },
  },
  args: {
    validateEmail: (email) =>
      email === 'rocket@rocket.chat' ? 'invalid email' : true,
    organizationSizeOptions: [
      ['0', '1-10 people'],
      ['1', '11-50 people'],
      ['2', '51-100 people'],
      ['3', '101-250 people'],
      ['4', '251-500 people'],
      ['5', '501-1000 people'],
      ['6', '1001-4000 people'],
      ['7', '4001 or more people'],
    ],
    countryOptions: [
      ...Object.entries(countries).map<readonly [string, string]>(
        ([code, { name }]) => [code, name]
      ),
      ['worldwide', 'Worldwide'],
    ],
  },
} as Meta<Args>;

export const _RequestTrialForm: Story<Args> = (args) => (
  <RequestTrialForm {...args} />
);
_RequestTrialForm.storyName = 'RequestTrialForm';
