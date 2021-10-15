import colors from '@rocket.chat/fuselage-tokens/colors.json';
import type { ReactElement, ReactNode } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';

import BackgroundLayer from '../../common/BackgroundLayer';
import FormPageLayout from '../../common/FormPageLayout';
import OrganizationInfoForm from '../../forms/OrganizationInfoForm';
import type { OrganizationInfoPayload } from '../../forms/OrganizationInfoForm/OrganizationInfoForm';
import { Title } from './OrganizationInfoPage.styles';

const titleOrganizationInfoPage = () => (
  <Title fontColor={colors.n900}>
    <Trans i18nKey='page.organizationInfoPage.title'>
      A few more details...
    </Trans>
  </Title>
);

type OrganizationInfoPageProps = {
  title?: string;
  description?: string;
  currentStep: number;
  stepCount: number;
  organizationTypeOptions: (readonly [string, string])[];
  organizationIndustryOptions: (readonly [string, string])[];
  organizationSizeOptions: (readonly [string, string])[];
  countryOptions: (readonly [string, string])[];
  initialValues?: OrganizationInfoPayload;
  confirmText?: ReactNode;
  onSubmit: SubmitHandler<OrganizationInfoPayload>;
  onBackButtonClick: () => void;
  onClickSkip?: () => void;
};

const OrganizationInfoPage = (
  props: OrganizationInfoPageProps
): ReactElement => {
  const { t } = useTranslation();
  return (
    <BackgroundLayer>
      <FormPageLayout
        justifyContent='center'
        title={titleOrganizationInfoPage()}
        description={props.description}
        subTitleProps={{
          fontWeight: '400',
          color: colors.n900,
        }}
        subtitle={t('page.organizationInfoPage.subtitle')}
      >
        <OrganizationInfoForm {...props} />
      </FormPageLayout>
    </BackgroundLayer>
  );
};

export default OrganizationInfoPage;
