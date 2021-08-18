import type { ReactElement, ReactNode } from 'react';
import type { SubmitHandler } from 'react-hook-form';

import BackgroundLayer from '../../common/BackgroundLayer';
import FormPageLayout from '../../common/FormPageLayout';
import OrganizationInfoForm from '../../forms/OrganizationInfoForm';
import type { OrganizationInfoPayload } from '../../forms/OrganizationInfoForm/OrganizationInfoForm';

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
): ReactElement => (
  <BackgroundLayer>
    <FormPageLayout title={props.title} description={props.description}>
      <OrganizationInfoForm {...props} />
    </FormPageLayout>
  </BackgroundLayer>
);

export default OrganizationInfoPage;
