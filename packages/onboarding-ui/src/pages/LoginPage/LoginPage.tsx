import { Box } from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';

import ActionLink from '../../common/ActionLink';
import BackgroundLayer from '../../common/BackgroundLayer';
import { OnboardingLogo } from '../../common/OnboardingLogo';
import LoginForm from '../../forms/LoginForm';
import type { LoginFormPayload } from '../../forms/LoginForm/LoginForm';
import TotpForm from '../../forms/TotpForm';
import type { TotpFormPayload } from '../../forms/TotpForm/TotpForm';

type TotpFormProps = {
  initialValues?: TotpFormPayload;
  onChangeTotpForm: () => void;
  isBackupCode?: boolean;
  formError?: string;
  onSubmit: SubmitHandler<TotpFormPayload>;
};

type LoginPageProps = {
  initialValues?: Omit<LoginFormPayload, 'password'>;
  onChangeForm: () => void;
  onResetPassword: () => void;
  formError?: string;
  isPasswordLess: boolean;
  isMfa: boolean;
  onCreateAccount: () => void;
  mfaProps?: TotpFormProps;
  onSubmit: SubmitHandler<LoginFormPayload>;
};

const LoginPage = ({
  onCreateAccount,
  ...props
}: LoginPageProps): ReactElement => {
  const { t } = useTranslation();
  const { isMfa, mfaProps } = props;

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
        <OnboardingLogo />
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
            {isMfa && !!mfaProps ? (
              <TotpForm {...mfaProps} />
            ) : (
              <LoginForm {...props} />
            )}
          </Box>
        </Box>
        <Box mb='x30' fontScale='p2'>
          {!isMfa && (
            <Trans i18nKey='page.loginPage.createAccount.label'>
              New here?
              <ActionLink
                fontWeight={400}
                fontScale='p2'
                onClick={onCreateAccount}
              >
                Create account
              </ActionLink>
            </Trans>
          )}
        </Box>
      </Box>
    </BackgroundLayer>
  );
};

export default LoginPage;
