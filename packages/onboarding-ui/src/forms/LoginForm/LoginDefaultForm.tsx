import {
  FieldGroup,
  Field,
  EmailInput,
  PasswordInput,
  Button,
  Box,
} from '@rocket.chat/fuselage';
import type { ReactElement } from 'markdown-to-jsx/node_modules/@types/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';

import ActionLink from '../../common/ActionLink';
import Form from '../../common/Form';
import { Wrapper } from './LoginForm.styles';

type LoginDefaultFormPayload = {
  email: string;
  password: string;
};

type LoginDefaultFormProps = {
  initialValues?: Omit<LoginDefaultFormPayload, 'password'>;
  onSendLoginLinkForm: () => void;
  onResetPassword: () => void;
  formError?: boolean;
  onSubmit: SubmitHandler<LoginDefaultFormPayload>;
};

const LoginDefaultForm = ({
  onSubmit,
  initialValues,
  onSendLoginLinkForm,
  onResetPassword,
  formError,
}: LoginDefaultFormProps): ReactElement => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { isValidating, isSubmitting },
  } = useForm<LoginDefaultFormPayload>({
    mode: 'onChange',
    defaultValues: {
      ...initialValues,
    },
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Box textAlign='start'>
        <Form.Subtitle>{t('form.loginForm.content.default')}</Form.Subtitle>
      </Box>
      <Form.Container>
        <FieldGroup>
          <Field>
            <Field.Label>{t('form.loginForm.fields.email.label')}</Field.Label>
            <Field.Row>
              <EmailInput
                {...register('email', { required: true })}
                placeholder={t('form.loginForm.fields.email.placeholder')}
              />
            </Field.Row>
          </Field>
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
            {!!formError && (
              <Box textAlign='start'>
                <Field.Error>
                  {t('form.loginForm.fields.password.error')}
                </Field.Error>
              </Box>
            )}
          </Field>
        </FieldGroup>
      </Form.Container>
      <Form.Footer>
        <Wrapper>
          <Button type='submit' disabled={isValidating || isSubmitting} primary>
            {t('form.loginForm.button.text')}
          </Button>
          <Button nude info onClick={onSendLoginLinkForm}>
            {t('form.loginForm.sendLoginLink')}
          </Button>
        </Wrapper>
      </Form.Footer>
      <Box fontScale='p1' textAlign='left'>
        <Trans i18nKey='form.loginForm.resetPassword'>
          Forgot your password?
          <ActionLink fontWeight={400} fontSize='p1' onClick={onResetPassword}>
            Reset password
          </ActionLink>
        </Trans>
      </Box>
    </Form>
  );
};

export default LoginDefaultForm;
