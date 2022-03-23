import {
  FieldGroup,
  Field,
  ButtonGroup,
  Button,
  Box,
  PasswordInput,
  TextInput,
} from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';
import type { SubmitHandler, Validate } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Form from '../../common/Form';

type CreateFirstMemberFormPayload = {
  username: string;
  password: string;
};

type CreateFirstMemberFormProps = {
  currentStep: number;
  stepCount: number;
  workspaceName: string;
  onSubmit: SubmitHandler<CreateFirstMemberFormPayload>;
  onBackButtonClick: () => void;
  validatePassword: Validate<string>;
};

const CreateFirstMemberForm = ({
  currentStep,
  stepCount,
  workspaceName,
  onSubmit,
  onBackButtonClick,
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
        {t('form.createFirstMemberForm.subtitle', { workspaceName })}
      </Form.Subtitle>

      <FieldGroup mbs='x16'>
        <Field>
          <Field.Label>
            <Box display='inline' mie='x8'>
              {t('form.createFirstMemberForm.fields.username.label')}
            </Box>
          </Field.Label>
          <Field.Row>
            <TextInput
              error={errors?.username?.type || undefined}
              {...register('username', { required: true })}
            />
          </Field.Row>
          {errors.username && (
            <Field.Error>{t('component.form.requiredField')}</Field.Error>
          )}
        </Field>

        <Field>
          <Field.Label>
            {t('form.createFirstMemberForm.fields.password.label')}
          </Field.Label>
          <Field.Row>
            <PasswordInput
              {...register('password', {
                validate: validatePassword,
                required: true,
              })}
            />
          </Field.Row>
          {errors.password && (
            <Field.Error>{errors.password.message}</Field.Error>
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
            disabled={isValidating || isSubmitting || !isValid}
          >
            {t('form.createFirstMemberForm.button.submit')}
          </Button>
        </ButtonGroup>
      </Form.Footer>
    </Form>
  );
};

export default CreateFirstMemberForm;
