import {
  Button,
  Field,
  FieldGroup,
  TextInput,
  EmailInput,
  Select,
  SelectOptions,
} from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';
import { useForm, SubmitHandler, Validate, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Form from '../../common/Form';

type RequestTrialPayload = {
  email: string;
  organizationName: string;
  organizationSize: string;
  country: string;
};

type RequestTrialFormProps = {
  organizationSizeOptions: SelectOptions;
  countryOptions: SelectOptions;
  onSubmit: SubmitHandler<RequestTrialPayload>;
  validateEmail: Validate<string>;
};

const RequestTrialForm = ({
  organizationSizeOptions,
  countryOptions,
  onSubmit,
  validateEmail,
}: RequestTrialFormProps): ReactElement => {
  const { t } = useTranslation();

  const {
    handleSubmit,
    register,
    control,
    formState: { isValidating, isSubmitting, isValid, errors },
  } = useForm<RequestTrialPayload>({ mode: 'onChange' });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup>
        <Field>
          <Field.Label>
            {t('form.requestTrialForm.fields.emailAddress.label')}
          </Field.Label>
          <Field.Row>
            <EmailInput
              {...register('email', {
                validate: validateEmail,
                required: true,
              })}
              placeholder={t(
                'form.requestTrialForm.fields.emailAddress.placeholder'
              )}
              error={errors?.email?.message || undefined}
            />
          </Field.Row>
          {errors?.email && <Field.Error>{errors.email.message}</Field.Error>}
        </Field>
        <Field>
          <Field.Label>
            {t('form.requestTrialForm.fields.organizationName.label')}
          </Field.Label>
          <Field.Row>
            <TextInput
              {...register('organizationName', { required: true })}
              placeholder={t(
                'form.requestTrialForm.fields.organizationName.placeholder'
              )}
            />
          </Field.Row>
          {errors.organizationName && (
            <Field.Error>{t('component.form.requiredField')}</Field.Error>
          )}
        </Field>
        <Field>
          <Field.Label>
            {t('form.requestTrialForm.fields.organizationSize.label')}
          </Field.Label>
          <Field.Row>
            <Controller
              name='organizationSize'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={organizationSizeOptions}
                  placeholder={t(
                    'form.requestTrialForm.fields.organizationSize.placeholder'
                  )}
                  error={errors?.email?.message || undefined}
                />
              )}
            />
          </Field.Row>
        </Field>
        <Field>
          <Field.Label>
            {t('form.requestTrialForm.fields.country.label')}
          </Field.Label>
          <Field.Row>
            <Controller
              name='country'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={countryOptions}
                  placeholder={t(
                    'form.requestTrialForm.fields.country.placeholder'
                  )}
                />
              )}
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
          {t('form.requestTrialForm.button.text')}
        </Button>
      </Form.Footer>
    </Form>
  );
};

export default RequestTrialForm;
