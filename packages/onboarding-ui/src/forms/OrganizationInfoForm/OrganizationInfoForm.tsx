import type { SelectOption } from '@rocket.chat/fuselage';
import {
  FieldError,
  FieldLabel,
  FieldRow,
  FieldGroup,
  Field,
  ButtonGroup,
  Button,
  TextInput,
  Select,
  SelectFiltered,
  Box,
} from '@rocket.chat/fuselage';
import { useBreakpoints, useUniqueId } from '@rocket.chat/fuselage-hooks';
import { ActionLink, Form } from '@rocket.chat/layout';
import type { ReactElement, ReactNode } from 'react';
import { useEffect } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

export type OrganizationInfoPayload = {
  organizationName: string;
  organizationIndustry: string;
  organizationSize: string;
  country: string;
};

type OrganizationInfoFormProps = {
  currentStep: number;
  stepCount: number;
  organizationIndustryOptions: SelectOption[];
  organizationSizeOptions: SelectOption[];
  countryOptions: SelectOption[];
  nextStep?: ReactNode;
  initialValues?: OrganizationInfoPayload;
  onSubmit: SubmitHandler<OrganizationInfoPayload>;
  onBackButtonClick?: () => void;
  onClickSkip?: () => void;
};

const OrganizationInfoForm = ({
  currentStep,
  stepCount,
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
  const organizationIndustryField = useUniqueId();
  const organizationSizeField = useUniqueId();
  const countryField = useUniqueId();

  const {
    register,
    control,
    handleSubmit,
    formState: { isValidating, isSubmitting, errors },
    setFocus,
  } = useForm<OrganizationInfoPayload>({
    defaultValues: initialValues,
  });

  useEffect(() => {
    setFocus('organizationName');
  }, [setFocus]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Header>
        <Form.Steps currentStep={currentStep} stepCount={stepCount} />
        <Form.Title>{t('form.organizationInfoForm.title')}</Form.Title>
        <Form.Subtitle>{t('form.organizationInfoForm.subtitle')}</Form.Subtitle>
      </Form.Header>
      <Form.Container>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor={organizationNameField}>
              {t('form.organizationInfoForm.fields.organizationName.label')}
            </FieldLabel>
            <FieldRow>
              <TextInput
                {...register('organizationName', { required: true })}
                placeholder={t(
                  'form.organizationInfoForm.fields.organizationName.placeholder'
                )}
                id={organizationNameField}
              />
            </FieldRow>
            {errors.organizationName && (
              <FieldError>{t('component.form.requiredField')}</FieldError>
            )}
          </Field>
          <Field>
            <FieldLabel htmlFor={organizationIndustryField}>
              {t('form.organizationInfoForm.fields.organizationIndustry.label')}
            </FieldLabel>
            <FieldRow>
              <Controller
                name='organizationIndustry'
                control={control}
                rules={{ required: true }}
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
            </FieldRow>
            {errors.organizationIndustry && (
              <FieldError>{t('component.form.requiredField')}</FieldError>
            )}
          </Field>
          <Field>
            <FieldLabel htmlFor={organizationSizeField}>
              {t('form.organizationInfoForm.fields.organizationSize.label')}
            </FieldLabel>
            <FieldRow>
              <Controller
                name='organizationSize'
                control={control}
                rules={{ required: true }}
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
            </FieldRow>
            {errors.organizationSize && (
              <FieldError>{t('component.form.requiredField')}</FieldError>
            )}
          </Field>
          <Field>
            <FieldLabel htmlFor={countryField}>
              {t('form.organizationInfoForm.fields.country.label')}
            </FieldLabel>
            <FieldRow>
              <Controller
                name='country'
                control={control}
                rules={{ required: true }}
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
            </FieldRow>
            {errors.country && (
              <FieldError>{t('component.form.requiredField')}</FieldError>
            )}
          </Field>
        </FieldGroup>
      </Form.Container>
      <Form.Footer>
        <ButtonGroup vertical={isMobile} flexGrow={1}>
          {onBackButtonClick && (
            <Button disabled={isSubmitting} onClick={onBackButtonClick}>
              {t('component.form.action.back')}
            </Button>
          )}

          <Button type='submit' primary disabled={isValidating || isSubmitting}>
            {nextStep ?? t('component.form.action.next')}
          </Button>

          {onClickSkip && (
            <Box withTruncatedText flexGrow={1}>
              <ButtonGroup flexGrow={1} align='end'>
                <ActionLink onClick={onClickSkip}>
                  {t('component.form.action.skip')}
                </ActionLink>
              </ButtonGroup>
            </Box>
          )}
        </ButtonGroup>
      </Form.Footer>
    </Form>
  );
};

export default OrganizationInfoForm;
