import {
  FieldGroup,
  Field,
  ButtonGroup,
  Button,
  TextInput,
  Select,
  SelectOptions,
} from '@rocket.chat/fuselage';
import { ReactElement } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Form from '../../common/Form';

type OrganizationInfoFormInputs = {
  organizationName: string;
  organizationType: string;
  organizationIndustry: string;
  organizationSize: string;
  country: string;
};

const OrganizationInfoForm = (): ReactElement => {
  const { t } = useTranslation();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<OrganizationInfoFormInputs>();

  const onSubmit: SubmitHandler<OrganizationInfoFormInputs> = (data) =>
    console.log(data);

  const selectOptions: SelectOptions = [
    ['test', 'test'],
    ['test2', 'test2'],
  ];

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
                {...register('organizationName', { required: true })}
                placeholder={t(
                  'form.organizationInfoForm.fields.organizationName.placeholder'
                )}
              />
            </Field.Row>
            {errors.organizationName && (
              <Field.Error>{t('global.fieldRequired')}</Field.Error>
            )}
          </Field>
          <Field>
            <Field.Label>
              {t('form.organizationInfoForm.fields.organizationType.label')}
            </Field.Label>
            <Field.Row>
              <Controller
                name='organizationType'
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={selectOptions}
                    placeholder={t(
                      'form.organizationInfoForm.fields.organizationType.placeholder'
                    )}
                  />
                )}
              />
            </Field.Row>
          </Field>
          <Field>
            <Field.Label>
              {t('form.organizationInfoForm.fields.organizationIndustry.label')}
            </Field.Label>
            <Field.Row>
              <Controller
                name='organizationIndustry'
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={selectOptions}
                    placeholder={t(
                      'form.organizationInfoForm.fields.organizationIndustry.placeholder'
                    )}
                  />
                )}
              />
            </Field.Row>
          </Field>
          <Field>
            <Field.Label>
              {t('form.organizationInfoForm.fields.organizationSize.label')}
            </Field.Label>
            <Field.Row>
              <Controller
                name='organizationSize'
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={selectOptions}
                    placeholder={t(
                      'form.organizationInfoForm.fields.organizationSize.placeholder'
                    )}
                  />
                )}
              />
            </Field.Row>
          </Field>
          <Field>
            <Field.Label>
              {t('form.organizationInfoForm.fields.country.label')}
            </Field.Label>
            <Field.Row>
              <Controller
                name='country'
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={selectOptions}
                    placeholder={t(
                      'form.organizationInfoForm.fields.country.placeholder'
                    )}
                  />
                )}
              />
            </Field.Row>
          </Field>
        </FieldGroup>
      </Form.Container>
      <Form.Footer>
        <ButtonGroup flexGrow={1}>
          <Button>{t('form.organizationInfoForm.buttons.cancel')}</Button>
          <Button type='submit' primary>
            {t('form.organizationInfoForm.buttons.success')}
          </Button>
        </ButtonGroup>
      </Form.Footer>
    </Form>
  );
};

export default OrganizationInfoForm;
