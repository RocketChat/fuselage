import {
  Box,
  Button,
  ButtonGroup,
  CheckBox,
  Label,
  Scrollable,
} from '@rocket.chat/fuselage';
import { useBreakpoints, useClipboard } from '@rocket.chat/fuselage-hooks';
import { Form } from '@rocket.chat/layout';
import { type ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';

import { Steps } from '../RegisterOfflineForm';

type CopyStepProps = {
  termsHref: string;
  policyHref: string;
  clientKey: string;
  onBackButtonClick: () => void;
  setStep: (step: string) => void;
};

const CopyStep = ({
  termsHref,
  policyHref,
  clientKey,
  setStep,
  onBackButtonClick,
}: CopyStepProps): ReactElement => {
  const { t } = useTranslation();
  const breakpoints = useBreakpoints();
  const isMobile = !breakpoints.includes('md');

  const {
    register,
    formState: { isValid },
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
          <Button icon='copy' primary onClick={() => clipboard.copy()} />
        </Box>
        <Box mbs={24}>
          <Box
            display='flex'
            flexDirection='row'
            alignItems='flex-start'
            color='default'
            fontScale='c1'
            lineHeight={20}
          >
            <Box mie={8}>
              <CheckBox {...register('agreement', { required: true })} />{' '}
            </Box>
            <Label required htmlFor='agreement' withRichContent>
              <Trans i18nKey='component.form.termsAndConditions'>
                I agree with
                <a href={termsHref} target='_blank' rel='noopener noreferrer'>
                  Terms and Conditions
                </a>
                and
                <a href={policyHref} target='_blank' rel='noopener noreferrer'>
                  Privacy Policy
                </a>
              </Trans>
            </Label>
          </Box>
        </Box>
      </Form.Container>
      <Form.Footer>
        <Box display='flex' flexDirection='column'>
          <ButtonGroup vertical={isMobile} flexGrow={1}>
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
