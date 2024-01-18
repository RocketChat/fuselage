import { Box, Button, ButtonGroup, Scrollable } from '@rocket.chat/fuselage';
import { useBreakpoints } from '@rocket.chat/fuselage-hooks';
import { Form } from '@rocket.chat/layout';
import type { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';

import { Steps } from '../RegisterOfflineForm';

type PasteStepProps = {
  setStep: (step: string) => void;
};

const PasteStep = ({ setStep }: PasteStepProps): ReactElement => {
  const { t } = useTranslation();
  const breakpoints = useBreakpoints();
  const isMobile = !breakpoints.includes('md');
  const {
    register,
    formState: { isSubmitting, isValidating, isSubmitSuccessful },
  } = useFormContext();

  return (
    <>
      <Form.Container>
        <Box mbe='24px' fontScale='p2'>
          <Trans key={'form.registerOfflineForm.pasteStep.description'}>
            1. In <strong>cloud.rocket.chat</strong> get the generated text and
            paste below to complete your registration process
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
              {...register('token', { required: true })}
              is='textarea'
              backgroundColor={'dark'}
              height='x108'
              fontFamily='mono'
              fontScale='p2'
              color='white'
              style={{ wordBreak: 'break-all', resize: 'none' }}
              placeholder={t('component.form.action.pasteHere')}
              autoComplete='off'
              autoCorrect='off'
              autoCapitalize='off'
              spellCheck='false'
            />
          </Scrollable>
        </Box>
      </Form.Container>
      <Form.Footer>
        <Box display='flex' flexDirection='column'>
          <ButtonGroup vertical={isMobile}>
            <Button
              type='submit'
              primary
              loading={isSubmitting || isValidating}
              disabled={isSubmitSuccessful}
            >
              {t('component.form.action.completeRegistration')}
            </Button>
            <Button type='button' onClick={() => setStep(Steps.COPY)}>
              {t('component.form.action.back')}
            </Button>
          </ButtonGroup>
        </Box>
      </Form.Footer>
    </>
  );
};

export default PasteStep;
