import {
  FieldGroup,
  Field,
  NumberInput,
  TextInput,
  Button,
} from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import ActionLink from '../../common/ActionLink';
import Form from '../../common/Form';
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
            <Field.Label>
              {t('form.totpForm.fields.totpCode.label')}
            </Field.Label>
            <Field.Row>
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
            </Field.Row>
            {errors.backupCode && (
              <Field.Error>{errors.backupCode.message}</Field.Error>
            )}
            {errors.totpCode && (
              <Field.Error>{errors.totpCode.message}</Field.Error>
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
            {t('form.totpForm.buttonBackupCode.text')}
          </ActionLink>
        </TotpActionsWrapper>
      </Form.Footer>
    </Form>
  );
};

export default TotpForm;
