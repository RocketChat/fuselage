import { Box, Margins } from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';
import { useTranslation, Trans } from 'react-i18next';

import ActionLink from '../../common/ActionLink';
import BackgroundLayer from '../../common/BackgroundLayer';
import { OnboardingLogo } from '../../common/OnboardingLogo';
import LaunchingLoader from './LaunchingLoader';

type LaunchingWorkspacePageProps = {
  name: string;
  isReady: boolean;
  loadingSeconds?: number;
  onRedirectToWorkspace: () => void;
};

const LaunchingWorkspacePage = ({
  name,
  isReady = false,
  loadingSeconds = 90,
  onRedirectToWorkspace,
}: LaunchingWorkspacePageProps): ReactElement => {
  const { t } = useTranslation();

  const seconds = 5;

  let content = <LaunchingLoader name={name} loadingSeconds={loadingSeconds} />;

  if (isReady) {
    content = (
      <>
        <Box fontScale='hero'>
          {t('page.launchingWorkspace.ready.title', { name })} 🚀
        </Box>

        <Box fontScale='p1b'>
          {t('page.launchingWorkspace.ready.subtitle', { seconds })}
        </Box>

        <Box fontScale='c1'>
          <Trans i18nKey='page.launchingWorkspace.ready.redirectLink'>
            Redirect not working?
            <ActionLink onClick={onRedirectToWorkspace}>
              Open workspace
            </ActionLink>
          </Trans>
        </Box>
      </>
    );
  }

  return (
    <BackgroundLayer>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        textAlign='center'
        width='100%'
        maxWidth={768}
        paddingBlock={32}
        paddingInline={16}
      >
        <Margins blockEnd={32}>
          <OnboardingLogo />

          {content}
        </Margins>
      </Box>
    </BackgroundLayer>
  );
};

export default LaunchingWorkspacePage;
