import colors from '@rocket.chat/fuselage-tokens/colors.json';
import type { ReactElement } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { Trans } from 'react-i18next';

import BackgroundLayer from '../../common/BackgroundLayer';
import FormPageLayout from '../../common/FormPageLayout';
import type { FormPageLayoutStyleProps } from '../../common/Types';
import CloudAccountEmailForm from '../../forms/CloudAccountEmailForm';
import type { CloudAccountEmailPayload } from '../../forms/CloudAccountEmailForm/CloudAccountEmailForm';
import { Title } from './CloudAccountEmailPage.styles';

const titleCloudEmailPages = () => (
  <Title>
    <Trans i18nKey='page.form.title'>
      Let's
      <Title fontColor={colors.b500}>Launch</Title>
      Your Workspace
    </Trans>
  </Title>
);

type CloudAccountEmailPageProps = {
  currentStep: number;
  stepCount: number;
  initialValues?: Partial<CloudAccountEmailPayload>;
  onBackButtonClick: () => void;
  onSubmit: SubmitHandler<{
    email: string;
  }>;
};

const pageLayoutStyleProps: FormPageLayoutStyleProps = {
  justifyContent: 'center',
  paddingEnd: '135',
};

const CloudAccountEmailPage = (
  props: CloudAccountEmailPageProps
): ReactElement => (
  <BackgroundLayer>
    <FormPageLayout
      title={titleCloudEmailPages()}
      styleProps={pageLayoutStyleProps}
    >
      <CloudAccountEmailForm {...props} />
    </FormPageLayout>
  </BackgroundLayer>
);

export default CloudAccountEmailPage;
