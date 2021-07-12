import { ReactElement, ReactNode } from 'react';

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
  title: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
};

const FormPageLayout = ({
  title,
  subtitle,
  description,
  children,
}: FormPageLayoutProps): ReactElement => (
  <Wrapper>
    <Aside>
      <Logo>
        <RocketChatLogo />
      </Logo>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      <Description>{description}</Description>
    </Aside>
    <Content>{children}</Content>
  </Wrapper>
);

export default FormPageLayout;
