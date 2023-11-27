import { Box, Label } from '@rocket.chat/fuselage';
import { Form } from '@rocket.chat/layout';
import type { ReactElement } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import EmailCodeFallback from '../../common/EmailCodeFallback';

type AwaitingConfirmationFormProps = {
  currentStep: number;
  stepCount: number;
  securityCode: string;
  emailAddress: string;
  onResendEmailRequest: () => void;
  onChangeEmailRequest: () => void;
};

const AwaitingConfirmationForm = ({
  currentStep,
  stepCount,
  securityCode,
  emailAddress,
  onResendEmailRequest,
  onChangeEmailRequest,
}: AwaitingConfirmationFormProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <Form>
      <Form.Header>
        <Form.Steps currentStep={currentStep} stepCount={stepCount} />
        <Form.Title>{t('form.awaitConfirmationForm.title')}</Form.Title>
      </Form.Header>
      <Form.Container>
        <Box fontScale='p2' mbe={24}>
          <Trans i18nKey='form.awaitConfirmationForm.content.sentEmail'>
            Email sent to <strong>{{ emailAddress }}</strong> with a
            confirmation link.Please verify that the security code below matches
            the one in the email.
          </Trans>
        </Box>
        <Label display='block'>
          {t('form.awaitConfirmationForm.content.securityCode')}
          <Box
            padding='12px'
            width='full'
            fontScale='p2b'
            lineHeight='20px'
            backgroundColor='tint'
            elevation='1'
          >
            {securityCode}
          </Box>
        </Label>
      </Form.Container>
      <Form.Footer>
        <EmailCodeFallback
          onResendEmailRequest={onResendEmailRequest}
          onChangeEmailRequest={onChangeEmailRequest}
        />
      </Form.Footer>
    </Form>
  );
};

export default AwaitingConfirmationForm;
