import type { Story, Meta } from '@storybook/react';
import { countries } from 'countries-list';
import type { ComponentProps } from 'react';

import OrganizationInfoForm from './OrganizationInfoForm';

type Args = ComponentProps<typeof OrganizationInfoForm>;

export default {
  title: 'forms/OrganizationInfoForm',
  component: OrganizationInfoForm,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'centered',
  },
  args: {
    currentStep: 1,
    stepCount: 1,
    organizationTypeOptions: [
      ['community', 'Community'],
      ['enterprise', 'Enterprise'],
      ['government', 'Government'],
      ['nonprofit', 'Nonprofit'],
    ],
    organizationIndustryOptions: [
      ['aerospaceDefense', 'Aerospace and Defense'],
      ['blockchain', 'Blockchain'],
      ['consulting', 'Consulting'],
      ['consumerGoods', 'Consumer Packaged Goods'],
      ['contactCenter', 'Contact Center'],
      ['education', 'Education'],
      ['entertainment', 'Entertainment'],
      ['financialServices', 'Financial Services'],
      ['gaming', 'Gaming'],
      ['healthcare', 'Healthcare'],
      ['hospitalityBusinness', 'Hospitality Businness'],
      ['insurance', 'Insurance'],
      ['itSecurity', 'IT Security'],
      ['logistics', 'Logistics'],
      ['manufacturing', 'Manufacturing'],
      ['media', 'Media'],
      ['pharmaceutical', 'Pharmaceutical'],
      ['realEstate', 'Real Estate'],
      ['religious', 'Religious'],
      ['retail', 'Retail'],
      ['socialNetwork', 'Social Network'],
      ['technologyProvider', 'Technology Provider'],
      ['technologyServices', 'Technology Services'],
      ['telecom', 'Telecom'],
      ['utilities', 'Utilities'],
      ['other', 'Other'],
    ],
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

export const _OrganizationInfoForm: Story<Args> = (args) => (
  <OrganizationInfoForm {...args} />
);
_OrganizationInfoForm.storyName = 'OrganizationInfoForm';
