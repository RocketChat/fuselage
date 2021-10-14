import { Box, Button } from '@rocket.chat/fuselage';
import colors from '@rocket.chat/fuselage-tokens/colors.json';
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
  <Box fontScale='c1' color={colors.n900}>
    <Trans i18nKey='component.emailCodeFallback'>
      Didn’t receive email?
      <Button nude info onClick={onResendEmailRequest}>
        Resend
      </Button>
      or
      <Button nude info onClick={onChangeEmailRequest}>
        Change email
      </Button>
    </Trans>
  </Box>
);

export default EmailCodeFallback;
