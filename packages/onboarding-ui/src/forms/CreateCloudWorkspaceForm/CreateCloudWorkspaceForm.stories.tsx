import type { Meta, Story } from '@storybook/react';
import type { ComponentProps } from 'react';

import CreateCloudWorkspaceForm from './CreateCloudWorkspaceForm';
import WorkspaceUrlInput from './WorkspaceUrlInput';

type Args = ComponentProps<typeof CreateCloudWorkspaceForm>;

const isValidDomainName = async (domainName: string) => {
  if (domainName.length < 3) {
    return 'Workspace URL should have at least 3 characters';
  }
  const firstSubstring = domainName.slice(0, 3);
  if (firstSubstring === 'rc-') {
    return 'Workspace URL address unavailable';
  }
  const regex = RegExp('^([a-zA-Z0-9]([a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9]))$');
  if (!regex.test(domainName)) {
    return 'Invalid character for Workspace URL';
  }
  return true;
};

export default {
  title: 'forms/CreateCloudWorkspaceForm',
  component: CreateCloudWorkspaceForm,
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on.*' },
  },
  args: {
    serverRegionOptions: [
      ['us', 'US'],
      ['br', 'BR'],
    ],
    languageOptions: [
      ['en', 'English'],
      ['pt', 'Português'],
    ],
    domain: 'rocket.chat',
    validateUrl: isValidDomainName,
    validateEmail: async (email) =>
      email === 'rocket@rocket.chat' ? 'invalid email' : true,
  },
} as Meta<Args>;

export const _CreateCloudWorkspaceForm: Story<Args> = (args) => (
  <CreateCloudWorkspaceForm {...args} />
);

export const _WorkspaceUrlInput: Story<Args> = () => (
  <WorkspaceUrlInput domain='rocket.chat' />
);
_CreateCloudWorkspaceForm.storyName = 'CreateCloudWorkspaceForm';
