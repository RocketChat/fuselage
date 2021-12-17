import {
  FieldGroup,
  Field,
  PasswordInput,
  ButtonGroup,
  Button,
} from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';
import { useForm, SubmitHandler, Validate } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Form from '../../common/Form';

export type CreateNewPasswordPayload = {
  password: string;
  passwordConfirmation: string;
};

type CreateNewPasswordProps = {
  initialValues?: CreateNewPasswordPayload;
  validatePassword: Validate<string>;
  validatePasswordConfirmation: Validate<string>;
  onSubmit: SubmitHandler<CreateNewPasswordPayload>;
};

const CreateNewPassword = ({
  onSubmit,
  validatePassword,
  validatePasswordConfirmation,
  initialValues,
}: CreateNewPasswordProps): ReactElement => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { isValidating, isSubmitting, isValid, errors },
  } = useForm<CreateNewPasswordPayload>({
    mode: 'onChange',
    defaultValues: {
      ...initialValues,
    },
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Container>
        <FieldGroup>
          <Field>
            <Field.Label>
              {t('form.createPasswordForm.fields.password.label')}
            </Field.Label>
            <Field.Row>
              <PasswordInput
                {...register('password', {
                  validate: validatePassword,
                  required: true,
                })}
                placeholder={t(
                  'form.createPasswordForm.fields.password.placeholder'
                )}
              />
            </Field.Row>
            {errors.password && (
              <Field.Error>{errors.password.message}</Field.Error>
            )}
          </Field>
          <Field>
            <Field.Label>
              {t('form.createPasswordForm.fields.confirmPassword.label')}
            </Field.Label>
            <Field.Row>
              <PasswordInput
                {...register('passwordConfirmation', {
                  validate: validatePasswordConfirmation,
                  required: true,
                })}
                placeholder={t(
                  'form.createPasswordForm.fields.confirmPassword.placeholder'
                )}
              />
            </Field.Row>
            {errors.passwordConfirmation && (
              <Field.Error>{errors.passwordConfirmation.message}</Field.Error>
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
            {t('form.createPasswordForm.button.text')}
          </Button>
        </ButtonGroup>
      </Form.Footer>
    </Form>
  );
};

export default CreateNewPassword;
