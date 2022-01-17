import type { ReactElement } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { Trans } from 'react-i18next';

import BackgroundLayer from '../../common/BackgroundLayer';
import FormPageLayout from '../../common/FormPageLayout';
import { Title, TitleHighlight } from '../../common/FormPageLayout.styles';
import type { FormPageLayoutStyleProps } from '../../common/Types';
import StandaloneServerForm from '../../forms/StandaloneServerForm';
import type { StandaloneServerPayload } from '../../forms/StandaloneServerForm/StandaloneServerForm';

type RegisteredServerPageProps = {
  currentStep: number;
  stepCount: number;
  initialValues?: Partial<StandaloneServerPayload>;
  onSubmit: SubmitHandler<StandaloneServerPayload>;
  onBackButtonClick: () => void;
};

const pageLayoutStyleProps: FormPageLayoutStyleProps = {
  justifyContent: 'center',
};

const StandaloneServerPage = (
  props: RegisteredServerPageProps
): ReactElement => (
  <BackgroundLayer>
    <FormPageLayout
      title={
        <Title>
          <Trans i18nKey='page.form.title'>
            Let's
            <TitleHighlight>Launch</TitleHighlight>
            Your Workspace
          </Trans>
        </Title>
      }
      styleProps={pageLayoutStyleProps}
    >
      <StandaloneServerForm {...props} />
    </FormPageLayout>
  </BackgroundLayer>
);

export default StandaloneServerPage;
