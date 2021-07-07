import {
  EmailInput,
  FieldGroup,
  Field,
  ButtonGroup,
  Button,
  PasswordInput,
  TextInput,
} from '@rocket.chat/fuselage';
import { ReactElement } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Form from '../../common/Form';

type AdminInfoFormInputs = {
  fullname: string;
  username: string;
  companyEmail: string;
  password: string;
};

const AdminInfoForm = (): ReactElement => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminInfoFormInputs>();

  const onSubmit: SubmitHandler<AdminInfoFormInputs> = (data) =>
    console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Steps>{t('form.adminInfoForm.steps')}</Form.Steps>
      <Form.Title>{t('form.adminInfoForm.title')}</Form.Title>
      <Form.Subtitle>{t('form.adminInfoForm.subtitle')}</Form.Subtitle>
      <Form.Container>
        <FieldGroup>
          <Field>
            <Field.Label>
              {t('form.adminInfoForm.fields.fullName.placeholder')}
            </Field.Label>
            <Field.Row>
              <TextInput
                {...register('fullname', { required: true })}
                placeholder={t(
                  'form.adminInfoForm.fields.fullName.placeholder'
                )}
              />
            </Field.Row>
            {errors.fullname && (
              <Field.Error>{t('global.fieldRequired')}</Field.Error>
            )}
          </Field>
          <Field>
            <Field.Label>
              {t('form.adminInfoForm.fields.username.label')}
            </Field.Label>
            <Field.Row>
              <TextInput
                {...register('username', { required: true })}
                placeholder={t(
                  'form.adminInfoForm.fields.username.placeholder'
                )}
              />
            </Field.Row>
            {errors.username && (
              <Field.Error>{t('global.fieldRequired')}</Field.Error>
            )}
          </Field>
          <Field>
            <Field.Label>
              {t('form.adminInfoForm.fields.companyEmail.label')}
            </Field.Label>
            <Field.Row>
              <EmailInput
                {...register('companyEmail', { required: true })}
                placeholder={t(
                  'form.adminInfoForm.fields.companyEmail.placeholder'
                )}
              />
            </Field.Row>
            {errors.companyEmail && (
              <Field.Error>{t('global.fieldRequired')}</Field.Error>
            )}
          </Field>
          <Field>
            <Field.Label>
              {t('form.adminInfoForm.fields.password.label')}
            </Field.Label>
            <Field.Row>
              <PasswordInput
                {...register('password', { required: true })}
                placeholder={t(
                  'form.adminInfoForm.fields.password.placeholder'
                )}
              />
            </Field.Row>
            <Field.Hint>
              {t('form.adminInfoForm.fields.password.hint')}
            </Field.Hint>
            {errors.password && (
              <Field.Error>{t('global.fieldRequired')}</Field.Error>
            )}
          </Field>
        </FieldGroup>
      </Form.Container>
      <Form.Footer>
        <ButtonGroup flexGrow={1}>
          <Button type='submit' primary>
            {t('form.adminInfoForm.buttons.success')}
          </Button>
        </ButtonGroup>
      </Form.Footer>
    </Form>
  );
};

export default AdminInfoForm;
