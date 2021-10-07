import { Box } from '@rocket.chat/fuselage';
import colors from '@rocket.chat/fuselage-tokens/colors.json';
import { ReactElement, useMemo } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { useTranslation } from 'react-i18next';

import List from '../../common/List';
import PlanFeatureIcon from '../../common/PlanFeatureIcon';

const Description = (): ReactElement => {
  const { t } = useTranslation();

  const icon = useMemo(
    () => encodeURIComponent(renderToStaticMarkup(<PlanFeatureIcon />)),
    []
  );

  return (
    <>
      <List color={colors.n900} spacing='x16' icon={icon}>
        <List.Item>{t('page.cloudDescription.availability')}</List.Item>
        <List.Item>{t('page.cloudDescription.auditing')}</List.Item>
        <List.Item>{t('page.cloudDescription.numberOfIntegrations')}</List.Item>
        <List.Item>{t('page.cloudDescription.ldap')}</List.Item>
        <List.Item>{t('page.cloudDescription.omnichannel')}</List.Item>
        <List.Item>{t('page.cloudDescription.push')}</List.Item>
      </List>

      <Box
        is='text'
        height='x64'
        marginBlockStart='x40'
        fontScale='micro'
        color={colors.n600}
      >
        * Golden plan includes all features from other plans
      </Box>
    </>
  );
};

export default Description;
