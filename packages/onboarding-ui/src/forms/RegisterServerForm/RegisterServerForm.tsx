import {
  Box,
  ButtonGroup,
  Button,
  Field,
  EmailInput,
  CheckBox,
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

  const breakpoints = useBreakpoints();
  const isMobile = !breakpoints.includes('md');

  const form = useForm<RegisterServerPayload>({
    mode: 'onChange',
    defaultValues: {
      email: '',
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
        {
          <Form.Container>
            <Field>
              <Field.Label
                display='flex'
                alignItems='center'
                htmlFor={emailField}
              >
                {t('form.registeredServerForm.fields.accountEmail.inputLabel')}
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
                <Box mie={8}>
                  <CheckBox {...register('updates')} />{' '}
                </Box>
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
                <Box mie={8}>
                  <CheckBox {...register('agreement', { required: true })} />{' '}
                </Box>
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
            </Box>
          </Form.Container>
        }
        <Form.Footer>
          <Box display='flex' flexDirection='column'>
            <ButtonGroup vertical={isMobile} flexGrow={1}>
              <Button
                type='submit'
                primary
                disabled={isValidating || isSubmitting || !isValid}
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
