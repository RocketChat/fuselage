import { BackgroundLayer } from '@rocket.chat/layout';
import type { ComponentProps, ReactElement } from 'react';

import type { FormPageLayoutStyleProps } from '../../Types';
import FormPageLayout from '../../common/FormPageLayout';
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
