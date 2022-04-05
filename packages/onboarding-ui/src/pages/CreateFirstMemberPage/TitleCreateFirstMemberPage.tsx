import type { ReactElement } from 'react';
import { Trans } from 'react-i18next';

import { TitleHighlight } from '../../common/FormPageLayout.styles';

const TitleCreateFirstMemberPage = (): ReactElement => (
  <Trans i18nKey='page.createFirstMember.title'>
    Create first
    <TitleHighlight>workspace member</TitleHighlight>
  </Trans>
);

export default TitleCreateFirstMemberPage;
