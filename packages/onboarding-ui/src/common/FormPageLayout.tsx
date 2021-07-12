import type { ReactElement, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import {
  Aside,
  Description,
  Content,
  Logo,
  Subtitle,
  Title,
  Wrapper,
} from './FormPageLayout.styles';
import RocketChatLogo from './RocketChatLogo';

type FormPageLayoutProps = {
  logo?: ReactNode;
  title?: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
};

const FormPageLayout = ({
  logo,
  title,
  subtitle,
  description,
  children,
}: FormPageLayoutProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Aside>
        <Logo>{logo ?? <RocketChatLogo />}</Logo>
        <Title>{title ?? t('page.form.title')}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        <Description>{description}</Description>
      </Aside>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default FormPageLayout;
