import {
  FieldGroup,
  Field,
  ButtonGroup,
  Button,
  TextInput,
  Select,
} from '@rocket.chat/fuselage';
import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import Form from '../helpers/Form';

const OrganizationInfoForm = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <Form>
      <Form.Steps>{t('form.organizationInfoForm.steps')}</Form.Steps>
      <Form.Title>{t('form.organizationInfoForm.title')}</Form.Title>
      <Form.Subtitle>{t('form.organizationInfoForm.subtitle')}</Form.Subtitle>
      <Form.Container>
        <FieldGroup>
          <Field>
            <Field.Label>
              {t('form.organizationInfoForm.fields.organizationName.label')}
            </Field.Label>
            <Field.Row>
              <TextInput
                placeholder={t(
                  'form.organizationInfoForm.fields.organizationName.placeholder'
                )}
              />
            </Field.Row>
          </Field>
          <Field>
            <Field.Label>
              {t('form.organizationInfoForm.fields.organizationType.label')}
            </Field.Label>
            <Field.Row>
              <Select
                options={[]}
                onChange={() => undefined}
                placeholder={t(
                  'form.organizationInfoForm.fields.organizationType.placeholder'
                )}
              />
            </Field.Row>
          </Field>
          <Field>
            <Field.Label>
              {t('form.organizationInfoForm.fields.organizationIndustry.label')}
            </Field.Label>
            <Field.Row>
              <Select
                options={[]}
                onChange={() => undefined}
                placeholder={t(
                  'form.organizationInfoForm.fields.organizationIndustry.placeholder'
                )}
              />
            </Field.Row>
          </Field>
          <Field>
            <Field.Label>
              {t('form.organizationInfoForm.fields.organizationSize.label')}
            </Field.Label>
            <Field.Row>
              <Select
                options={[]}
                onChange={() => undefined}
                placeholder={t(
                  'form.organizationInfoForm.fields.organizationSize.placeholder'
                )}
              />
            </Field.Row>
          </Field>
          <Field>
            <Field.Label>
              {t('form.organizationInfoForm.fields.country.label')}
            </Field.Label>
            <Field.Row>
              <Select
                options={[]}
                onChange={() => undefined}
                placeholder={t(
                  'form.organizationInfoForm.fields.country.placeholder'
                )}
              />
            </Field.Row>
          </Field>
        </FieldGroup>
      </Form.Container>
      <Form.Footer>
        <ButtonGroup flexGrow={1}>
          <Button>{t('form.organizationInfoForm.buttons.cancel')}</Button>
          <Button primary>
            {t('form.organizationInfoForm.buttons.success')}
          </Button>
        </ButtonGroup>
      </Form.Footer>
    </Form>
  );
};

export default OrganizationInfoForm;
