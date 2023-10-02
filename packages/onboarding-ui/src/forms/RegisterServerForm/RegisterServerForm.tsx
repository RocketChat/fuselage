import {
  Box,
  ButtonGroup,
  Button,
  Field,
  EmailInput,
  CheckBox,
  Icon,
  FieldLabel,
  FieldRow,
  FieldError,
} from '@rocket.chat/fuselage';
import { useUniqueId, useBreakpoints } from '@rocket.chat/fuselage-hooks';
import { Form, ActionLink } from '@rocket.chat/layout';
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
    formState: { isSubmitting, isValid, errors },
    handleSubmit,
  } = form;

  return (
    <FormProvider {...form}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Header>
          <Form.Steps currentStep={currentStep} stepCount={stepCount} />
          <Form.Title>{t('form.registeredServerForm.title')}</Form.Title>
        </Form.Header>
        {!offline && (
          <Form.Container>
            <Field>
              <FieldLabel
                required
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
              </FieldLabel>
              <FieldRow>
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
              </FieldRow>
              {errors.email && (
                <FieldError>{t('component.form.requiredField')}</FieldError>
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
                <Box mie={8}>
                  <CheckBox {...register('updates')} />{' '}
                </Box>
                <Box is='label' htmlFor='updates'>
                  {t('form.registeredServerForm.keepInformed')}
                </Box>
              </Box>
              <Field
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
                <FieldLabel htmlFor='agreement' withRichContent required>
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
                </FieldLabel>
              </Field>
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
          <Box display='flex' flexDirection='column'>
            <ButtonGroup vertical={isMobile} flexGrow={1}>
              <Button type='submit' primary disabled={isSubmitting || !isValid}>
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
            <Box mbs={24} fontScale='c1'>
              {t('form.registeredServerForm.registrationEngagement')}
            </Box>
          </Box>
        </Form.Footer>
      </Form>
    </FormProvider>
  );
};

export default RegisterServerForm;
