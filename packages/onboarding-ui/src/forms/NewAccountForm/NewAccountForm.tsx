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
} from '@rocket.chat/fuselage';
import { Form } from '@rocket.chat/layout';
import type { ReactElement } from 'react';
import { useEffect } from 'react';
import type { SubmitHandler, Validate } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';

export type NewAccountPayload = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreement?: boolean;
};

type NewAccountFormProps = {
  initialValues?: Omit<NewAccountPayload, 'password'>;
  validateEmail: Validate<string>;
  validatePassword: Validate<string>;
  validateConfirmationPassword: Validate<string>;
  onSubmit: SubmitHandler<NewAccountPayload>;
};

const NewAccountForm = ({
  validateEmail,
  validatePassword,
  validateConfirmationPassword,
  onSubmit,
}: NewAccountFormProps): ReactElement => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { isValidating, isSubmitting, isValid, errors },
    setFocus,
  } = useForm<NewAccountPayload>({ mode: 'onChange' });

  useEffect(() => {
    setFocus('name');
  }, [setFocus]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Container>
        <FieldGroup>
          <Field>
            <Field.Label>
              {t('form.newAccountForm.fields.name.label')}
            </Field.Label>
            <Field.Row>
              <TextInput
                {...register('name', {
                  required: String(t('component.form.requiredField')),
                })}
              />
            </Field.Row>
            {errors.name && <Field.Error>{errors.name.message}</Field.Error>}
          </Field>
          <Field>
            <Field.Label>
              {t('form.newAccountForm.fields.email.label')}
            </Field.Label>
            <Field.Row>
              <EmailInput
                {...register('email', {
                  validate: validateEmail,
                  required: true,
                })}
              />
            </Field.Row>
            {errors?.email && <Field.Error>{errors.email.message}</Field.Error>}
          </Field>
          <Field>
            <Field.Label>
              {t('form.newAccountForm.fields.password.label')}
            </Field.Label>
            <Field.Row>
              <PasswordInput
                {...register('password', {
                  required: true,
                  validate: validatePassword,
                })}
              />
            </Field.Row>
            {errors.password && (
              <Field.Error>{errors.password.message}</Field.Error>
            )}
          </Field>
          <Field>
            <Field.Label>
              {t('form.newAccountForm.fields.confirmPassword.label')}
            </Field.Label>
            <Field.Row>
              <PasswordInput
                {...register('confirmPassword', {
                  required: true,
                  validate: validateConfirmationPassword,
                })}
              />
            </Field.Row>
            {errors.confirmPassword && (
              <Field.Error>{errors.confirmPassword.message}</Field.Error>
            )}
          </Field>
          <Field>
            <Field.Row justifyContent='flex-start'>
              <CheckBox
                {...register('agreement', { required: true })}
                mie='x8'
              />
              <Box
                is='label'
                htmlFor='agreement'
                withRichContent
                fontScale='c1'
              >
                <Trans i18nKey='component.form.termsAndConditions'>
                  I agree with
                  <a
                    href='https://rocket.chat/terms'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Terms and Conditions
                  </a>
                  and
                  <a
                    href='https://rocket.chat/policy'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Privacy Polic
                  </a>
                </Trans>
              </Box>
            </Field.Row>
            {errors.agreement?.type === 'required' && (
              <Field.Error>{t('component.form.requiredField')}</Field.Error>
            )}
          </Field>
        </FieldGroup>
      </Form.Container>
      <Form.Footer>
        <ButtonGroup flexGrow={1}>
          <Button
            type='submit'
            primary
            disabled={isValidating || isSubmitting || !isValid}
          >
            {t('component.form.action.next')}
          </Button>
        </ButtonGroup>
      </Form.Footer>
    </Form>
  );
};

export default NewAccountForm;
