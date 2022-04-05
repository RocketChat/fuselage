import { Box, ButtonGroup, Button } from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm, FormProvider } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Form from '../../common/Form';
import List from '../../common/List';

export type StandaloneServerPayload = {
  registerType: 'registered' | 'standalone';
};

type StandaloneServerFormProps = {
  currentStep: number;
  stepCount: number;
  initialValues?: Partial<StandaloneServerPayload>;
  onSubmit: SubmitHandler<StandaloneServerPayload>;
  onBackButtonClick: () => void;
};

const StandaloneServerForm = ({
  currentStep,
  stepCount,
  initialValues,
  onSubmit,
  onBackButtonClick,
}: StandaloneServerFormProps): ReactElement => {
  const { t } = useTranslation();

  const form = useForm<StandaloneServerPayload>({
    mode: 'onChange',
    defaultValues: {
      registerType: 'standalone',
      ...initialValues,
    },
  });

  const {
    formState: { isValidating, isSubmitting, isValid },
    handleSubmit,
  } = form;

  return (
    <FormProvider {...form}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Steps currentStep={currentStep} stepCount={stepCount} />
        <Form.Title>{t('form.standaloneServerForm.title')}</Form.Title>

        <Box mbe='x24' mbs='x16'>
          <List>
            <List.Item fontScale='c2' icon='warning' iconColor='warning'>
              {t('form.standaloneServerForm.servicesUnavailable')}
            </List.Item>
            <List.Item fontScale='c1' icon='info' iconColor='neutral'>
              {t('form.standaloneServerForm.publishOwnApp')}
            </List.Item>
            <List.Item fontScale='c1' icon='info' iconColor='neutral'>
              {t('form.standaloneServerForm.manuallyIntegrate')}
            </List.Item>
          </List>
        </Box>
        <Form.Footer>
          <ButtonGroup>
            <Button onClick={onBackButtonClick}>
              {t('component.form.action.back')}
            </Button>
            <Button
              type='submit'
              primary
              disabled={isValidating || isSubmitting || !isValid}
            >
              {t('component.form.action.confirm')}
            </Button>
          </ButtonGroup>
        </Form.Footer>
      </Form>
    </FormProvider>
  );
};

export default StandaloneServerForm;
