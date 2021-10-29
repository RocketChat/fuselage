import { FieldGroup, Field, TextInput, Button } from '@rocket.chat/fuselage';
import type { ReactElement } from 'markdown-to-jsx/node_modules/@types/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Form from '../../common/Form';
import { Wrapper } from './LoginPage.styles';

export type LoginPasswordLessPayload = {
  email: string;
};

type LoginPasswordLessFormProps = {
  initialValues?: Partial<LoginPasswordLessPayload>;
  onChangeForm: () => void;
  onSubmit: SubmitHandler<LoginPasswordLessPayload>;
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
  } = useForm<LoginPasswordLessPayload>({
    defaultValues: {
      email: '',
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
        </FieldGroup>
      </Form.Container>
      <Form.Footer>
        <Wrapper>
          <Button type='submit' primary>
            {t('page.loginPage.button.sendLoginLink')}
          </Button>
          <Button nude info onClick={onChangeForm} fontWeight={400}>
            {t('page.loginPage.button.redirect')}
          </Button>
        </Wrapper>
      </Form.Footer>
    </Form>
  );
};

export default LoginPasswordLessForm;
