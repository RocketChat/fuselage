import type { SelectOption } from '@rocket.chat/fuselage';
import type { ReactElement, ReactNode } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import BackgroundLayer from '../../common/BackgroundLayer';
import FormPageLayout from '../../common/FormPageLayout';
import type { FormPageLayoutStyleProps } from '../../common/Types';
import OrganizationInfoForm from '../../forms/OrganizationInfoForm';
import type { OrganizationInfoPayload } from '../../forms/OrganizationInfoForm/OrganizationInfoForm';

type OrganizationInfoPageProps = {
  title?: ReactNode;
  subtitle?: string;
  description?: string;
  formSubtitle?: string;
  currentStep: number;
  stepCount: number;
  organizationTypeOptions: SelectOption[];
  organizationIndustryOptions: SelectOption[];
  organizationSizeOptions: SelectOption[];
  countryOptions: SelectOption[];
  initialValues?: OrganizationInfoPayload;
  nextStep?: ReactNode;
  onSubmit: SubmitHandler<OrganizationInfoPayload>;
  onBackButtonClick?: () => void;
  onClickSkip?: () => void;
};

const OrganizationInfoPage = ({
  title,
  subtitle,
  description,
  ...props
}: OrganizationInfoPageProps): ReactElement => {
  const { t } = useTranslation();

  const pageLayoutStyleProps: FormPageLayoutStyleProps = {
    justifyContent: 'center',
    subTitleProps: {
      fontWeight: '400',
    },
  };

  return (
    <BackgroundLayer>
      <FormPageLayout
        styleProps={pageLayoutStyleProps}
        title={title || t('page.organizationInfoPage.title')}
        description={description}
        subtitle={subtitle || t('page.organizationInfoPage.subtitle')}
      >
        <OrganizationInfoForm {...props} />
      </FormPageLayout>
    </BackgroundLayer>
  );
};

export default OrganizationInfoPage;
