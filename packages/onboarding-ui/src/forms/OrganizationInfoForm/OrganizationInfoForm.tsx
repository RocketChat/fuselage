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
  Box,
} from '@rocket.chat/fuselage';
import { useBreakpoints, useUniqueId } from '@rocket.chat/fuselage-hooks';
import { ActionLink, Form } from '@rocket.chat/layout';
import type { ReactElement, ReactNode } from 'react';
import { useRef, useEffect } from 'react';
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

  const formId = useUniqueId();
  const organizationNameField = useUniqueId();
  const organizationIndustryField = useUniqueId();
  const organizationSizeField = useUniqueId();
  const countryField = useUniqueId();

  const organizationInfoFormRef = useRef<HTMLElement>(null);

  const {
    control,
    handleSubmit,
    formState: { isValidating, isSubmitting, errors },
  } = useForm<OrganizationInfoPayload>({
    defaultValues: initialValues,
    mode: 'onBlur',
  });

  useEffect(() => {
    if (organizationInfoFormRef.current) {
      organizationInfoFormRef.current.focus();
    }
  }, []);

  return (
    <Form
      ref={organizationInfoFormRef}
      tabIndex={-1}
      aria-labelledby={`${formId}-title`}
      aria-describedby={`${formId}-description`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Form.Header>
        <Form.Steps currentStep={currentStep} stepCount={stepCount} />
        <Form.Title id={`${formId}-title`}>
          {t('form.organizationInfoForm.title')}
        </Form.Title>
        <Form.Subtitle id={`${formId}-description`}>
          {t('form.organizationInfoForm.subtitle')}
        </Form.Subtitle>
      </Form.Header>
      <Form.Container>
        <FieldGroup>
          <Field>
            <FieldLabel required htmlFor={organizationNameField}>
              {t('form.organizationInfoForm.fields.organizationName.label')}
            </FieldLabel>
            <FieldRow>
              <Controller
                name='organizationName'
                control={control}
                rules={{
                  required: String(t('component.form.requiredField')),
                }}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    placeholder={t(
                      'form.organizationInfoForm.fields.organizationName.placeholder'
                    )}
                    aria-describedby={`${organizationNameField}-error}`}
                    aria-required='true'
                    aria-invalid={Boolean(errors.organizationName)}
                    id={organizationNameField}
                  />
                )}
              />
            </FieldRow>
            {errors.organizationName && (
              <FieldError
                aria-live='assertive'
                id={`${organizationNameField}-error}`}
              >
                {t('component.form.requiredField')}
              </FieldError>
            )}
          </Field>
          <Field>
            <FieldLabel required htmlFor={organizationIndustryField}>
              {t('form.organizationInfoForm.fields.organizationIndustry.label')}
            </FieldLabel>
            <FieldRow>
              <Controller
                name='organizationIndustry'
                control={control}
                rules={{ required: String(t('component.form.requiredField')) }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={organizationIndustryOptions}
                    placeholder={t(
                      'form.organizationInfoForm.fields.organizationIndustry.placeholder'
                    )}
                    aria-required='true'
                    aria-invalid={Boolean(errors.organizationIndustry)}
                    aria-describedby={`${organizationIndustryField}-error}`}
                    id={organizationIndustryField}
                  />
                )}
              />
            </FieldRow>
            {errors.organizationIndustry && (
              <FieldError
                aria-live='assertive'
                id={`${organizationIndustryField}-error}`}
              >
                {t('component.form.requiredField')}
              </FieldError>
            )}
          </Field>
          <Field>
            <FieldLabel required htmlFor={organizationSizeField}>
              {t('form.organizationInfoForm.fields.organizationSize.label')}
            </FieldLabel>
            <FieldRow>
              <Controller
                name='organizationSize'
                control={control}
                rules={{ required: String(t('component.form.requiredField')) }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={organizationSizeOptions}
                    placeholder={t(
                      'form.organizationInfoForm.fields.organizationSize.placeholder'
                    )}
                    aria-required='true'
                    aria-invalid={Boolean(errors.organizationSize)}
                    aria-describedby={`${organizationSizeField}-error}`}
                    id={organizationSizeField}
                  />
                )}
              />
            </FieldRow>
            {errors.organizationSize && (
              <FieldError
                aria-live='assertive'
                id={`${organizationSizeField}-error}`}
              >
                {t('component.form.requiredField')}
              </FieldError>
            )}
          </Field>
          <Field>
            <FieldLabel required htmlFor={countryField}>
              {t('form.organizationInfoForm.fields.country.label')}
            </FieldLabel>
            <FieldRow>
              <Controller
                name='country'
                control={control}
                rules={{ required: String(t('component.form.requiredField')) }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={countryOptions}
                    placeholder={t(
                      'form.organizationInfoForm.fields.country.placeholder'
                    )}
                    aria-required='true'
                    aria-invalid={Boolean(errors.country)}
                    aria-describedby={`${countryField}-error}`}
                    id={countryField}
                  />
                )}
              />
            </FieldRow>
            {errors.country && (
              <FieldError aria-live='assertive' id={`${countryField}-error}`}>
                {t('component.form.requiredField')}
              </FieldError>
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
