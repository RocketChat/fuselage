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

  const icon = useMemo(
    () =>
      encodeURIComponent(
        renderToStaticMarkup(<PlanFeatureIcon color={color} />)
      ),
    [color]
  );

  return (
    <>
      <List color={color} spacing='x16' icon={icon}>
        <List.Item fontScale='h4'>
          {t('page.cloudDescription.availability')}
        </List.Item>
        <List.Item fontScale='h4'>
          {t('page.cloudDescription.auditing')}
        </List.Item>
        <List.Item fontScale='h4'>
          {t('page.cloudDescription.numberOfIntegrations')}
        </List.Item>
        <List.Item fontScale='h4'>{t('page.cloudDescription.ldap')}</List.Item>
        <List.Item fontScale='h4'>
          {t('page.cloudDescription.omnichannel')}
        </List.Item>
        <List.Item fontScale='h4'>{t('page.cloudDescription.push')}</List.Item>
      </List>
    </>
  );
};

export default Description;
