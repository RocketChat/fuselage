import { Box, Button, ButtonGroup, Scrollable } from '@rocket.chat/fuselage';
import {
  useBreakpoints,
  useClipboard,
  useUniqueId,
} from '@rocket.chat/fuselage-hooks';
import { Form } from '@rocket.chat/layout';
import { type ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';

import AgreeTermsField from '../../../common/AgreeTermsField';
import { Steps } from '../RegisterOfflineForm';

type CopyStepProps = {
  termsHref: string;
  policyHref: string;
  clientKey: string;
  onCopySecurityCode: () => void;
  onBackButtonClick: () => void;
  setStep: (step: string) => void;
};

const CopyStep = ({
  termsHref = 'https://rocket.chat/terms',
  policyHref = 'https://rocket.chat/privacy',
  clientKey,
  setStep,
  onCopySecurityCode,
  onBackButtonClick,
}: CopyStepProps): ReactElement => {
  const { t } = useTranslation();
  const agreementField = useUniqueId();
  const breakpoints = useBreakpoints();
  const isMobile = !breakpoints.includes('md');

  const {
    control,
    formState: { isValid, errors },
  } = useFormContext();

  const clipboard = useClipboard(clientKey);

  return (
    <>
      <Form.Container>
        <Box mbe='24px' fontScale='p2'>
          <Trans key={'form.registerOfflineForm.copyStep.description'}>
            If for any reason your workspace can’t be connected to the internet,
            follow these steps:
            <Box mbe='24px' />
            1. Go to: <strong>{'cloud.rocket.chat > Workspaces'}</strong> and
            click “<strong>Register self-managed</strong>”<br />
            2. Click “<strong>Continue offline</strong>”
            <br />
            3. In the <strong>Register offline workspace</strong> dialog in
            cloud.rocket.chat, paste the token in the box below
          </Trans>
        </Box>
        <Box
          display='flex'
          flexDirection='column'
          alignItems='stretch'
          padding={16}
          flexGrow={1}
          backgroundColor='dark'
        >
          <Scrollable vertical>
            <Box
              height='x108'
              fontFamily='mono'
              fontScale='p2'
              color='white'
              style={{ wordBreak: 'break-all' }}
            >
              {clientKey}
            </Box>
          </Scrollable>
          <Button
            icon='copy'
            primary
            onClick={() => {
              onCopySecurityCode();
              clipboard.copy();
            }}
          />
        </Box>
        <AgreeTermsField
          agreementField={agreementField}
          termsHref={termsHref}
          policyHref={policyHref}
          control={control}
          errors={errors}
        />
      </Form.Container>
      <Form.Footer>
        <Box display='flex' flexDirection='column'>
          <ButtonGroup vertical={isMobile}>
            <Button
              type='button'
              primary
              disabled={!isValid}
              onClick={() => {
                setStep(Steps.PASTE);
              }}
            >
              {t('component.form.action.next')}
            </Button>
            <Button type='button' onClick={onBackButtonClick}>
              {t('component.form.action.back')}
            </Button>
          </ButtonGroup>
        </Box>
      </Form.Footer>
    </>
  );
};

export default CopyStep;
