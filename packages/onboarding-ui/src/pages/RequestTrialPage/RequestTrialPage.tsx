import { css } from '@rocket.chat/css-in-js';
import { Box } from '@rocket.chat/fuselage';
import { RocketChatLogo } from '@rocket.chat/logo';
import type { ComponentProps, ReactElement } from 'react';
import { useTranslation, Trans } from 'react-i18next';

import BackgroundLayer from '../../common/BackgroundLayer';
import FormPageLayout from '../../common/FormPageLayout';
import RequestTrialForm from '../../forms/RequestTrialForm';
import Description from './Description';
import TitleRequestTrial from './TitleRequestTrial';

type RequestTrialPageProps = {
  onManageWorkspaces?: () => void;
  manageWorkspacesLink?: string;
} & ComponentProps<typeof RequestTrialForm>;

const RequestTrialPage = (props: RequestTrialPageProps): ReactElement => {
  const { t } = useTranslation();
  const pointer = css`
    cursor: pointer;
  `;

  return (
    <BackgroundLayer>
      <FormPageLayout
        logo={<RocketChatLogo tagTitle='Cloud' />}
        description={<Description />}
        title={<TitleRequestTrial />}
        subtitle={t('page.requestTrial.subtitle')}
      >
        <RequestTrialForm {...props} />
        {(props.onManageWorkspaces || props.manageWorkspacesLink) && (
          <Box mbs='x28' display='inline' textAlign='center'>
            <Box fontScale='c1' marginBlockStart='x40'>
              <Trans i18nKey='page.alreadyHaveAccount'>
                Already have an account?
                {props.onManageWorkspaces && (
                  <Box
                    className={pointer}
                    onClick={props.onManageWorkspaces}
                    is='span'
                    color='primary-400'
                    textDecorationLine='none'
                  >
                    Manage your workspaces.
                  </Box>
                )}
                {props.manageWorkspacesLink && (
                  <Box
                    className={pointer}
                    href={props.manageWorkspacesLink}
                    is='a'
                    color='primary-400'
                    textDecorationLine='none'
                  >
                    Manage your workspaces.
                  </Box>
                )}
              </Trans>
            </Box>
          </Box>
        )}
      </FormPageLayout>
    </BackgroundLayer>
  );
};

export default RequestTrialPage;
