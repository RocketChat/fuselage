import { Box } from '@rocket.chat/fuselage';
import colors from '@rocket.chat/fuselage-tokens/colors.json';
import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { useDarkMode } from '../../common/DarkModeProvider';
import List from '../../common/List';

const Description = (): ReactElement => {
  const isDarkMode = useDarkMode();
  const color = isDarkMode ? colors.white : colors.n900;
  const { t } = useTranslation();

  return (
    <Box>
      <Box mbe='x40' mis='x36'>
        <List color={color} spacing='x16'>
          <List.Item>{t('page.cloudDescription.availability')}</List.Item>
          <List.Item>{t('page.cloudDescription.auditing')}</List.Item>
          <List.Item>{t('page.cloudDescription.engagement')}</List.Item>
          <List.Item>{t('page.cloudDescription.ldap')}</List.Item>
          <List.Item>{t('page.cloudDescription.omnichannel')}</List.Item>
          <List.Item>{t('page.cloudDescription.sla')}</List.Item>
          <List.Item>{t('page.cloudDescription.push')}</List.Item>
        </List>
      </Box>
      <Box fontScale='micro' color='info'>
        {t('page.cloudDescription.goldIncludes')}
      </Box>
    </Box>
  );
};

export default Description;
