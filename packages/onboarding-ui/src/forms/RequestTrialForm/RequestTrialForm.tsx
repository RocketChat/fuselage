import type { SelectOption } from '@rocket.chat/fuselage';
import {
  Button,
  Field,
  Box,
  CheckBox,
  FieldGroup,
  TextInput,
  EmailInput,
  Select,
  SelectFiltered,
} from '@rocket.chat/fuselage';
import { Form } from '@rocket.chat/layout';
import type { ReactElement } from 'react';
import type { SubmitHandler, Validate } from 'react-hook-form';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation, Trans } from 'react-i18next';

type RequestTrialPayload = {
  email: string;
  organizationName: string;
  organizationSize: string;
  country: string;
  updates: boolean;
  agreement: boolean;
};

type RequestTrialFormProps = {
  defaultValues?: RequestTrialPayload;
  organizationSizeOptions: SelectOption[];
  countryOptions: SelectOption[];
  onSubmit: SubmitHandler<RequestTrialPayload>;
  onManageWorkspaceClick: () => void;
  validateEmail: Validate<string>;
  termsHref?: string;
  policyHref?: string;
};

const RequestTrialForm = ({
  defaultValues,
  organizationSizeOptions,
  countryOptions,
  onSubmit,
  validateEmail,
  termsHref = 'https://rocket.chat/terms',
  policyHref = 'https://rocket.chat/privacy',
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
              defaultValue={defaultValues?.email}
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
              defaultValue={defaultValues?.organizationName}
            />
          </Field.Row>
          {errors?.organizationName && (
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
              defaultValue={defaultValues?.organizationSize}
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
                <SelectFiltered
                  {...field}
                  options={countryOptions}
                  width='full'
                  placeholder={t(
                    'form.requestTrialForm.fields.country.placeholder'
                  )}
                />
              )}
              defaultValue={defaultValues?.country}
            />
          </Field.Row>
        </Field>
        <Field>
          <Box mbs='x24'>
            <Box
              mbe='x8'
              display='flex'
              flexDirection='row'
              alignItems='flex-start'
              fontScale='c1'
              lineHeight={20}
            >
              <CheckBox mie='x8' {...register('updates')} />{' '}
              <Box is='label' htmlFor='updates'>
                {t('form.registeredServerForm.keepInformed')}
              </Box>
            </Box>
            <Box
              display='flex'
              flexDirection='row'
              alignItems='flex-start'
              color='default'
              fontScale='c1'
              lineHeight={20}
            >
              <CheckBox
                mie='x8'
                {...register('agreement', { required: true })}
              />{' '}
              <Box is='label' htmlFor='agreement' withRichContent>
                <Trans i18nKey='component.form.termsAndConditions'>
                  I agree with
                  <a href={termsHref} target='_blank' rel='noopener noreferrer'>
                    Terms and Conditions
                  </a>
                  and
                  <a
                    href={policyHref}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Privacy Policy
                  </a>
                </Trans>
              </Box>
            </Box>
          </Box>
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
