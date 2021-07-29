import { Button, Field, FieldGroup, TextInput } from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Form from '../../common/Form';

type RequestTrialPayload = {
  email: string;
};

type RequestTrialFormProps = {
  onSubmit: SubmitHandler<RequestTrialPayload>;
};

const RequestTrialForm = ({
  onSubmit,
}: RequestTrialFormProps): ReactElement => {
  const { t } = useTranslation();

  const {
    handleSubmit,
    register,
    formState: { isValidating, isSubmitting, isValid },
    watch,
  } = useForm<RequestTrialPayload>({ mode: 'onChange' });

  watch('email');

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup>
        <Field>
          <Field.Label>
            {t('form.requestTrialForm.emailAddr.label')}
          </Field.Label>
          <Field.Row>
            <TextInput
              {...register('email', { required: true })}
              placeholder={t('form.requestTrialForm.emailAddr.placeholder')}
            />
          </Field.Row>
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
