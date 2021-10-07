import colors from '@rocket.chat/fuselage-tokens/colors.json';
import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { Title } from './RequestTrial.styles';

const TitleRequestTrial = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <>
      <Title fontColor={colors.n900}>{t('page.requestTrial.title')}</Title>
      <Title fontColor={colors.b500}>
        {t('page.requestTrial.trial_period')}
      </Title>
    </>
  );
};

export default TitleRequestTrial;
