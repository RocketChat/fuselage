import { Box } from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';
import { Trans } from 'react-i18next';

import ActionLink from './ActionLink';

type ManageWorkspaceFallbackProps = {
  onManageWorkspaceClick: () => void;
};

const ManageWorkspaceFallback = ({
  onManageWorkspaceClick,
}: ManageWorkspaceFallbackProps): ReactElement => (
  <Box fontScale='s1' pbs='x40'>
    <Trans i18nKey='component.manageWorkspaceFallback'>
      Already have an account?
      <ActionLink fontScale='s1' onClick={onManageWorkspaceClick}>
        Manage your workspaces.
      </ActionLink>
    </Trans>
  </Box>
);

export default ManageWorkspaceFallback;
