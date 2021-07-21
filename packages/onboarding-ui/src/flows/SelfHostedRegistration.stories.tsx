import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react';
import { useState } from 'react';

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

const logSubmit =
  <T extends (...args: any[]) => any>(onSubmit: T) =>
  (...args: Parameters<T>): ReturnType<T> => {
    action('submit')(...args);
    return onSubmit(...args);
  };

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const simulateNetworkDelay = () => delay(3000 * Math.random());

const fetchMock =
  <T extends (...args: any[]) => any>(endpoint: string, handler: T) =>
  async (...args: Parameters<T>): Promise<ReturnType<T>> => {
    action(`fetch(${endpoint})`)(...args);
    await simulateNetworkDelay();
    return handler(...args);
  };

const validateUsername = fetchMock('/username/validate', (username: string) => {
  if (username === 'admin') {
    return `Username "${username}" is not available`;
  }

  return true;
});

const validateEmail = fetchMock('/email/validate', (email: string) => {
  if (email === 'admin@rocket.chat') {
    return `Email "${email}" is already in use`;
  }

  return true;
});

const validatePassword = (password: string) => {
  if (password.length < 6) {
    return `Password is too short`;
  }

  return true;
};

export const SelfHostedRegistration: Story = () => {
  const [path, navigateTo] =
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

  const handleAdminInfoSubmit = logSubmit((data: AdminInfoPayload) => {
    setAdminInfo(data);
    navigateTo('/org-info');
  });

  const handleOrganizationInfoSubmit = logSubmit(
    (data: OrganizationInfoPayload) => {
      setOrganizationInfo(data);
      navigateTo('/register-server');
    }
  );

  const handleRegisterServerSubmit = logSubmit(
    (data: RegisterServerPayload) => {
      switch (data.registerType) {
        case 'standalone': {
          navigateTo('/home');
          break;
        }

        case 'registered': {
          setServerRegistration((serverRegistration) => ({
            ...serverRegistration,
            updates: data.updates,
            agreement: data.agreement,
          }));
          navigateTo('/cloud-email');
          break;
        }
      }
    }
  );

  const handleCloudAccountEmailSubmit = logSubmit(
    (data: CloudAccountEmailPayload) => {
      setServerRegistration((serverRegistration) => ({
        ...serverRegistration,
        cloudAccountEmail: data.email,
        securityCode: 'Funny Tortoise In The Hat',
      }));
      navigateTo('/awaiting');
    }
  );

  if (path === '/admin-info') {
    return (
      <AdminInfoPage
        currentStep={1}
        stepCount={4}
        passwordRulesHint=''
        validateUsername={validateUsername}
        validateEmail={validateEmail}
        validatePassword={validatePassword}
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
        onBackButtonClick={() => navigateTo('/admin-info')}
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
          ...(serverRegistration?.updates && {
            updates: serverRegistration?.updates,
          }),
          ...(serverRegistration?.agreement && {
            agreement: serverRegistration?.agreement,
          }),
        }}
        onBackButtonClick={() => navigateTo('/org-info')}
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
        onBackButtonClick={() => navigateTo('/register-server')}
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
