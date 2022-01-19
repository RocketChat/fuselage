import { Box, Callout } from '@rocket.chat/fuselage';
import type { Meta, Story } from '@storybook/react';
import { useState } from 'react';

import type { AdminInfoPayload } from '../../forms/AdminInfoForm/AdminInfoForm';
import type { OrganizationInfoPayload } from '../../forms/OrganizationInfoForm/OrganizationInfoForm';
import type { RegisteredServerPayload } from '../../forms/RegisteredServerForm/RegisteredServerForm';
import AdminInfoPage from '../../pages/AdminInfoPage';
import AwaitingConfirmationPage from '../../pages/AwaitingConfirmationPage';
import ConfirmationProcessPage from '../../pages/ConfirmationProcessPage';
import EmailConfirmedPage from '../../pages/EmailConfirmedPage';
import OrganizationInfoPage from '../../pages/OrganizationInfoPage';
import RegisteredServerPage from '../../pages/RegisteredServerPage';
import StandaloneServerPage from '../../pages/StandaloneServerPage';
import {
  countryOptions,
  logSubmit,
  organizationIndustryOptions,
  organizationSizeOptions,
  organizationTypes,
  validateEmail,
  validatePassword,
  validateUsername,
} from './mocks';

export default {
  title: 'flows/Self-Hosted Registration',
  parameters: {
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta;

export const SelfHostedRegistration: Story = () => {
  const [path, navigateTo] =
    useState<`/${
      | 'admin-info'
      | 'org-info'
      | 'register-server'
      | 'standalone-confirmation'
      | 'cloud-email'
      | 'awaiting'
      | 'home'
      | 'email'
      | 'confirmation-progress'
      | 'email-confirmed'}`>('/admin-info');

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
    (data: RegisteredServerPayload) => {
      setServerRegistration((serverRegistration) => ({
        ...serverRegistration,
        updates: data.updates,
        agreement: data.agreement,
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
        organizationTypeOptions={organizationTypes}
        organizationIndustryOptions={organizationIndustryOptions}
        organizationSizeOptions={organizationSizeOptions}
        countryOptions={countryOptions}
        initialValues={organizationInfo}
        onBackButtonClick={() => navigateTo('/admin-info')}
        onSubmit={handleOrganizationInfoSubmit}
      />
    );
  }

  if (path === '/register-server') {
    return (
      <RegisteredServerPage
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
        onClickContinue={() => navigateTo('/standalone-confirmation')}
      />
    );
  }

  if (path === '/standalone-confirmation') {
    return (
      <StandaloneServerPage
        currentStep={4}
        stepCount={4}
        initialValues={{}}
        onBackButtonClick={() => navigateTo('/register-server')}
        onSubmit={() => navigateTo('/home')}
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

    setTimeout(() => {
      navigateTo('/confirmation-progress');
    }, 5000);

    return (
      <AwaitingConfirmationPage
        emailAddress={serverRegistration.cloudAccountEmail}
        securityCode={serverRegistration.securityCode}
        onChangeEmailRequest={() => navigateTo('/admin-info')}
        onResendEmailRequest={() => undefined}
      />
    );
  }

  if (path === '/confirmation-progress') {
    setTimeout(() => {
      navigateTo('/email-confirmed');
    }, 3000);

    return <ConfirmationProcessPage />;
  }

  if (path === '/email-confirmed') {
    return <EmailConfirmedPage />;
  }

  if (path === '/home') {
    return (
      <Box
        width='100vw'
        height='100vh'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Callout type='success'>This is the home of the workspace.</Callout>
      </Box>
    );
  }

  throw new Error('invalid path');
};
SelfHostedRegistration.storyName = 'Self-Hosted Registration';
