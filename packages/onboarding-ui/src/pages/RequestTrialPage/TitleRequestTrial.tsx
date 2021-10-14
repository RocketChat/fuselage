import colors from '@rocket.chat/fuselage-tokens/colors.json';
import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { Title } from './RequestTrial.styles';

const TitleRequestTrial = (): ReactElement => {
  const { t } = useTranslation();
  const title = t('page.requestTrial.title').split('**');
  return (
    <Title fontColor={colors.n900}>
      <Trans i18nKey="page.requestTrial.title">
        Request a <Title fontColor={colors.b500}>30-day Trial</Title>
      </Trans>
    </Title>
  );
};

export default TitleRequestTrial;
