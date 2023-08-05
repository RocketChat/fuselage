import { Box } from '@rocket.chat/fuselage';
import { ActionLink, BackgroundLayer } from '@rocket.chat/layout';
import type { ReactElement } from 'react';
import type { SubmitHandler, Validate } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';

import type { FormPageLayoutStyleProps } from '../../Types';
import FormPageLayout from '../../common/FormPageLayout';
import ResetPasswordForm from '../../forms/ResetPasswordForm';
import type { ResetPasswordFormPayload } from '../../forms/ResetPasswordForm/ResetPasswordForm';

type ResetPasswordPageProps = {
  initialValues?: ResetPasswordFormPayload;
  validateEmail: Validate<string>;
  onSubmit: SubmitHandler<ResetPasswordFormPayload>;
  onLogin: () => void;
};

const pageLayoutStyleProps: FormPageLayoutStyleProps = {
  justifyContent: 'center',
};

const ResetPasswordPage = ({
  onLogin,
  ...props
}: ResetPasswordPageProps): ReactElement => {
  const { t } = useTranslation();
  return (
    <BackgroundLayer>
      <FormPageLayout
        title={t('page.resetPasswordPage.title')}
        styleProps={pageLayoutStyleProps}
      >
        <ResetPasswordForm {...props} />
        <Box fontScale='p2' pbs={40}>
          <Trans i18nKey='component.wantToLogin'>
            Want to log in?
            <ActionLink fontScale='p2' onClick={onLogin}>
              Go to login
            </ActionLink>
          </Trans>
        </Box>
      </FormPageLayout>
    </BackgroundLayer>
  );
};

export default ResetPasswordPage;
