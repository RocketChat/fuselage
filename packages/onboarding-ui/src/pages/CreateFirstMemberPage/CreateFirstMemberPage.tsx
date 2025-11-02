import { BackgroundLayer } from '@rocket.chat/layout';
import type { ComponentProps, ReactElement } from 'react';

import type { FormPageLayoutStyleProps } from '../../Types/index.js';
import FormPageLayout from '../../common/FormPageLayout.js';
import CreateFirstMemberForm from '../../forms/CreateFirstMemberForm/index.js';

import TitleCreateFirstMemberPage from './TitleCreateFirstMemberPage.js';

type CreateCloudWorkspacePageProps = ComponentProps<
  typeof CreateFirstMemberForm
>;

const CreateFirstMemberPage = (
  props: CreateCloudWorkspacePageProps,
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
