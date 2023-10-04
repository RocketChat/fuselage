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
import { Form } from '@rocket.chat/layout';
import type { ReactElement } from 'react';
import type { SubmitHandler, Validate } from 'react-hook-form';
import { useForm, FormProvider } from 'react-hook-form';
import { useTranslation, Trans } from 'react-i18next';

export type RegisterServerPayload = {
  email: string;
  agreement: boolean;
  updates: boolean;
};

type RegisterServerFormProps = {
  currentStep: number;
  stepCount: number;
  initialValues?: Partial<RegisterServerPayload>;
  validateEmail?: Validate<string>;
  onSubmit: SubmitHandler<RegisterServerPayload>;
  onClickRegisterOffline: () => void;
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
  termsHref = 'https://rocket.chat/terms',
  policyHref = 'https://rocket.chat/privacy',
  onClickRegisterOffline,
}: RegisterServerFormProps): ReactElement => {
  const { t } = useTranslation();
  const emailField = useUniqueId();
  const agreementField = useUniqueId();
  const updatesField = useUniqueId();

  const breakpoints = useBreakpoints();
  const isMobile = !breakpoints.includes('md');

  const form = useForm<RegisterServerPayload>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      agreement: false,
      updates: true,
      ...initialValues,
    },
  });

  const {
    register,
    formState: { isSubmitting, isValidating, errors },
    handleSubmit,
  } = form;

  return (
    <FormProvider {...form}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Header>
          <Form.Steps currentStep={currentStep} stepCount={stepCount} />
          <Form.Title>{t('form.registeredServerForm.title')}</Form.Title>
        </Form.Header>
        {
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
                    required: String(t('component.form.requiredField')),
                    validate: validateEmail,
                  })}
                  aria-describedby={`${emailField}-error`}
                  placeholder={t(
                    'form.registeredServerForm.fields.accountEmail.inputPlaceholder'
                  )}
                  id={emailField}
                />
              </FieldRow>
              {errors.email && (
                <FieldError aria-live='assertive' id={`${emailField}-error`}>
                  {t('component.form.requiredField')}
                </FieldError>
              )}
            </Field>
            <Box mbs={24}>
              <Field fontScale='c1'>
                <FieldRow>
                  <CheckBox id={updatesField} {...register('updates')} />
                  <FieldLabel htmlFor={updatesField} fontScale='c1'>
                    {t('form.registeredServerForm.keepInformed')}
                  </FieldLabel>
                </FieldRow>
              </Field>
              <Field>
                <FieldRow>
                  <CheckBox
                    id={agreementField}
                    {...register('agreement', {
                      required: String(t('component.form.requiredField')),
                    })}
                  />
                  <FieldLabel
                    htmlFor={agreementField}
                    aria-describedby={`${agreementField}-error`}
                    withRichContent
                    required
                    fontScale='c1'
                  >
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
                </FieldRow>
                {errors.agreement && (
                  <FieldError
                    aria-live='assertive'
                    id={`${agreementField}-error`}
                  >
                    {t('component.form.requiredField')}
                  </FieldError>
                )}
              </Field>
            </Box>
          </Form.Container>
        }
        <Form.Footer>
          <Box display='flex' flexDirection='column' alignItems='flex-start'>
            <ButtonGroup vertical={isMobile} flexGrow={1}>
              <Button
                type='submit'
                primary
                disabled={isSubmitting || isValidating}
              >
                {t('component.form.action.registerWorkspace')}
              </Button>
              {offline && (
                <Button
                  type='button'
                  disabled={!offline}
                  onClick={onClickRegisterOffline}
                >
                  {t('component.form.action.registerOffline')}
                </Button>
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
