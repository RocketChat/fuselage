import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react';
import { useCallback, useState } from 'react';

import type { AdminInfoPayload } from '../forms/AdminInfoForm/AdminInfoForm';
import type { CloudAccountEmailPayload } from '../forms/CloudAccountEmailForm/CloudAccountEmailForm';
import type { OrganizationInfoPayload } from '../forms/OrganizationInfoForm/OrganizationInfoForm';
import type { RegisterServerPayload } from '../forms/RegisterServerForm/RegisterServerForm';
import AdminInfoPage from '../pages/AdminInfoPage';
import AwaitingConfirmationPage from '../pages/AwaitingConfirmationPage';
import CloudAccountEmailPage from '../pages/CloudAccountEmailPage';
import OrganizationInfoPage from '../pages/OrganizationInfoPage';
import RegisterServerPage from '../pages/RegisterServerPage';

export default {
  title: 'flows/Self-Hosted Registration',
  parameters: {
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta;

export const SelfHostedRegistration: Story = () => {
  const [path, setPath] =
    useState<`/${
      | 'admin-info'
      | 'org-info'
      | 'register-server'
      | 'cloud-email'
      | 'awaiting'
      | 'home'}`>('/admin-info');

  const [adminInfo, setAdminInfo] =
    useState<Omit<AdminInfoPayload, 'password'>>();

  const [organizationInfo, setOrganizationInfo] =
    useState<OrganizationInfoPayload>();

  const [serverRegistration, setServerRegistration] = useState<{
    updates?: boolean;
    agreement?: boolean;
    cloudAccountEmail?: string;
    securityCode?: string;
  }>();

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

  const handleRegisterServerSubmit = useCallback(
    (data: RegisterServerPayload) => {
      action('submit')(data);

      switch (data.registerType) {
        case 'standalone': {
          setPath('/home');
          break;
        }

        case 'registered': {
          setServerRegistration((serverRegistration) => ({
            ...serverRegistration,
            updates: data.updates,
            agreement: data.agreement,
          }));
          setPath('/cloud-email');
          break;
        }
      }
    },
    []
  );

  const handleCloudAccountEmailSubmit = useCallback(
    (data: CloudAccountEmailPayload) => {
      action('submit')(data);

      setServerRegistration((serverRegistration) => ({
        ...serverRegistration,
        cloudAccountEmail: data.email,
        securityCode: 'Funny Tortoise In The Hat',
      }));
      setPath('/awaiting');
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
        initialValues={organizationInfo}
        onBackButtonClick={() => setPath('/admin-info')}
        onSubmit={handleOrganizationInfoSubmit}
      />
    );
  }

  if (path === '/register-server') {
    return (
      <RegisterServerPage
        currentStep={3}
        stepCount={4}
        initialValues={{
          updates: serverRegistration?.updates,
          agreement: serverRegistration?.agreement,
        }}
        onBackButtonClick={() => setPath('/org-info')}
        onSubmit={handleRegisterServerSubmit}
      />
    );
  }

  if (path === '/cloud-email') {
    return (
      <CloudAccountEmailPage
        currentStep={4}
        stepCount={4}
        initialValues={{}}
        onBackButtonClick={() => setPath('/register-server')}
        onSubmit={handleCloudAccountEmailSubmit}
      />
    );
  }

  if (path === '/awaiting') {
    if (!serverRegistration?.cloudAccountEmail) {
      throw new Error('missing cloud account email');
    }

    if (!serverRegistration?.securityCode) {
      throw new Error('missing verification code');
    }

    return (
      <AwaitingConfirmationPage
        emailAddress={serverRegistration.cloudAccountEmail}
        securityCode={serverRegistration.securityCode}
        onChangeEmailRequest={() => undefined}
        onResendEmailRequest={() => undefined}
      />
    );
  }

  throw new Error('invalid path');
};
SelfHostedRegistration.storyName = 'Self-Hosted Registration';

// AdminInfo -> OrganizationInfo -> RegisterServer -> CloudAccountEmail -> AwaitingConfirmation -> [envio de email] -> ConfirmationProcess -> EmailConfirmed
