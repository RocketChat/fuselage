import {
  Box,
  ButtonGroup,
  Button,
  Field,
  EmailInput,
  CheckBox,
  Icon,
} from '@rocket.chat/fuselage';
import { useUniqueId, useBreakpoints } from '@rocket.chat/fuselage-hooks';
import { Form, List, ActionLink } from '@rocket.chat/layout';
import type { ReactElement } from 'react';
import type { SubmitHandler, Validate } from 'react-hook-form';
import { useForm, FormProvider } from 'react-hook-form';
import { useTranslation, Trans } from 'react-i18next';

export type RegisterServerPayload = {
  email: string;
  registerType: 'registered' | 'standalone';
  agreement: boolean;
  updates: boolean;
};

type RegisterServerFormProps = {
  currentStep: number;
  stepCount: number;
  initialValues?: Partial<RegisterServerPayload>;
  validateEmail?: Validate<string>;
  onSubmit: SubmitHandler<RegisterServerPayload>;
  onBackButtonClick: () => void;
  onClickRegisterLater: () => void;
  termsHref?: string;
  policyHref?: string;
  offline?: boolean;
};

const RegisterServerForm = ({
  currentStep,
  stepCount,
  initialValues,
  validateEmail,
  offline,
  onSubmit,
  onBackButtonClick,
  onClickRegisterLater,
  termsHref = 'https://rocket.chat/terms',
  policyHref = 'https://rocket.chat/privacy',
}: RegisterServerFormProps): ReactElement => {
  const { t } = useTranslation();
  const emailField = useUniqueId();

  const breakpoints = useBreakpoints();
  const isMobile = !breakpoints.includes('md');

  const form = useForm<RegisterServerPayload>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      registerType: 'registered',
      agreement: false,
      updates: true,
      ...initialValues,
    },
  });

  const {
    register,
    formState: { isValidating, isSubmitting, isValid, errors },
    handleSubmit,
  } = form;

  return (
    <FormProvider {...form}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Header>
          <Form.Steps currentStep={currentStep} stepCount={stepCount} />
          <Form.Title>{t('form.registeredServerForm.title')}</Form.Title>
        </Form.Header>
        <Box mbe={24} mbs={16}>
          <List>
            <List.Item fontScale='p2' icon='check'>
              {t('form.registeredServerForm.included.push')}
            </List.Item>
            <List.Item fontScale='p2' icon='check'>
              {t('form.registeredServerForm.included.externalProviders')}
            </List.Item>
            <List.Item fontScale='p2' icon='check'>
              {t('form.registeredServerForm.included.apps')}
            </List.Item>
          </List>
        </Box>
        {!offline && (
          <Form.Container>
            <Field>
              <Field.Label
                display='flex'
                alignItems='center'
                htmlFor={emailField}
              >
                {t('form.registeredServerForm.fields.accountEmail.inputLabel')}
                <Icon
                  title={t(
                    'form.registeredServerForm.fields.accountEmail.tooltipLabel'
                  )}
                  mis={4}
                  size='x16'
                  name='info'
                />
              </Field.Label>
              <Field.Row>
                <EmailInput
                  {...register('email', {
                    required: true,
                    validate: validateEmail,
                  })}
                  placeholder={t(
                    'form.registeredServerForm.fields.accountEmail.inputPlaceholder'
                  )}
                  id={emailField}
                />
              </Field.Row>
              {errors.email && (
                <Field.Error>{t('component.form.requiredField')}</Field.Error>
              )}
            </Field>
            <Box mbs={24}>
              <Box
                mbe={8}
                display='flex'
                flexDirection='row'
                alignItems='flex-start'
                fontScale='c1'
                lineHeight={20}
              >
                <CheckBox mie={8} {...register('updates')} />{' '}
                <Box is='label' htmlFor='updates'>
                  {t('form.registeredServerForm.keepInformed')}
                </Box>
              </Box>
              <Box
                display='flex'
                flexDirection='row'
                alignItems='flex-start'
                color='default'
                fontScale='c1'
                lineHeight={20}
              >
                <CheckBox
                  mie={8}
                  {...register('agreement', { required: true })}
                />{' '}
                <Box is='label' htmlFor='agreement' withRichContent>
                  <Trans i18nKey='component.form.termsAndConditions'>
                    I agree with
                    <a
                      href={termsHref}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Terms and Conditions
                    </a>
                    and
                    <a
                      href={policyHref}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Privacy Policy
                    </a>
                  </Trans>
                </Box>
              </Box>

              <Box mbs={32} fontScale='c1' htmlFor='agreement' withRichContent>
                {t('form.registeredServerForm.agreeToReceiveUpdates')}
              </Box>
            </Box>
          </Form.Container>
        )}
        {offline && (
          <Form.Container>
            <Box mbs={32} fontScale='c1' withRichContent>
              {t('form.registeredServerForm.notConnectedToInternet')}
            </Box>
          </Form.Container>
        )}
        <Form.Footer>
          <ButtonGroup vertical={isMobile} flexGrow={1}>
            <Button onClick={onBackButtonClick}>
              {t('component.form.action.back')}
            </Button>
            <Button
              type='submit'
              primary
              disabled={isValidating || isSubmitting || !isValid}
            >
              {offline
                ? t('component.form.action.registerNow')
                : t('component.form.action.register')}
            </Button>

            {offline && (
              <ButtonGroup flexGrow={1} align='end' withTruncatedText>
                <ActionLink onClick={onClickRegisterLater}>
                  {t('form.registeredServerForm.registerLater')}
                </ActionLink>
              </ButtonGroup>
            )}
          </ButtonGroup>
        </Form.Footer>
      </Form>
    </FormProvider>
  );
};

export default RegisterServerForm;
