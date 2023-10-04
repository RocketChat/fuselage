import {
  EmailInput,
  FieldGroup,
  Field,
  ButtonGroup,
  Button,
  PasswordInput,
  TextInput,
  Box,
  CheckBox,
  FieldLabel,
  FieldRow,
  FieldError,
  FieldHint,
} from '@rocket.chat/fuselage';
import { useUniqueId } from '@rocket.chat/fuselage-hooks';
import { Form } from '@rocket.chat/layout';
import type { ReactElement } from 'react';
import { useEffect } from 'react';
import type { SubmitHandler, Validate } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

export type AdminInfoPayload = {
  fullname: string;
  username: string;
  email: string;
  password: string;
  keepPosted?: boolean;
};

type AdminInfoFormProps = {
  currentStep: number;
  stepCount: number;
  passwordRulesHint: string;
  keepPosted?: boolean;
  initialValues?: Omit<AdminInfoPayload, 'password'>;
  validateUsername: Validate<string>;
  validateEmail: Validate<string>;
  validatePassword: Validate<string>;
  onSubmit: SubmitHandler<AdminInfoPayload>;
};

const AdminInfoForm = ({
  currentStep,
  stepCount,
  passwordRulesHint,
  initialValues,
  validateUsername,
  validateEmail,
  validatePassword,
  keepPosted = false,
  onSubmit,
}: AdminInfoFormProps): ReactElement => {
  const { t } = useTranslation();

  const fullnameField = useUniqueId();
  const usernameField = useUniqueId(); // lgtm [js/insecure-randomness]
  const emailField = useUniqueId();
  const passwordField = useUniqueId(); // lgtm [js/insecure-randomness]

  const {
    register,
    handleSubmit,
    formState: { isValidating, isSubmitting, errors },
    setFocus,
  } = useForm<AdminInfoPayload>({
    defaultValues: {
      ...initialValues,
      password: '',
    },
    mode: 'onBlur',
  });

  useEffect(() => {
    setFocus('fullname');
  }, [setFocus]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Header>
        <Form.Steps currentStep={currentStep} stepCount={stepCount} />
        <Form.Title>{t('form.adminInfoForm.title')}</Form.Title>
        <Form.Subtitle>{t('form.adminInfoForm.subtitle')}</Form.Subtitle>
      </Form.Header>
      <Form.Container>
        <FieldGroup>
          <Field>
            <FieldLabel required htmlFor={fullnameField}>
              {t('form.adminInfoForm.fields.fullName.label')}
            </FieldLabel>
            <FieldRow>
              <TextInput
                {...register('fullname', {
                  required: String(t('component.form.requiredField')),
                })}
                aria-describedby={`${fullnameField}-error}`}
                placeholder={t(
                  'form.adminInfoForm.fields.fullName.placeholder'
                )}
                id={fullnameField}
              />
            </FieldRow>
            {errors.fullname && (
              <FieldError aria-live='assertive' id={`${fullnameField}-error}`}>
                {errors.fullname.message}
              </FieldError>
            )}
          </Field>
          <Field>
            <FieldLabel required htmlFor={usernameField}>
              {t('form.adminInfoForm.fields.username.label')}
            </FieldLabel>
            <FieldRow>
              <TextInput
                {...register('username', {
                  required: String(t('component.form.requiredField')),
                  validate: validateUsername,
                })}
                aria-describedby={`${usernameField}-error}`}
                placeholder={t(
                  'form.adminInfoForm.fields.username.placeholder'
                )}
                id={usernameField}
              />
            </FieldRow>
            {errors.username && (
              <FieldError aria-live='assertive' id={`${usernameField}-error}`}>
                {errors.username.message}
              </FieldError>
            )}
          </Field>
          <Field>
            <FieldLabel required htmlFor={emailField}>
              {t('form.adminInfoForm.fields.email.label')}
            </FieldLabel>
            <FieldRow>
              <EmailInput
                {...register('email', {
                  required: String(t('component.form.requiredField')),
                  validate: validateEmail,
                })}
                aria-describedby={`${emailField}-error}`}
                placeholder={t('form.adminInfoForm.fields.email.placeholder')}
                id={emailField}
              />
            </FieldRow>
            {errors.email && (
              <FieldError aria-live='assertive' id={`${emailField}-error}`}>
                {errors.email.message}
              </FieldError>
            )}
          </Field>
          <Field>
            <FieldLabel required htmlFor={passwordField}>
              {t('form.adminInfoForm.fields.password.label')}
            </FieldLabel>
            <FieldRow>
              <PasswordInput
                {...register('password', {
                  required: String(t('component.form.requiredField')),
                  validate: validatePassword,
                })}
                aria-describedby={`${passwordField}-error}`}
                placeholder={t(
                  'form.adminInfoForm.fields.password.placeholder'
                )}
                id={passwordField}
              />
            </FieldRow>
            <FieldHint>{passwordRulesHint}</FieldHint>
            {errors.password && (
              <FieldError aria-live='assertive' id={`${passwordField}-error}`}>
                {errors.password.message}
              </FieldError>
            )}
          </Field>
          {keepPosted && (
            <Box mbe={8} display='block' color='info' fontScale='c1'>
              <CheckBox id='keepPosted' mie={8} {...register('keepPosted')} />
              <label htmlFor='keepPosted'>
                {t('form.adminInfoForm.fields.keepPosted.label')}
              </label>
            </Box>
          )}
        </FieldGroup>
      </Form.Container>
      <Form.Footer>
        <ButtonGroup flexGrow={1}>
          <Button type='submit' primary disabled={isValidating || isSubmitting}>
            {t('component.form.action.next')}
          </Button>
        </ButtonGroup>
      </Form.Footer>
    </Form>
  );
};

export default AdminInfoForm;
