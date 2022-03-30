import type { SelectOption } from '@rocket.chat/fuselage';
import { Box } from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useTranslation, Trans } from 'react-i18next';

import BackgroundLayer from '../../common/BackgroundLayer';
import FormPageLayout from '../../common/FormPageLayout';
import CreateCloudWorkspaceForm from '../../forms/CreateCloudWorkspaceForm';
import Description from './Description';
import TitleCreateCloudPage from './TitleCreateCloudPage';

type CreateCloudWorkspacePageProps = {
  onSubmit: SubmitHandler<{
    organizationEmail: string;
    workspaceName: string;
    workspaceURL: string;
    serverRegion: string;
    language: string;
    agreement: boolean;
    updates: boolean;
  }>;
  domain: string;
  serverRegionOptions: SelectOption[];
  languageOptions: SelectOption[];
  onBackButtonClick?: () => void;
  validateUrl: (url: string) => Promise<boolean>;
  validateEmail: (url: string) => Promise<boolean>;
};

const CreateCloudWorkspacePage = (
  props: CreateCloudWorkspacePageProps
): ReactElement => {
  const { t } = useTranslation();

  return (
    <BackgroundLayer>
      <FormPageLayout
        title={<TitleCreateCloudPage />}
        description={<Description />}
        subtitle={t('page.createCloudWorkspace.tryGold')}
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

export default CreateCloudWorkspacePage;
