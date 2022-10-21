import { FormPageLayout } from '@rocket.chat/layout';
import type { ReactElement } from 'react';
import { Trans } from 'react-i18next';

const TitleCreateCloudPage = (): ReactElement => (
  <Trans i18nKey='page.createCloudWorkspace.title'>
    Launch new workspace and
    <FormPageLayout.TitleHighlight>30-day trial</FormPageLayout.TitleHighlight>
  </Trans>
);

export default TitleCreateCloudPage;
