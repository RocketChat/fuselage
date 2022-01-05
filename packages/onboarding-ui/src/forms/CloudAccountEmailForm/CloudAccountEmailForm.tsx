import { ButtonGroup, Button, EmailInput, Field } from '@rocket.chat/fuselage';
import { useUniqueId } from '@rocket.chat/fuselage-hooks';
import { ReactElement, useEffect } from 'react';
import { useForm, SubmitHandler, Validate } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Form from '../../common/Form';

export type CloudAccountEmailPayload = {
  email: string;
};

type CloudAccountEmailFormProps = {
  currentStep: number;
  stepCount: number;
  initialValues?: Partial<CloudAccountEmailPayload>;
  validateEmail: Validate<string>;
  onBackButtonClick: () => void;
  onSubmit: SubmitHandler<CloudAccountEmailPayload>;
};

const CloudAccountEmailForm = ({
  currentStep,
  stepCount,
  initialValues,
  validateEmail,
  onBackButtonClick,
  onSubmit,
}: CloudAccountEmailFormProps): ReactElement => {
  const { t } = useTranslation();
  const emailField = useUniqueId();

  const {
    register,
    handleSubmit,
    formState: { isValidating, isSubmitting, errors },
    setFocus,
  } = useForm<CloudAccountEmailPayload>({
    defaultValues: {
      email: '',
      ...initialValues,
    },
  });

  useEffect(() => {
    setFocus('email');
  }, [setFocus]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Steps currentStep={currentStep} stepCount={stepCount} />
      <Form.Title>{t('form.serverRegistrationForm.title')}</Form.Title>
      <Form.Subtitle>{t('form.accountEmailForm.description')}</Form.Subtitle>
      <Form.Container>
        <Field>
          <Field.Label htmlFor={emailField}>
            {t('form.accountEmailForm.inputLabel')}
          </Field.Label>
          <Field.Row>
            <EmailInput
              {...register('email', {
                required: true,
                validate: validateEmail,
              })}
              placeholder={t('form.accountEmailForm.inputPlaceholder')}
              id={emailField}
            />
          </Field.Row>
          {errors.email && (
            <Field.Error>{t('component.form.requiredField')}</Field.Error>
          )}
        </Field>
      </Form.Container>
      <Form.Footer>
        <ButtonGroup>
          <Button disabled={isSubmitting} onClick={onBackButtonClick}>
            {t('component.form.action.back')}
          </Button>
          <Button disabled={isValidating || isSubmitting} type='submit' primary>
            {t('component.form.action.next')}
          </Button>
        </ButtonGroup>
      </Form.Footer>
    </Form>
  );
};

export default CloudAccountEmailForm;
