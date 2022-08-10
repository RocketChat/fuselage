import { FormPageLayout } from '@rocket.chat/layout';
import type { ReactElement } from 'react';
import { Trans } from 'react-i18next';

const TitleCreateFirstMemberPage = (): ReactElement => (
  <Trans i18nKey='page.createFirstMember.title'>
    Create first
    <FormPageLayout.TitleHighlight>
      workspace member
    </FormPageLayout.TitleHighlight>
  </Trans>
);

export default TitleCreateFirstMemberPage;
