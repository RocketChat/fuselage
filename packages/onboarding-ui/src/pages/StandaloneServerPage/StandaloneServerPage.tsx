import {
  BackgroundLayer,
  FormPageLayout as FormLayout,
} from '@rocket.chat/layout';
import type { ReactElement } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { Trans } from 'react-i18next';

import type { FormPageLayoutStyleProps } from '../../Types';
import FormPageLayout from '../../common/FormPageLayout';
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
        <FormLayout.Title>
          <Trans i18nKey='page.form.title'>
            Let's
            <FormLayout.TitleHighlight>Launch</FormLayout.TitleHighlight>
            Your Workspace
          </Trans>
        </FormLayout.Title>
      }
      styleProps={pageLayoutStyleProps}
    >
      <StandaloneServerForm {...props} />
    </FormPageLayout>
  </BackgroundLayer>
);

export default StandaloneServerPage;
