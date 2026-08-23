import { BackgroundLayer } from '@rocket.chat/layout';
import type { ComponentProps } from 'react';

import type { FormPageLayoutStyleProps } from '../../Types';
import FormPageLayout from '../../common/FormPageLayout';
import CreateFirstMemberForm from '../../forms/CreateFirstMemberForm';

import TitleCreateFirstMemberPage from './TitleCreateFirstMemberPage';

export type CreateFirstMemberPageProps = ComponentProps<
  typeof CreateFirstMemberForm
>;

const CreateFirstMemberPage = (props: CreateFirstMemberPageProps) => {
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
