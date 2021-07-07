import { SelectOptions } from '@rocket.chat/fuselage';
import type { Story, Meta } from '@storybook/react';
import { SubmitHandler } from 'react-hook-form';

import OrganizationInfoForm, {
  OrganizationInfoFormInputs,
} from './OrganizationInfoForm';

export default {
  title: 'forms/OrganizationInfoForm',
  component: OrganizationInfoForm,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
} as Meta;

const selectOptions: SelectOptions = [
  ['test', 'test'],
  ['test2', 'test2'],
];

const onSubmit: SubmitHandler<OrganizationInfoFormInputs> = (data) =>
  console.log(data);

export const _OrganizationInfoForm: Story = (args) => (
  <OrganizationInfoForm
    organizationTypeOptions={selectOptions}
    organizationIndustryOptions={selectOptions}
    organizationSizeOptions={selectOptions}
    countryOptions={selectOptions}
    onSubmit={onSubmit}
    {...args}
  />
);
_OrganizationInfoForm.storyName = 'OrganizationInfoForm';
