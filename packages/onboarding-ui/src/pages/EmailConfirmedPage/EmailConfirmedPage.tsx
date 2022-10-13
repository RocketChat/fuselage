import {
  HeroLayout,
  HeroLayoutSubtitle,
  HeroLayoutTitle,
} from '@rocket.chat/layout';
import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

const EmailConfirmedPage = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <HeroLayout>
      <HeroLayoutTitle>{t('page.emailConfirmed.title')}</HeroLayoutTitle>
      <HeroLayoutSubtitle>
        {t('page.emailConfirmed.subtitle')}
      </HeroLayoutSubtitle>
    </HeroLayout>
  );
};

export default EmailConfirmedPage;
