import type { ReactElement } from 'react';
import { Trans } from 'react-i18next';

import { TitleHighlight } from '../../common/FormPageLayout.styles';

const TitleCreateCloudPage = (): ReactElement => (
  <Trans i18nKey='page.createCloudWorkspaceSimplified.title'>
    Launch new workspace and
    <TitleHighlight>30-day trial</TitleHighlight>
  </Trans>
);

export default TitleCreateCloudPage;
