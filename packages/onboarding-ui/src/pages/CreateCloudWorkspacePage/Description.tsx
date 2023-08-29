import { Box, Icon } from '@rocket.chat/fuselage';
import colors from '@rocket.chat/fuselage-tokens/colors.json';
import { List, DarkModeProvider } from '@rocket.chat/layout';
import type { ReactElement } from 'react';
import { useMemo } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { useTranslation } from 'react-i18next';

import PlanFeatureIcon from '../../common/PlanFeatureIcon';

const Description = (): ReactElement => {
  const isDarkMode = DarkModeProvider.useDarkMode();
  const color = isDarkMode ? colors.white : colors.n900;
  const { t } = useTranslation();

  const featuresList = [
    t('page.createCloudWorkspace.auditing'),
    t('page.createCloudWorkspace.numberOfIntegrations'),
    t('page.createCloudWorkspace.ldap'),
    t('page.createCloudWorkspace.omnichannel'),
    t('page.createCloudWorkspace.sla'),
    t('page.createCloudWorkspace.push'),
    t('page.createCloudWorkspace.engagement'),
  ];

  const icon = useMemo(
    () =>
      encodeURIComponent(
        renderToStaticMarkup(<PlanFeatureIcon color={color} />)
      ),
    [color]
  );

  const listItem = (text: string, id: number) => (
    <List.Item key={id} fontScale='p1'>
      <Icon name='check' size='x24' mie={12} />
      {text}
    </List.Item>
  );

  return (
    <Box>
      <Box>
        <List color={color} spacing='x16' icon={icon}>
          {featuresList.map((text, id) => listItem(text, id))}
        </List>
      </Box>
    </Box>
  );
};

export default Description;
