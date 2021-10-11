import colors from '@rocket.chat/fuselage-tokens/colors.json';
import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { Title } from './RequestTrial.styles';

const TitleRequestTrial = (): ReactElement => {
  const { t } = useTranslation();
  const title = t('page.requestTrial.title').split('**');
  return (
    <>
      <Title fontColor={colors.n900}>{title[0]}</Title>
      <Title fontColor={colors.b500}>{`${title[1]}`}</Title>
    </>
  );
};

export default TitleRequestTrial;
