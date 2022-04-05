import type { ComponentProps, ReactElement } from 'react';

import BackgroundLayer from '../../common/BackgroundLayer';
import FormPageLayout from '../../common/FormPageLayout';
import type { FormPageLayoutStyleProps } from '../../common/Types';
import CreateFirstMemberForm from '../../forms/CreateFirstMemberForm';
import TitleCreateFirstMemberPage from './TitleCreateFirstMemberPage';

type CreateCloudWorkspacePageProps = ComponentProps<
  typeof CreateFirstMemberForm
>;

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
