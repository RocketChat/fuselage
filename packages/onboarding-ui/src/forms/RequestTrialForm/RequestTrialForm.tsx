import { Button, Field, FieldGroup, EmailInput } from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';
import { useForm, SubmitHandler, Validate } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Form from '../../common/Form';

type RequestTrialPayload = {
  email: string;
};

type RequestTrialFormProps = {
  onSubmit: SubmitHandler<RequestTrialPayload>;
  validateEmail: Validate<string>;
};

const RequestTrialForm = ({
  onSubmit,
  validateEmail,
}: RequestTrialFormProps): ReactElement => {
  const { t } = useTranslation();

  const {
    handleSubmit,
    register,
    formState: { isValidating, isSubmitting, isValid, errors },
  } = useForm<RequestTrialPayload>({ mode: 'onChange' });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup>
        <Field>
          <Field.Label>
            {t('form.requestTrialForm.emailAddr.label')}
          </Field.Label>
          <Field.Row>
            <EmailInput
              {...register('email', {
                validate: validateEmail,
                required: true,
              })}
              placeholder={t('form.requestTrialForm.emailAddr.placeholder')}
              error={errors?.email?.message || undefined}
            />
          </Field.Row>
          {errors?.email && <Field.Error>{errors.email.message}</Field.Error>}
        </Field>
        <Field>
          <Field.Label>
            {t('form.requestTrialForm.hasWorkspace.label')}
          </Field.Label>
          <Field.Description>
            {t('form.requestTrialForm.hasWorkspace.description')}
          </Field.Description>
        </Field>
      </FieldGroup>
      <Form.Footer>
        <Button
          type='submit'
          primary
          disabled={isValidating || isSubmitting || !isValid}
        >
          {t('form.requestTrialForm.request')}
        </Button>
      </Form.Footer>
    </Form>
  );
};

export default RequestTrialForm;
