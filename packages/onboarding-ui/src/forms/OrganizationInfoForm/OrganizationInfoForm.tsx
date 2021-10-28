import {
  FieldGroup,
  Field,
  ButtonGroup,
  Button,
  TextInput,
  Select,
  SelectFiltered,
  SelectOptions,
  Box,
} from '@rocket.chat/fuselage';
import {
  useBreakpoints,
  useUniqueId,
  useAutoFocus,
} from '@rocket.chat/fuselage-hooks';
import type { ReactElement, ReactNode } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Form from '../../common/Form';

export type OrganizationInfoPayload = {
  organizationName: string;
  organizationType: string;
  organizationIndustry: string;
  organizationSize: string;
  country: string;
};

type OrganizationInfoFormProps = {
  currentStep: number;
  stepCount: number;
  organizationTypeOptions: SelectOptions;
  organizationIndustryOptions: SelectOptions;
  organizationSizeOptions: SelectOptions;
  countryOptions: SelectOptions;
  nextStep?: ReactNode;
  initialValues?: OrganizationInfoPayload;
  onSubmit: SubmitHandler<OrganizationInfoPayload>;
  onBackButtonClick: () => void;
  onClickSkip?: () => void;
};

const OrganizationInfoForm = ({
  currentStep,
  stepCount,
  organizationTypeOptions,
  organizationIndustryOptions,
  organizationSizeOptions,
  countryOptions,
  nextStep,
  initialValues,
  onSubmit,
  onBackButtonClick,
  onClickSkip,
}: OrganizationInfoFormProps): ReactElement => {
  const { t } = useTranslation();
  const breakpoints = useBreakpoints();
  const isMobile = !breakpoints.includes('md');

  const organizationNameField = useUniqueId();
  const organizationTypeField = useUniqueId();
  const organizationIndustryField = useUniqueId();
  const organizationSizeField = useUniqueId();
  const countryField = useUniqueId();

  const autofocus = useAutoFocus();

  const {
    register,
    control,
    handleSubmit,
    formState: { isValidating, isSubmitting, errors },
  } = useForm<OrganizationInfoPayload>({
    defaultValues: initialValues,
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Steps currentStep={currentStep} stepCount={stepCount} />
      <Form.Title>{t('form.organizationInfoForm.title')}</Form.Title>
      <Form.Subtitle>{t('form.organizationInfoForm.subtitle')}</Form.Subtitle>
      <Form.Container>
        <FieldGroup>
          <Field>
            <Field.Label htmlFor={organizationNameField}>
              {t('form.organizationInfoForm.fields.organizationName.label')}
            </Field.Label>
            <Field.Row>
              <TextInput
                {...register('organizationName', { required: true })}
                placeholder={t(
                  'form.organizationInfoForm.fields.organizationName.placeholder'
                )}
                id={organizationNameField}
                ref={autofocus}
              />
            </Field.Row>
            {errors.organizationName && (
              <Field.Error>{t('component.form.requiredField')}</Field.Error>
            )}
          </Field>
          <Field>
            <Field.Label htmlFor={organizationTypeField}>
              {t('form.organizationInfoForm.fields.organizationType.label')}
            </Field.Label>
            <Field.Row>
              <Controller
                name='organizationType'
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={organizationTypeOptions}
                    placeholder={t(
                      'form.organizationInfoForm.fields.organizationType.placeholder'
                    )}
                    id={organizationTypeField}
                  />
                )}
              />
            </Field.Row>
          </Field>
          <Field>
            <Field.Label htmlFor={organizationIndustryField}>
              {t('form.organizationInfoForm.fields.organizationIndustry.label')}
            </Field.Label>
            <Field.Row>
              <Controller
                name='organizationIndustry'
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={organizationIndustryOptions}
                    placeholder={t(
                      'form.organizationInfoForm.fields.organizationIndustry.placeholder'
                    )}
                    id={organizationIndustryField}
                  />
                )}
              />
            </Field.Row>
          </Field>
          <Field>
            <Field.Label htmlFor={organizationSizeField}>
              {t('form.organizationInfoForm.fields.organizationSize.label')}
            </Field.Label>
            <Field.Row>
              <Controller
                name='organizationSize'
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={organizationSizeOptions}
                    placeholder={t(
                      'form.organizationInfoForm.fields.organizationSize.placeholder'
                    )}
                    id={organizationSizeField}
                  />
                )}
              />
            </Field.Row>
          </Field>
          <Field>
            <Field.Label htmlFor={countryField}>
              {t('form.organizationInfoForm.fields.country.label')}
            </Field.Label>
            <Field.Row>
              <Controller
                name='country'
                control={control}
                render={({ field }) => (
                  <SelectFiltered
                    {...field}
                    options={countryOptions}
                    placeholder={t(
                      'form.organizationInfoForm.fields.country.placeholder'
                    )}
                    id={countryField}
                  />
                )}
              />
            </Field.Row>
          </Field>
        </FieldGroup>
      </Form.Container>
      <Form.Footer>
        <ButtonGroup vertical={isMobile} flexGrow={1}>
          <Button disabled={isSubmitting} onClick={onBackButtonClick}>
            {t('component.form.action.back')}
          </Button>

          <Button type='submit' primary disabled={isValidating || isSubmitting}>
            {nextStep ?? t('component.form.action.next')}
          </Button>

          {onClickSkip && (
            <Box withTruncatedText flexGrow={1}>
              <ButtonGroup flexGrow={1} align='end'>
                <Button nude info onClick={onClickSkip}>
                  {t('component.form.action.skip')}
                </Button>
              </ButtonGroup>
            </Box>
          )}
        </ButtonGroup>
      </Form.Footer>
    </Form>
  );
};

export default OrganizationInfoForm;
