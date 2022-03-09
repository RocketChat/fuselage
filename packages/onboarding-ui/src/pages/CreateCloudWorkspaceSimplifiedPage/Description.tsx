import { Box, Icon } from '@rocket.chat/fuselage';
import colors from '@rocket.chat/fuselage-tokens/colors.json';
import type { ReactElement } from 'react';
import { useMemo } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { useTranslation } from 'react-i18next';

import { useDarkMode } from '../../common/DarkModeProvider';
import List from '../../common/List';
import PlanFeatureIcon from '../../common/PlanFeatureIcon';

const Description = (): ReactElement => {
  const isDarkMode = useDarkMode();
  const color = isDarkMode ? colors.white : colors.n900;
  const { t } = useTranslation();

  const featuresList = [
    t('page.createCloudWorkspaceSimplified.auditing'),
    t('page.createCloudWorkspaceSimplified.numberOfIntegrations'),
    t('page.createCloudWorkspaceSimplified.ldap'),
    t('page.createCloudWorkspaceSimplified.omnichannel'),
    t('page.createCloudWorkspaceSimplified.sla'),
    t('page.createCloudWorkspaceSimplified.push'),
    t('page.createCloudWorkspaceSimplified.engagement'),
  ];

  const icon = useMemo(
    () =>
      encodeURIComponent(
        renderToStaticMarkup(<PlanFeatureIcon color={color} />)
      ),
    [color]
  );

  const listItem = (text: string) => (
    <List.Item fontScale='p1'>
      <Icon name='check' size='x24' mie='x12' />
      {text}
    </List.Item>
  );

  return (
    <Box>
      <Box>
        <List color={color} spacing='x16' icon={icon}>
          {featuresList.map((text) => listItem(text))}
        </List>
      </Box>
      <Box fontScale='micro' color='info'>
        {t('page.cloudDescription.goldIncludes')}
      </Box>
    </Box>
  );
};

export default Description;
