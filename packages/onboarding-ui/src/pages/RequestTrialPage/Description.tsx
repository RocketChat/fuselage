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
    <List color='alternative' spacing='x16' icon={icon}>
      <List.Item>{t('page.cloudDescription.availability')}</List.Item>
      <List.Item>{t('page.cloudDescription.auditing')}</List.Item>
      <List.Item>{t('page.cloudDescription.engagement')}</List.Item>
      <List.Item>{t('page.cloudDescription.ldap')}</List.Item>
      <List.Item>{t('page.cloudDescription.omnichannel')}</List.Item>
      <List.Item>{t('page.cloudDescription.push')}</List.Item>
    </List>
  );
};

export default Description;
