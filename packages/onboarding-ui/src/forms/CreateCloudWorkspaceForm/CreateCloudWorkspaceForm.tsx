import type { SelectOption } from '@rocket.chat/fuselage';
import {
  FieldLabel,
  FieldRow,
  FieldGroup,
  Field,
  FieldError,
  ButtonGroup,
  Button,
  Box,
  Divider,
  EmailInput,
  TextInput,
  Select,
  CheckBox,
  Grid,
} from '@rocket.chat/fuselage';
import { Form } from '@rocket.chat/layout';
import type { ReactElement, FocusEvent } from 'react';
import type { SubmitHandler, Validate } from 'react-hook-form';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation, Trans } from 'react-i18next';

import Tooltip from '../../common/InformationTooltipTrigger';
import WorkspaceUrlInput from './WorkspaceUrlInput';

type CreateCloudWorkspaceFormPayload = {
  organizationEmail: string;
  workspaceName: string;
  workspaceURL: string;
  serverRegion: string;
  language: string;
  agreement: boolean;
  updates: boolean;
};

type CreateCloudWorkspaceFormProps = {
  defaultValues?: CreateCloudWorkspaceFormPayload;
  onSubmit: SubmitHandler<CreateCloudWorkspaceFormPayload>;
  serverRegionOptions: SelectOption[];
  languageOptions: SelectOption[];
  domain: string;
  onBackButtonClick?: () => void;
  validateUrl: Validate<string>;
  validateEmail: Validate<string>;
};

const CreateCloudWorkspaceForm = ({
  defaultValues,
  onSubmit,
  domain,
  serverRegionOptions,
  languageOptions,
  onBackButtonClick,
  validateUrl,
  validateEmail,
}: CreateCloudWorkspaceFormProps): ReactElement => {
  const { t } = useTranslation();

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { isValid, isValidating, isSubmitting, errors },
  } = useForm<CreateCloudWorkspaceFormPayload>({ mode: 'onChange' });

  const onNameBlur = (e: FocusEvent<HTMLInputElement>) => {
    const fieldValue = e.target.value;
    const workspaceURL = fieldValue.replace(/[^a-zA-Z0-9-]/g, '').toLowerCase();
    setValue('workspaceURL', workspaceURL, { shouldValidate: true });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Header>
        <Form.Title>{t('form.createCloudWorkspace.title')}</Form.Title>
      </Form.Header>

      <FieldGroup mbs={16}>
        <Field>
          <FieldLabel>
            {t('form.createCloudWorkspace.fields.orgEmaillabel')}
          </FieldLabel>
          <FieldRow>
            <EmailInput
              {...register('organizationEmail', {
                required: true,
                validate: validateEmail,
              })}
              defaultValue={defaultValues?.organizationEmail}
              error={errors?.organizationEmail?.type || undefined}
            />
          </FieldRow>
          {errors?.organizationEmail && (
            <FieldError>{errors.organizationEmail.message}</FieldError>
          )}
        </Field>

        <Field>
          <FieldLabel>
            <Box display='inline' mie={8}>
              {t('form.createCloudWorkspace.fields.workspaceNamelabel')}
            </Box>
          </FieldLabel>
          <FieldRow>
            <TextInput
              {...register('workspaceName', { required: true })}
              defaultValue={defaultValues?.workspaceName}
              error={errors?.workspaceName?.type || undefined}
              onBlur={onNameBlur}
            />
          </FieldRow>
          {errors.workspaceName && (
            <FieldError>{t('component.form.requiredField')}</FieldError>
          )}
        </Field>

        <Field>
          <FieldLabel>
            <Box display='inline' mie={8}>
              {t('form.createCloudWorkspace.fields.workspaceUrllabel')}
            </Box>
          </FieldLabel>
          <FieldRow>
            <WorkspaceUrlInput
              domain={domain}
              {...register('workspaceURL', {
                required: true,
                validate: validateUrl,
              })}
              defaultValue={defaultValues?.workspaceURL}
            />
          </FieldRow>
          {errors?.workspaceURL && (
            <FieldError>{errors.workspaceURL.message}</FieldError>
          )}
        </Field>

        <Grid mb={16}>
          <Grid.Item>
            <Field>
              <FieldLabel>
                <Box display='inline' mie={8}>
                  {t('form.createCloudWorkspace.fields.serverRegionlabel')}
                </Box>
                <Tooltip
                  text={t(
                    'form.createCloudWorkspace.fields.serverRegion.tooltip'
                  )}
                />
              </FieldLabel>
              <FieldRow>
                <Controller
                  name='serverRegion'
                  control={control}
                  rules={{ required: true }}
                  defaultValue={defaultValues?.serverRegion}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={serverRegionOptions}
                      placeholder={t(
                        'form.createCloudWorkspace.fields.serverRegionlabel'
                      )}
                    />
                  )}
                />
              </FieldRow>
            </Field>
          </Grid.Item>

          <Grid.Item>
            <Field>
              <FieldLabel>
                <Box display='inline' mie={8}>
                  {t('form.createCloudWorkspace.fields.languagelabel')}
                </Box>
                <Tooltip
                  text={t('form.createCloudWorkspace.fields.language.tooltip')}
                />
              </FieldLabel>
              <FieldRow>
                <Controller
                  name='language'
                  control={control}
                  rules={{ required: true }}
                  defaultValue={defaultValues?.language}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={languageOptions}
                      placeholder={t(
                        'form.createCloudWorkspace.fields.languagelabel'
                      )}
                    />
                  )}
                />
              </FieldRow>
            </Field>
          </Grid.Item>
        </Grid>

        <Divider mb={0} />

        <Field>
          <FieldRow justifyContent='flex-start'>
            <CheckBox {...register('agreement', { required: true })} mie={8} />
            <Box is='label' htmlFor='agreement' withRichContent fontScale='c1'>
              <Trans i18nKey='component.form.termsAndConditions'>
                I agree with
                <a
                  href='https://rocket.chat/terms'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Terms and Conditions
                </a>
                and
                <a
                  href='https://rocket.chat/privacy'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Privacy Policy
                </a>
              </Trans>
            </Box>
          </FieldRow>
          {errors.agreement?.type === 'required' && (
            <FieldError>{t('component.form.requiredField')}</FieldError>
          )}
        </Field>

        <Field>
          <FieldRow justifyContent='flex-start'>
            <CheckBox {...register('updates')} mie={8} />
            <Box fontScale='c1'>
              {t('form.createCloudWorkspace.fields.keepMeInformed')}
            </Box>
          </FieldRow>
        </Field>
      </FieldGroup>

      <Form.Footer>
        <ButtonGroup>
          {onBackButtonClick && (
            <Button disabled={isSubmitting} onClick={onBackButtonClick}>
              {t('component.form.action.back')}
            </Button>
          )}

          <Button
            type='submit'
            primary
            disabled={!isValid}
            loading={isSubmitting || isValidating}
          >
            {t('component.form.action.next')}
          </Button>
        </ButtonGroup>
      </Form.Footer>
    </Form>
  );
};

export default CreateCloudWorkspaceForm;
