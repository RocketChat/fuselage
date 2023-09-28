import {
  Box,
  ButtonGroup,
  Button,
  Field,
  CheckBox,
  FieldLabel,
  FieldRow,
  FieldError,
  TextInput,
  Label,
} from '@rocket.chat/fuselage';
import { useUniqueId, useBreakpoints } from '@rocket.chat/fuselage-hooks';
import { Form } from '@rocket.chat/layout';
import type { ReactElement } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm, FormProvider } from 'react-hook-form';
import { useTranslation, Trans } from 'react-i18next';

export type RegisterOfflinePayload = {
  token: string;
  agreement: boolean;
};

type RegisterOfflineFormProps = {
  termsHref: string;
  policyHref: string;
  onSubmit: SubmitHandler<RegisterOfflinePayload>;
  onBackButtonClick: () => void;
};

const RegisterOfflineForm = ({
  termsHref,
  policyHref,
  onSubmit,
  onBackButtonClick,
}: RegisterOfflineFormProps): ReactElement => {
  const { t } = useTranslation();
  const emailField = useUniqueId();

  const breakpoints = useBreakpoints();
  const isMobile = !breakpoints.includes('md');

  const form = useForm<RegisterOfflinePayload>({
    mode: 'onChange',
    defaultValues: {
      token: '',
      agreement: false,
    },
  });

  const {
    register,
    formState: { isSubmitting, isValid, errors },
    handleSubmit,
  } = form;

  return (
    <FormProvider {...form}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Header>
          <Form.Title>{t('form.registerOfflineForm.title')}</Form.Title>
        </Form.Header>
        <Form.Container>
          <Box mbe='24px' fontScale='p2'>
            <Trans key={'form.registerOfflineForm.description'}>
              If for any reason your workspace can’t be connected to the
              internet, follow these steps:
              <Box mbe='24px' />
              1. Go to: <strong>{'cloud.rocket.chat > Workspaces'}</strong> and
              click “<strong>Register self-managed</strong>”<br />
              2. Copy the token and paste it below"
            </Trans>
          </Box>
          <Field>
            <FieldLabel
              required
              display='flex'
              alignItems='center'
              htmlFor={emailField}
            >
              {t(
                'form.registerOfflineForm.fields.registrationToken.inputLabel'
              )}
            </FieldLabel>
            <FieldRow>
              <TextInput
                {...register('token', {
                  required: true,
                })}
                id={emailField}
              />
            </FieldRow>
            {errors.token && (
              <FieldError>{t('component.form.requiredField')}</FieldError>
            )}
          </Field>
          <Box mbs={24}>
            <Box
              display='flex'
              flexDirection='row'
              alignItems='flex-start'
              color='default'
              fontScale='c1'
              lineHeight={20}
            >
              <Box mie={8}>
                <CheckBox {...register('agreement', { required: true })} />{' '}
              </Box>
              <Label required htmlFor='agreement' withRichContent>
                <Trans i18nKey='component.form.termsAndConditions'>
                  I agree with
                  <a href={termsHref} target='_blank' rel='noopener noreferrer'>
                    Terms and Conditions
                  </a>
                  and
                  <a
                    href={policyHref}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Privacy Policy
                  </a>
                </Trans>
              </Label>
            </Box>
          </Box>
        </Form.Container>
        <Form.Footer>
          <Box display='flex' flexDirection='column'>
            <ButtonGroup vertical={isMobile} flexGrow={1}>
              <Button type='submit' primary disabled={isSubmitting || !isValid}>
                {t('component.form.action.register')}
              </Button>
              <Button type='button' onClick={onBackButtonClick}>
                {t('component.form.action.back')}
              </Button>
            </ButtonGroup>
          </Box>
        </Form.Footer>
      </Form>
    </FormProvider>
  );
};

export default RegisterOfflineForm;
