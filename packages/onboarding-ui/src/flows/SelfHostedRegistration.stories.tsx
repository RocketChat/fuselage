import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react';
import { useCallback, useState } from 'react';

import type { AdminInfoPayload } from '../forms/AdminInfoForm/AdminInfoForm';
import type { OrganizationInfoPayload } from '../forms/OrganizationInfoForm/OrganizationInfoForm';
import AdminInfoPage from '../pages/AdminInfoPage';
import AwaitingConfirmationPage from '../pages/AwaitingConfirmationPage';
import CloudAccountEmailPage from '../pages/CloudAccountEmailPage';
import OrganizationInfoPage from '../pages/OrganizationInfoPage';
import RegisterServerPage from '../pages/RegisterServerPage';

type Args = {};

export default {
  title: 'flows/Self-Hosted Registration',
  parameters: {
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta<Args>;

export const _SelfHostedRegistration: Story<Args> = () => {
  const [path, setPath] =
    useState<`/${
      | 'admin-info'
      | 'org-info'
      | 'register-server'
      | 'cloud-email'
      | 'awaiting'}`>('/admin-info');

  const [adminInfo, setAdminInfo] =
    useState<Omit<AdminInfoPayload, 'password'>>();

  const [organizationInfo, setOrganizationInfo] =
    useState<OrganizationInfoPayload>();

  const handleAdminInfoSubmit = useCallback((data: AdminInfoPayload) => {
    action('submit')(data);
    setAdminInfo(data);
    setPath('/org-info');
  }, []);

  const handleOrganizationInfoSubmit = useCallback(
    (data: OrganizationInfoPayload) => {
      action('submit')(data);
      setOrganizationInfo(data);
      setPath('/register-server');
    },
    []
  );

  if (path === '/admin-info') {
    return (
      <AdminInfoPage
        currentStep={1}
        stepCount={4}
        passwordRulesHint=''
        validateUsername={() => true}
        validateEmail={() => true}
        validatePassword={() => true}
        initialValues={adminInfo}
        onSubmit={handleAdminInfoSubmit}
      />
    );
  }

  if (path === '/org-info') {
    return (
      <OrganizationInfoPage
        currentStep={2}
        stepCount={4}
        organizationTypeOptions={[]}
        organizationIndustryOptions={[]}
        organizationSizeOptions={[]}
        countryOptions={[]}
        onBackButtonClick={() => setPath('/admin-info')}
        initialValues={organizationInfo}
        onSubmit={handleOrganizationInfoSubmit}
      />
    );
  }

  if (path === '/register-server') {
    return <RegisterServerPage />;
  }

  if (path === '/cloud-email') {
    return <CloudAccountEmailPage />;
  }

  if (path === '/awaiting') {
    return <AwaitingConfirmationPage />;
  }

  throw new Error('invalid path');
};
_SelfHostedRegistration.storyName = 'Self-Hosted Registration';

// AdminInfo -> OrganizationInfo -> RegisterServer -> CloudAccountEmail -> AwaitingConfirmation -> [envio de email] -> ConfirmationProcess -> EmailConfirmed
