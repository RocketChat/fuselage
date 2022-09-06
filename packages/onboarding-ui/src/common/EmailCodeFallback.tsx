import { Box } from '@rocket.chat/fuselage';
import { ActionLink } from '@rocket.chat/layout';
import type { ReactElement } from 'react';
import { Trans } from 'react-i18next';

type EmailCodeFallbackProps = {
  onResendEmailRequest: () => void;
  onChangeEmailRequest: () => void;
};

const EmailCodeFallback = ({
  onResendEmailRequest,
  onChangeEmailRequest,
}: EmailCodeFallbackProps): ReactElement => (
  <Box fontScale='c1'>
    <Trans i18nKey='component.emailCodeFallback'>
      Didn’t receive email?
      <ActionLink onClick={onResendEmailRequest}>Resend</ActionLink>
      or
      <ActionLink onClick={onChangeEmailRequest}>Change email</ActionLink>
    </Trans>
  </Box>
);

export default EmailCodeFallback;
