import type { ReactElement } from 'react';
import type { SubmitHandler } from 'react-hook-form';

import BackgroundLayer from '../../common/BackgroundLayer';
import FormPageLayout from '../../common/FormPageLayout';
import type { FormPageLayoutStyleProps } from '../../common/Types';
import CreateFirstMemberForm from '../../forms/CreateFirstMemberForm';
import TitleCreateFirstMemberPage from './TitleCreateFirstMemberPage';

type CreateCloudWorkspacePageProps = {
  currentStep: number;
  stepCount: number;
  workspaceName: string;
  onSubmit: SubmitHandler<{
    username: string;
    password: string;
  }>;
  onBackButtonClick: () => void;
  validatePassword: (url: string) => Promise<boolean>;
};

const CreateFirstMemberPage = (
  props: CreateCloudWorkspacePageProps
): ReactElement => {
  const pageLayoutStyleProps: FormPageLayoutStyleProps = {
    justifyContent: 'center',
  };

  return (
    <BackgroundLayer>
      <FormPageLayout
        title={<TitleCreateFirstMemberPage />}
        styleProps={pageLayoutStyleProps}
      >
        <CreateFirstMemberForm {...props} />
      </FormPageLayout>
    </BackgroundLayer>
  );
};

export default CreateFirstMemberPage;
