import { RocketChatLogo } from '@rocket.chat/logo';
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
import type { FormPageLayoutStyleProps } from './Types';

type FormPageLayoutProps = {
  logo?: ReactNode;
  title?: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  styleProps?: FormPageLayoutStyleProps;
  children: ReactNode;

  tag?: string;
};

const FormPageLayout = ({
  logo,
  title,
  subtitle,
  description,
  styleProps,
  children,
}: FormPageLayoutProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Aside
        justifyContent={styleProps?.justifyContent}
        paddingEnd={styleProps?.paddingEnd}
      >
        <Logo>{logo ?? <RocketChatLogo />}</Logo>
        <Title>{title ?? t('page.form.title')}</Title>
        {subtitle && (
          <Subtitle
            fontWeight={styleProps?.subTitleProps?.fontWeight}
            fontColor={styleProps?.subTitleProps?.color}
          >
            {subtitle}
          </Subtitle>
        )}
        <Description>{description}</Description>
      </Aside>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default FormPageLayout;
