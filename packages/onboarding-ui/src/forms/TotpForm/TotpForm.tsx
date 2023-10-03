import {
  FieldGroup,
  Field,
  NumberInput,
  TextInput,
  Button,
  FieldLabel,
  FieldRow,
  FieldError,
} from '@rocket.chat/fuselage';
import { ActionLink, Form } from '@rocket.chat/layout';
import type { ReactElement } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { TotpActionsWrapper } from './TotpForm.styles';

export type TotpFormPayload = {
  totpCode: string;
  backupCode: string;
};

type TotpFormProps = {
  initialValues?: TotpFormPayload;
  onChangeTotpForm: () => void;
  isBackupCode?: boolean;
  formError?: string;
  onSubmit: SubmitHandler<TotpFormPayload>;
};

const TotpForm = ({
  onSubmit,
  initialValues,
  isBackupCode = false,
  onChangeTotpForm,
}: TotpFormProps): ReactElement => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors, isValidating, isSubmitting },
  } = useForm<TotpFormPayload>({
    defaultValues: {
      ...initialValues,
    },
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Container>
        <FieldGroup>
          <Field>
            {isBackupCode ? (
              <FieldLabel>
                {t('form.totpForm.fields.backupCode.label')}
              </FieldLabel>
            ) : (
              <FieldLabel>
                {t('form.totpForm.fields.totpCode.label')}
              </FieldLabel>
            )}
            <FieldRow>
              {isBackupCode ? (
                <TextInput
                  {...register('backupCode', {
                    required: String(t('component.form.requiredField')),
                  })}
                  placeholder={t('form.totpForm.fields.backupCode.placeholder')}
                />
              ) : (
                <NumberInput
                  {...register('totpCode', {
                    required: String(t('component.form.requiredField')),
                  })}
                  placeholder={t('form.totpForm.fields.totpCode.placeholder')}
                />
              )}
            </FieldRow>
            {errors.backupCode && (
              <FieldError>{errors.backupCode.message}</FieldError>
            )}
            {errors.totpCode && (
              <FieldError>{errors.totpCode.message}</FieldError>
            )}
          </Field>
        </FieldGroup>
      </Form.Container>
      <Form.Footer>
        <TotpActionsWrapper>
          <Button type='submit' disabled={isValidating || isSubmitting} primary>
            {t('form.totpForm.button.text')}
          </Button>
          <ActionLink fontScale='p2' onClick={onChangeTotpForm}>
            {isBackupCode
              ? t('form.totpForm.buttonTotpCode.text')
              : t('form.totpForm.buttonBackupCode.text')}
          </ActionLink>
        </TotpActionsWrapper>
      </Form.Footer>
    </Form>
  );
};

export default TotpForm;
