import {
  FieldGroup,
  Field,
  ButtonGroup,
  Button,
  Box,
  PasswordInput,
  TextInput,
  Throbber,
  FieldLabel,
  FieldRow,
  FieldError,
} from '@rocket.chat/fuselage';
import { Form } from '@rocket.chat/layout';
import type { ReactElement } from 'react';
import type { SubmitHandler, Validate } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

type CreateFirstMemberFormPayload = {
  username: string;
  password: string;
};

type CreateFirstMemberFormProps = {
  defaultValues?: CreateFirstMemberFormPayload;
  currentStep: number;
  stepCount: number;
  organizationName: string;
  onSubmit: SubmitHandler<CreateFirstMemberFormPayload>;
  onBackButtonClick: () => void;
  validateUsername: Validate<string>;
  validatePassword: Validate<string>;
};

const CreateFirstMemberForm = ({
  defaultValues,
  currentStep,
  stepCount,
  organizationName,
  onSubmit,
  onBackButtonClick,
  validateUsername,
  validatePassword,
}: CreateFirstMemberFormProps): ReactElement => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { isValid, isValidating, isSubmitting, errors },
  } = useForm<CreateFirstMemberFormPayload>({ mode: 'onChange' });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Steps currentStep={currentStep} stepCount={stepCount} />
      <Form.Title>{t('form.createFirstMemberForm.title')}</Form.Title>
      <Form.Subtitle>
        {t('form.createFirstMemberForm.subtitle', { organizationName })}
      </Form.Subtitle>

      <FieldGroup mbs={16}>
        <Field>
          <FieldLabel>
            <Box display='inline' mie={8}>
              {t('form.createFirstMemberForm.fields.username.label')}
            </Box>
          </FieldLabel>
          <FieldRow>
            <TextInput
              {...register('username', {
                validate: validateUsername,
                required: true,
              })}
              defaultValue={defaultValues?.username}
              error={errors?.username?.type || undefined}
            />
          </FieldRow>
          {errors?.username && (
            <FieldError>{errors.username.message}</FieldError>
          )}
        </Field>

        <Field>
          <FieldLabel>
            {t('form.createFirstMemberForm.fields.password.label')}
          </FieldLabel>
          <FieldRow>
            <PasswordInput
              {...register('password', {
                validate: validatePassword,
                required: true,
              })}
              defaultValue={defaultValues?.password}
            />
          </FieldRow>
          {errors.password && (
            <FieldError>{errors.password.message}</FieldError>
          )}
        </Field>
      </FieldGroup>

      <Form.Footer>
        <ButtonGroup>
          <Button disabled={isSubmitting} onClick={onBackButtonClick}>
            {t('component.form.action.back')}
          </Button>

          <Button
            type='submit'
            primary
            disabled={!isValid}
            loading={isSubmitting || isValidating}
            minHeight='x40'
          >
            {isSubmitting ? (
              <Throbber inheritColor />
            ) : (
              t('form.createFirstMemberForm.button.submit')
            )}
          </Button>
        </ButtonGroup>
      </Form.Footer>
    </Form>
  );
};

export default CreateFirstMemberForm;
