import {
  EmailInput,
  FieldGroup,
  Field,
  ButtonGroup,
  Button,
  PasswordInput,
  TextInput,
} from '@rocket.chat/fuselage';
import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import Form from '../helpers/Form';

const AdminInfoForm = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <Form>
      <Form.Steps>{t('form.adminInfoForm.steps')}</Form.Steps>
      <Form.Title>{t('form.adminInfoForm.title')}</Form.Title>
      <Form.Subtitle>{t('form.adminInfoForm.subtitle')}</Form.Subtitle>
      <Form.Container>
        <FieldGroup>
          <Field>
            <Field.Label>
              {t('form.adminInfoForm.fields.fullName.placeholder')}
            </Field.Label>
            <Field.Row>
              <TextInput
                placeholder={t(
                  'form.adminInfoForm.fields.fullName.placeholder'
                )}
              />
            </Field.Row>
          </Field>
          <Field>
            <Field.Label>
              {t('form.adminInfoForm.fields.username.label')}
            </Field.Label>
            <Field.Row>
              <TextInput
                placeholder={t(
                  'form.adminInfoForm.fields.username.placeholder'
                )}
              />
            </Field.Row>
          </Field>
          <Field>
            <Field.Label>
              {t('form.adminInfoForm.fields.companyEmail.label')}
            </Field.Label>
            <Field.Row>
              <EmailInput
                placeholder={t(
                  'form.adminInfoForm.fields.companyEmail.placeholder'
                )}
              />
            </Field.Row>
          </Field>
          <Field>
            <Field.Label>
              {t('form.adminInfoForm.fields.password.label')}
            </Field.Label>
            <Field.Row>
              <PasswordInput
                placeholder={t(
                  'form.adminInfoForm.fields.password.placeholder'
                )}
              />
            </Field.Row>
            <Field.Hint>
              {t('form.adminInfoForm.fields.password.hint')}
            </Field.Hint>
          </Field>
        </FieldGroup>
      </Form.Container>
      <Form.Footer>
        <ButtonGroup flexGrow={1}>
          <Button primary>{t('form.adminInfoForm.buttons.success')}</Button>
        </ButtonGroup>
      </Form.Footer>
    </Form>
  );
};

export default AdminInfoForm;
