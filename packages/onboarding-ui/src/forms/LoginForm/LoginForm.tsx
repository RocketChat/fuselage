import {
  FieldGroup,
  Field,
  EmailInput,
  PasswordInput,
  Button,
  Box,
  FieldLabel,
  FieldRow,
  FieldError,
} from '@rocket.chat/fuselage';
import { Form, ActionLink } from '@rocket.chat/layout';
import type { ReactElement } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';

import { LoginActionsWrapper } from './LoginForm.styles';

export type LoginFormPayload = {
  email: string;
  password?: string;
};

type LoginFormProps = {
  initialValues?: LoginFormPayload;
  onChangeForm: () => void;
  isPasswordLess?: boolean;
  onResetPassword: () => void;
  formError?: string;
  onSubmit: SubmitHandler<LoginFormPayload>;
};

const LoginForm = ({
  onSubmit,
  initialValues,
  isPasswordLess = false,
  onChangeForm,
  onResetPassword,
  formError,
}: LoginFormProps): ReactElement => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors, isValidating, isSubmitting, isDirty },
  } = useForm<LoginFormPayload>({
    defaultValues: {
      ...initialValues,
    },
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Header>
        <Form.Title>{t('form.loginForm.content.logIn')}</Form.Title>
        <Form.Subtitle>
          {!isPasswordLess
            ? t('form.loginForm.content.default')
            : t('form.loginForm.content.passwordLess')}
        </Form.Subtitle>
      </Form.Header>
      <Form.Container>
        <FieldGroup>
          <Field>
            <FieldLabel>{t('form.loginForm.fields.email.label')}</FieldLabel>
            <FieldRow>
              <EmailInput
                {...register('email', {
                  required: t('component.form.requiredField'),
                })}
                placeholder={t('form.loginForm.fields.email.placeholder')}
              />
            </FieldRow>
            {errors.email && <FieldError>{errors.email.message}</FieldError>}
          </Field>
          {!isPasswordLess && (
            <Field>
              <FieldLabel>
                {t('form.loginForm.fields.password.label')}
              </FieldLabel>
              <FieldRow>
                <PasswordInput
                  {...register('password', { required: true })}
                  placeholder={t('form.loginForm.fields.password.placeholder')}
                />
              </FieldRow>
              {(formError || errors.password) && (
                <FieldError>
                  {t('form.loginForm.fields.password.error')}
                </FieldError>
              )}
            </Field>
          )}
        </FieldGroup>
      </Form.Container>
      <Form.Footer>
        <LoginActionsWrapper>
          <Button
            type='submit'
            loading={isValidating || isSubmitting}
            disabled={!isDirty}
            primary
          >
            {isPasswordLess
              ? t('form.loginForm.sendLoginLink')
              : t('form.loginForm.button.text')}
          </Button>
          {!isPasswordLess && (
            <ActionLink fontScale='p2' onClick={onChangeForm}>
              {t('form.loginForm.sendLoginLink')}
            </ActionLink>
          )}
          {isPasswordLess && (
            <ActionLink fontScale='p2' onClick={onChangeForm}>
              {t('form.loginForm.redirect')}
            </ActionLink>
          )}
        </LoginActionsWrapper>

        {!isPasswordLess && (
          <Box mbs={24} fontScale='p2' textAlign='left'>
            <Trans i18nKey='form.loginForm.resetPassword'>
              Forgot your password?
              <ActionLink fontScale='p2' onClick={onResetPassword}>
                Reset password
              </ActionLink>
            </Trans>
          </Box>
        )}
      </Form.Footer>
    </Form>
  );
};

export default LoginForm;
