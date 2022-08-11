import { Box } from '@rocket.chat/fuselage';
import { ActionLink, BackgroundLayer } from '@rocket.chat/layout';
import type { ReactElement } from 'react';
import type { SubmitHandler, Validate } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';

import type { FormPageLayoutStyleProps } from '../../Types';
import FormPageLayout from '../../common/FormPageLayout';
import NewAccountForm from '../../forms/NewAccountForm';
import type { NewAccountPayload } from '../../forms/NewAccountForm/NewAccountForm';

type CreateNewAccountPageProps = {
  initialValues?: Omit<NewAccountPayload, 'password'>;
  validateEmail: Validate<string>;
  validatePassword: Validate<string>;
  validateConfirmationPassword: Validate<string>;
  onSubmit: SubmitHandler<NewAccountPayload>;
  onLogin: () => void;
};

const pageLayoutStyleProps: FormPageLayoutStyleProps = {
  justifyContent: 'center',
};

const CreateNewAccountPage = ({
  onLogin,
  ...props
}: CreateNewAccountPageProps): ReactElement => {
  const { t } = useTranslation();
  return (
    <BackgroundLayer>
      <FormPageLayout
        title={t('page.newAccountForm.title')}
        styleProps={pageLayoutStyleProps}
      >
        <NewAccountForm {...props} />
        <Box fontScale='h4' pbs='x40'>
          <Trans i18nKey='component.createNewAccountPage'>
            Already registered?
            <ActionLink fontScale='h4' onClick={onLogin}>
              Go to login
            </ActionLink>
          </Trans>
        </Box>
      </FormPageLayout>
    </BackgroundLayer>
  );
};

export default CreateNewAccountPage;
