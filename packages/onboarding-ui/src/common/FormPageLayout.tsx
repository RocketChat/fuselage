import type { ReactElement, ReactNode } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import {
  Aside,
  Description,
  Content,
  Logo,
  Subtitle,
  Title,
  Wrapper,
  TitleHighlight,
} from './FormPageLayout.styles';
import { OnboardingLogo } from './OnboardingLogo';
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
  useTranslation();
  return (
    <Wrapper>
      <Aside justifyContent={styleProps?.justifyContent}>
        <Logo>{logo ?? <OnboardingLogo />}</Logo>
        <Title>
          {title || (
            <Trans i18nKey='page.form.title'>
              Let's
              <TitleHighlight>Launch</TitleHighlight>
              Your Workspace
            </Trans>
          )}
        </Title>
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
