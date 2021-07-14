import { Box } from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import List from '../../common/List';

const Description = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <div>
      <Box mbe='x40'>
        <List color='alternative' spacing='x16'>
          <List.Li icon='check'>
            {t('page.cloudDescription.availability')}
          </List.Li>
          <List.Li icon='check'>{t('page.cloudDescription.auditing')}</List.Li>
          <List.Li icon='check'>
            {t('page.cloudDescription.integrations')}
          </List.Li>
          <List.Li icon='check'>{t('page.cloudDescription.ldap')}</List.Li>
          <List.Li icon='check'>
            {t('page.cloudDescription.omnichannel')}
          </List.Li>
          <List.Li icon='check'>{t('page.cloudDescription.sla')}</List.Li>
          <List.Li icon='check'>{t('page.cloudDescription.push')}</List.Li>
        </List>
      </Box>
      <Box fontScale='micro' color='info'>
        {t('page.cloudDescription.goldIncludes')}
      </Box>
    </div>
  );
};

export default Description;
