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
import { Wrapper } from './LoginPage.styles';

export type LoginDefaultFormPayload = {
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
        <Form.Subtitle>{t('page.loginPage.subtitle.normal')}</Form.Subtitle>
      </Box>
      <Form.Container>
        <FieldGroup>
          <Field>
            <Field.Label>{t('page.loginPage.email.label')}</Field.Label>
            <Field.Row>
              <EmailInput
                {...register('email', { required: true })}
                placeholder={t('page.loginPage.email.placeholder')}
              />
            </Field.Row>
          </Field>
          <Field>
            <Field.Label>{t('page.loginPage.password.label')}</Field.Label>
            <Field.Row>
              <PasswordInput
                {...register('password', { required: true })}
                placeholder={t('page.loginPage.password.placeholder')}
              />
            </Field.Row>
            {!!formError && (
              <Box textAlign='start'>
                <Field.Error>{t('page.loginPage.password.error')}</Field.Error>
              </Box>
            )}
          </Field>
        </FieldGroup>
      </Form.Container>
      <Form.Footer>
        <Wrapper>
          <Button type='submit' disabled={isValidating || isSubmitting} primary>
            {t('page.loginPage.button.login')}
          </Button>
          <Button nude info onClick={onSendLoginLinkForm}>
            {t('page.loginPage.button.sendLoginLink')}
          </Button>
        </Wrapper>
      </Form.Footer>
      <Box fontScale='p1' textAlign='left'>
        <Trans i18nKey='page.loginPage.footer.resetPassword'>
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
