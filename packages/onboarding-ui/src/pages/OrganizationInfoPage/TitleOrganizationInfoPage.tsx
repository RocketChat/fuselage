import type { ReactElement } from 'react';
import { Trans } from 'react-i18next';

import { TitleHighlight } from '../../common/FormPageLayout.styles';

const TitleOrganizationInfoPage = (): ReactElement => (
  <Trans i18nKey='page.cloudDescription.title'>
    Let's launch your workspace and
    <TitleHighlight>14-day trial Launch</TitleHighlight>
  </Trans>
);

export default TitleOrganizationInfoPage;
