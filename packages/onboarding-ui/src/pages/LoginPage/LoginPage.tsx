import { Box } from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';

import ActionLink from '../../common/ActionLink';
import BackgroundLayer from '../../common/BackgroundLayer';
import { OnboardingLogo } from '../../common/OnboardingLogo';
import { LoginDefaultForm, LoginPasswordLessForm } from '../../forms/LoginForm';

type LoginPasswordLessPayload = {
  email: string;
};

type LoginDefaultPayload = {
  email: string;
  password: string;
};

type LoginPasswordLessProps = {
  initialValues?: Partial<LoginPasswordLessPayload>;
  onChangeForm: () => void;
  onSubmit: SubmitHandler<LoginPasswordLessPayload>;
};

type LoginDefaultProps = {
  initialValues?: Omit<LoginDefaultPayload, 'password'>;
  onSendLoginLinkForm: () => void;
  onResetPassword: () => void;
  error?: string;
  onSubmit: SubmitHandler<LoginDefaultPayload>;
};

type LoginPageProps = {
  loginPasswordLessProps: LoginPasswordLessProps;
  loginDefaultProps: LoginDefaultProps;
  initialValues?: Partial<LoginPasswordLessPayload>;
  isPasswordLessFlow: boolean;
  onCreateAccount: () => void;
};

const LoginPage = (props: LoginPageProps): ReactElement => {
  const { t } = useTranslation();
  const {
    onCreateAccount,
    isPasswordLessFlow = false,
    loginPasswordLessProps,
    loginDefaultProps,
  } = props;
  return (
    <BackgroundLayer>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        textAlign='center'
        width='100%'
        maxWidth={576}
        paddingBlock={32}
        paddingInline={16}
      >
        <OnboardingLogo tag='Cloud' />
        <Box
          fontWeight={500}
          width='100%'
          mb='x18'
          fontSize='x42'
          lineHeight='x62'
          fontFamily='sans'
        >
          {t('page.loginPage.title.cloud')}
        </Box>

        <Box width='full' backgroundColor='white'>
          <Box fontScale='c1'>
            {isPasswordLessFlow ? (
              <LoginPasswordLessForm {...loginPasswordLessProps} />
            ) : (
              <LoginDefaultForm {...loginDefaultProps} />
            )}
          </Box>
        </Box>
        <Box mb='x30' fontScale='p1'>
          <Trans i18nKey='page.loginPage.createAccount.label'>
            New here?
            <ActionLink
              fontWeight={400}
              fontSize='p1'
              onClick={onCreateAccount}
            >
              Create account
            </ActionLink>
          </Trans>
        </Box>
      </Box>
    </BackgroundLayer>
  );
};

export default LoginPage;
