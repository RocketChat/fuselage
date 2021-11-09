import {
  Box,
  FieldGroup,
  Field,
  TextInput,
  Button,
} from '@rocket.chat/fuselage';
import type { ReactElement } from 'markdown-to-jsx/node_modules/@types/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Form from '../../common/Form';
import { Wrapper } from './LoginForm.styles';

type LoginPasswordLessFormPayload = {
  email: string;
};

type LoginPasswordLessFormProps = {
  initialValues?: Partial<LoginPasswordLessFormPayload>;
  onChangeForm: () => void;
  onSubmit: SubmitHandler<LoginPasswordLessFormPayload>;
};

const LoginPasswordLessForm = ({
  onSubmit,
  initialValues,
  onChangeForm,
}: LoginPasswordLessFormProps): ReactElement => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPasswordLessFormPayload>({
    defaultValues: {
      email: '',
      ...initialValues,
    },
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Box textAlign='start'>
        <Form.Subtitle>
          {t('form.loginForm.content.passwordLess')}
        </Form.Subtitle>
      </Box>
      <Form.Container>
        <FieldGroup>
          <Field>
            <Field.Label>{t('form.loginForm.fields.email.label')}</Field.Label>
            <Field.Row>
              <TextInput
                {...register('email', { required: true })}
                placeholder={t('form.loginForm.fields.email.placeholder')}
              />
            </Field.Row>
            {errors.email && (
              <Box textAlign='start'>
                <Field.Error>{t('component.form.requiredField')}</Field.Error>
              </Box>
            )}
          </Field>
        </FieldGroup>
      </Form.Container>
      <Form.Footer>
        <Wrapper>
          <Button type='submit' primary>
            {t('form.loginForm.sendLoginLink')}
          </Button>
          <Button nude info onClick={onChangeForm} fontWeight={400}>
            {t('form.loginForm.redirect')}
          </Button>
        </Wrapper>
      </Form.Footer>
    </Form>
  );
};

export default LoginPasswordLessForm;
