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
            <FieldLabel htmlFor={fullnameField}>
              {t('form.adminInfoForm.fields.fullName.label')}
            </FieldLabel>
            <FieldRow>
              <TextInput
                {...register('fullname', {
                  required: String(t('component.form.requiredField')),
                })}
                placeholder={t(
                  'form.adminInfoForm.fields.fullName.placeholder'
                )}
                id={fullnameField}
              />
            </FieldRow>
            {errors.fullname && (
              <FieldError>{errors.fullname.message}</FieldError>
            )}
          </Field>
          <Field>
            <FieldLabel htmlFor={usernameField}>
              {t('form.adminInfoForm.fields.username.label')}
            </FieldLabel>
            <FieldRow>
              <TextInput
                {...register('username', {
                  required: String(t('component.form.requiredField')),
                  validate: validateUsername,
                })}
                placeholder={t(
                  'form.adminInfoForm.fields.username.placeholder'
                )}
                id={usernameField}
              />
            </FieldRow>
            {errors.username && (
              <FieldError>{errors.username.message}</FieldError>
            )}
          </Field>
          <Field>
            <FieldLabel htmlFor={emailField}>
              {t('form.adminInfoForm.fields.email.label')}
            </FieldLabel>
            <FieldRow>
              <EmailInput
                {...register('email', {
                  required: String(t('component.form.requiredField')),
                  validate: validateEmail,
                })}
                placeholder={t('form.adminInfoForm.fields.email.placeholder')}
                id={emailField}
              />
            </FieldRow>
            {errors.email && <FieldError>{errors.email.message}</FieldError>}
          </Field>
          <Field>
            <FieldLabel htmlFor={passwordField}>
              {t('form.adminInfoForm.fields.password.label')}
            </FieldLabel>
            <FieldRow>
              <PasswordInput
                {...register('password', {
                  required: String(t('component.form.requiredField')),
                  validate: validatePassword,
                })}
                placeholder={t(
                  'form.adminInfoForm.fields.password.placeholder'
                )}
                id={passwordField}
              />
            </FieldRow>
            <FieldHint>{passwordRulesHint}</FieldHint>
            {errors.password && (
              <FieldError>{errors.password.message}</FieldError>
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
