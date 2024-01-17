import {
  Box,
  ButtonGroup,
  Button,
  Field,
  EmailInput,
  FieldLabel,
  FieldRow,
  FieldError,
  FieldGroup,
} from '@rocket.chat/fuselage';
import { useUniqueId, useBreakpoints } from '@rocket.chat/fuselage-hooks';
import { Form } from '@rocket.chat/layout';
import type { ReactElement } from 'react';
import { useEffect, useRef } from 'react';
import type { SubmitHandler, Validate } from 'react-hook-form';
import { Controller, useForm, FormProvider } from 'react-hook-form';
import { useTranslation, Trans } from 'react-i18next';

import AgreeTermsField from '../../common/AgreeTermsField';

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

  const formId = useUniqueId();
  const emailField = useUniqueId();
  const agreementField = useUniqueId();

  const registerServerFormRef = useRef<HTMLElement>(null);

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
    control,
    register,
    formState: { isSubmitting, isValidating, errors },
    handleSubmit,
  } = form;

  useEffect(() => {
    if (registerServerFormRef.current) {
      registerServerFormRef.current.focus();
    }
  }, []);

  return (
    <FormProvider {...form}>
      <Form
        ref={registerServerFormRef}
        tabIndex={-1}
        aria-labelledby={`${formId}-title`}
        aria-describedby={`${formId}-informed-disclaimer ${formId}-engagement-disclaimer`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form.Header>
          <Form.Steps currentStep={currentStep} stepCount={stepCount} />
          <Form.Title id={`${formId}-title`}>
            {t('form.registeredServerForm.title')}
          </Form.Title>
        </Form.Header>
        <Form.Container>
          <FieldGroup>
            <Field>
              <FieldLabel
                required
                display='flex'
                alignItems='center'
                htmlFor={emailField}
              >
                {t('form.registeredServerForm.fields.accountEmail.inputLabel')}
              </FieldLabel>
              <FieldRow>
                <Controller
                  name='email'
                  control={control}
                  rules={{
                    required: String(t('component.form.requiredField')),
                    validate: validateEmail,
                  }}
                  render={({ field }) => (
                    <EmailInput
                      {...field}
                      aria-invalid={Boolean(errors.email)}
                      aria-required='true'
                      aria-describedby={`${emailField}-error`}
                      placeholder={t(
                        'form.registeredServerForm.fields.accountEmail.inputPlaceholder'
                      )}
                      id={emailField}
                    />
                  )}
                />
              </FieldRow>
              {errors.email && (
                <FieldError aria-live='assertive' id={`${emailField}-error`}>
                  {t('component.form.requiredField')}
                </FieldError>
              )}
            </Field>
            <AgreeTermsField
              agreementField={agreementField}
              termsHref={termsHref}
              policyHref={policyHref}
              control={control}
              errors={errors}
            />
            <input type='hidden' {...register('updates')} />
          </FieldGroup>
        </Form.Container>
        <Form.Footer>
          <Box display='flex' flexDirection='column' alignItems='flex-start'>
            <ButtonGroup vertical={isMobile}>
              <Button
                type='submit'
                primary
                loading={isSubmitting || isValidating}
                disabled={offline}
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
            <Box id={`${formId}-engagement-disclaimer`} mbs={24} fontScale='c1'>
              {t('form.registeredServerForm.registrationEngagement')}
            </Box>
            <Box id={`${formId}-informed-disclaimer`} mbs={24} fontScale='c1'>
              <Trans i18nKey='form.registeredServerForm.registrationKeepInformed'>
                By submitting this form you consent to receive more information
                about Rocket.Chat products, events and updates, according to our
                <a href={policyHref} target='_blank' rel='noopener noreferrer'>
                  Privacy Policy
                </a>
                . You may unsubscribe at any time.
              </Trans>
            </Box>
          </Box>
        </Form.Footer>
      </Form>
    </FormProvider>
  );
};

export default RegisterServerForm;
