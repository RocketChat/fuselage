import colors from '@rocket.chat/fuselage-tokens/colors.json';
import type { ReactElement } from 'react';
import { Trans } from 'react-i18next';

import { Title } from './CreateCloudWorkspace.styles';

const TitleCreateCloudPage = (): ReactElement => (
  <Title>
    <Trans i18nKey='page.cloudDescription.title'>
      Let's launch your workspace and
      <Title fontColor={colors.b500}>14-day trial Launch</Title>
    </Trans>
  </Title>
);

export default TitleCreateCloudPage;
