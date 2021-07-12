import type { ReactElement } from 'react';
import type { SubmitHandler } from 'react-hook-form';

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
): ReactElement => (
  <BackgroundLayer>
    <FormPageLayout>
      <OrganizationInfoForm {...props} />
    </FormPageLayout>
  </BackgroundLayer>
);

export default OrganizationInfoPage;
