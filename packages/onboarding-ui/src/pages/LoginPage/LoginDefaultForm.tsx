import {
  FieldGroup,
  Field,
  TextInput,
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
  initialValues?: Partial<LoginDefaultFormPayload>;
  onSendLoginLinkForm: () => void;
  onResetPassword: () => void;
  onSubmit: SubmitHandler<LoginDefaultFormPayload>;
};

const LoginDefaultForm = ({
  onSubmit,
  initialValues,
  onSendLoginLinkForm,
  onResetPassword,
}: LoginDefaultFormProps): ReactElement => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDefaultFormPayload>({
    defaultValues: {
      email: '',
      password: '',
      ...initialValues,
    },
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Subtitle>{t('page.loginPage.subtitle')}</Form.Subtitle>
      <Form.Container>
        <FieldGroup>
          <Field>
            <Field.Label>{t('page.loginPage.email.label')}</Field.Label>
            <Field.Row>
              <TextInput
                {...register('email', { required: true })}
                placeholder={t('page.loginPage.email.placeholder')}
              />
            </Field.Row>
            {errors.email && (
              <Field.Error>{t('component.form.requiredField')}</Field.Error>
            )}
          </Field>
          <Field>
            <Field.Label>{t('page.loginPage.password.label')}</Field.Label>
            <Field.Row>
              <TextInput
                {...register('password', { required: true })}
                placeholder={t('page.loginPage.password.placeholder')}
              />
            </Field.Row>
            {errors.password && (
              <Field.Error>{t('component.form.requiredField')}</Field.Error>
            )}
          </Field>
        </FieldGroup>
      </Form.Container>
      <Form.Footer>
        <Wrapper>
          <Button type='submit' primary>
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
