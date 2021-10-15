import { Box, SelectOptions } from '@rocket.chat/fuselage';
import colors from '@rocket.chat/fuselage-tokens/colors.json';
import type { ReactElement } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useTranslation, Trans } from 'react-i18next';

import BackgroundLayer from '../../common/BackgroundLayer';
import FormPageLayout from '../../common/FormPageLayout';
import CreateCloudWorkspaceForm from '../../forms/CreateCloudWorkspaceForm';
import { Title } from './CreateCloudWorkspace.styles';
import Description from './Description';

const titleCreateCloudPage = () => (
  <Title fontColor={colors.n900}>
    <Trans i18nKey='page.cloudDescription.title'>
      Let's launch your workspace and
      <Title fontColor={colors.b500}>14-day trial Launch</Title>
    </Trans>
  </Title>
);

type CreateCloudWorkspacePageProps = {
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

const CreateCloudWorkspacePage = (
  props: CreateCloudWorkspacePageProps
): ReactElement => {
  const { t } = useTranslation();
  return (
    <BackgroundLayer>
      <FormPageLayout
        title={titleCreateCloudPage()}
        subTitleProps={{ color: colors.n900 }}
        description={<Description />}
        subtitle={t('page.cloudDescription.tryGold')}
      >
        <CreateCloudWorkspaceForm {...props} />
        <Box mbs='x28' color='default' display='inline' textAlign='center'>
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
