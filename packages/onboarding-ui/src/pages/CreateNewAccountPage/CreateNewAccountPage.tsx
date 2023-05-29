import {
  ActionLink,
  VerticalWizardLayout,
  VerticalWizardLayoutFooter,
  VerticalWizardLayoutForm,
  VerticalWizardLayoutTitle,
} from '@rocket.chat/layout';
import type { ReactElement } from 'react';
import type { SubmitHandler, Validate } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';

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

const CreateNewAccountPage = ({
  onLogin,
  ...props
}: CreateNewAccountPageProps): ReactElement => {
  const { t } = useTranslation();
  return (
    <VerticalWizardLayout>
      <VerticalWizardLayoutTitle>
        {t('page.newAccountForm.title')}
      </VerticalWizardLayoutTitle>
      <VerticalWizardLayoutForm>
        <NewAccountForm {...props} />
      </VerticalWizardLayoutForm>
      <VerticalWizardLayoutFooter>
        <Trans i18nKey='component.createNewAccountPage'>
          Already registered?
          <ActionLink fontScale='h4' onClick={onLogin}>
            Go to login
          </ActionLink>
        </Trans>
      </VerticalWizardLayoutFooter>
    </VerticalWizardLayout>
  );
};

export default CreateNewAccountPage;
