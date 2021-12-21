import {
  FieldGroup,
  Field,
  EmailInput,
  ButtonGroup,
  Button,
} from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';
import { useForm, SubmitHandler, Validate } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Form from '../../common/Form';

export type ResetPasswordFormPayload = {
  email: string;
};

type ResetPasswordFormProps = {
  initialValues?: ResetPasswordFormPayload;
  validateEmail: Validate<string>;
  onSubmit: SubmitHandler<ResetPasswordFormPayload>;
};

const ResetPasswordForm = ({
  onSubmit,
  validateEmail,
  initialValues,
}: ResetPasswordFormProps): ReactElement => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { isValidating, isSubmitting, isValid, errors },
  } = useForm<ResetPasswordFormPayload>({
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
              {t('form.resetPasswordForm.fields.email.label')}
            </Field.Label>
            <Field.Description>
              {t('form.resetPasswordForm.content.subtitle')}
            </Field.Description>
            <Field.Row>
              <EmailInput
                {...register('email', {
                  validate: validateEmail,
                  required: true,
                })}
                placeholder={t(
                  'form.resetPasswordForm.fields.email.placeholder'
                )}
              />
            </Field.Row>
            {errors.email && <Field.Error>{errors.email.message}</Field.Error>}
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
            {t('form.resetPasswordForm.action.submit')}
          </Button>
        </ButtonGroup>
      </Form.Footer>
    </Form>
  );
};

export default ResetPasswordForm;
