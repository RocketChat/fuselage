import type { SelectOptions } from '@rocket.chat/fuselage';
import { Box } from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useTranslation, Trans } from 'react-i18next';

import BackgroundLayer from '../../common/BackgroundLayer';
import FormPageLayout from '../../common/FormPageLayout';
import CreateCloudWorkspaceForm from '../../forms/CreateCloudWorkspaceForm';
import Description from './Description';
import TitleCreateCloudPage from './TitleCreateCloudPage';

type CreateCloudWorkspaceSimplifiedPageProps = {
  currentStep: number;
  stepCount: number;
  onSubmit: SubmitHandler<{
    organizationName: string;
    organizationEmail: string;
    workspaceName: string;
    workspaceURL: string;
    serverRegion: string;
    agreement: boolean;
    updates: boolean;
  }>;
  domain: string;
  serverRegionOptions: SelectOptions;
  onBackButtonClick: () => void;
  validateUrl: (url: string) => Promise<boolean>;
  validateEmail: (url: string) => Promise<boolean>;
};

const CreateCloudWorkspaceSimplifiedPage = (
  props: CreateCloudWorkspaceSimplifiedPageProps
): ReactElement => {
  const { t } = useTranslation();

  return (
    <BackgroundLayer>
      <FormPageLayout
        title={<TitleCreateCloudPage />}
        description={<Description />}
        subtitle={t('page.createCloudWorkspaceSimplified.tryGold')}
      >
        <CreateCloudWorkspaceForm {...props} />
        <Box mbs='x28' display='inline' textAlign='center'>
          <Trans i18nKey='page.alreadyHaveAccount'>
            Already have an account?
            <Box
              is='a'
              color='primary-400'
              textDecorationLine='none'
              href='https://cloud.rocket.chat/login'
              target='_blank'
              rel='noopener noreferrer'
            >
              Manage your workspaces.
            </Box>
          </Trans>
        </Box>
      </FormPageLayout>
    </BackgroundLayer>
  );
};

export default CreateCloudWorkspaceSimplifiedPage;
