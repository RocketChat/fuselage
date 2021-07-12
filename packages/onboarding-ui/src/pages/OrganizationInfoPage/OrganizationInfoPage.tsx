import { Box } from '@rocket.chat/fuselage';
import { ReactElement } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import BackgroundLayer from '../../common/BackgroundLayer';
import FormPageLayout from '../../common/FormPageLayout';
import OrganizationInfoForm from '../../forms/OrganizationInfoForm';

type OrganizationInfoPageProps = {
  currentStep: number;
  stepCount: number;
  organizationTypeOptions: (readonly [string, string])[];
  organizationIndustryOptions: (readonly [string, string])[];
  organizationSizeOptions: (readonly [string, string])[];
  countryOptions: (readonly [string, string])[];
  onSubmit: SubmitHandler<{
    organizationName: string;
    organizationType: string;
    organizationIndustry: string;
    organizationSize: string;
    country: string;
  }>;
  onBackButtonClick: () => void;
};

const OrganizationInfoPage = (
  props: OrganizationInfoPageProps
): ReactElement => {
  const { t } = useTranslation();

  return (
    <BackgroundLayer>
      <FormPageLayout
        title={
          <Box
            fontFamily='sans'
            fontWeight={800}
            fontSize='inherit'
            lineHeight='inherit'
          >
            {t('page.form.title')}
          </Box>
        }
      >
        <OrganizationInfoForm {...props} />
      </FormPageLayout>
    </BackgroundLayer>
  );
};

export default OrganizationInfoPage;
