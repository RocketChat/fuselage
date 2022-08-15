import {
  FieldGroup,
  Field,
  EmailInput,
  PasswordInput,
  Button,
  Box,
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
    formState: { errors, isValidating, isSubmitting },
  } = useForm<LoginFormPayload>({
    defaultValues: {
      ...initialValues,
    },
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Subtitle>
        {!isPasswordLess
          ? t('form.loginForm.content.default')
          : t('form.loginForm.content.passwordLess')}
      </Form.Subtitle>
      <Form.Container>
        <FieldGroup>
          <Field>
            <Field.Label>{t('form.loginForm.fields.email.label')}</Field.Label>
            <Field.Row>
              <EmailInput
                {...register('email', {
                  required: String(t('component.form.requiredField')),
                })}
                placeholder={t('form.loginForm.fields.email.placeholder')}
              />
            </Field.Row>
            {errors.email && <Field.Error>{errors.email.message}</Field.Error>}
          </Field>
          {!isPasswordLess && (
            <Field>
              <Field.Label>
                {t('form.loginForm.fields.password.label')}
              </Field.Label>
              <Field.Row>
                <PasswordInput
                  {...register('password', { required: true })}
                  placeholder={t('form.loginForm.fields.password.placeholder')}
                />
              </Field.Row>
              {(formError || errors.password) && (
                <Field.Error>
                  {t('form.loginForm.fields.password.error')}
                </Field.Error>
              )}
            </Field>
          )}
        </FieldGroup>
      </Form.Container>
      <Form.Footer>
        <LoginActionsWrapper>
          <Button type='submit' disabled={isValidating || isSubmitting} primary>
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
          <Box mbs='x24' fontScale='p2' textAlign='left'>
            <Trans i18nKey='form.loginForm.resetPassword'>
              Forgot your password?
              <ActionLink
                fontWeight={400}
                fontScale='p2'
                onClick={onResetPassword}
              >
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
