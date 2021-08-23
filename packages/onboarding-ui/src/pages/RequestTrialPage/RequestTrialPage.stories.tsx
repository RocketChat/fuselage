import type { Story, Meta } from '@storybook/react';
import { countries } from 'countries-list';
import type { ComponentProps } from 'react';

import RequestTrialPage from './RequestTrialPage';

type Args = ComponentProps<typeof RequestTrialPage>;

export default {
  title: 'pages/RequestTrialPage',
  component: RequestTrialPage,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
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
      ['7', '4000 or more people'],
    ],
    countryOptions: [
      ...Object.entries(countries).map<readonly [string, string]>(
        ([code, { name }]) => [code, name]
      ),
      ['worldwide', 'Worldwide'],
    ],
  },
} as Meta<Args>;

export const _RequestTrialPage: Story<Args> = (args) => (
  <RequestTrialPage {...args} />
);
_RequestTrialPage.storyName = 'RequestTrialPage';
