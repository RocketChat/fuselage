import { FormPageLayout, LayoutLogo } from '@rocket.chat/layout';
import type { ReactElement, ReactNode } from 'react';
import { Trans, useTranslation } from 'react-i18next';

// import { OnboardingLogo } from './OnboardingLogo';
import type { FormPageLayoutStyleProps } from '../Types';

type FormPageLayoutProps = {
  logo?: ReactNode;
  title?: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  styleProps?: FormPageLayoutStyleProps;
  children: ReactNode;
  tag?: string;
};

const FormPageLayoutOnboard = ({
  logo,
  title,
  subtitle,
  description,
  styleProps,
  children,
}: FormPageLayoutProps): ReactElement => {
  useTranslation();
  return (
    <FormPageLayout.Wrapper>
      <FormPageLayout.Aside justifyContent={styleProps?.justifyContent}>
        <FormPageLayout.Logo>
          {logo ?? <LayoutLogo.LayoutLogo />}
        </FormPageLayout.Logo>
        <FormPageLayout.Title>
          {title || (
            <Trans i18nKey='page.form.title'>
              Let's
              <FormPageLayout.TitleHighlight>
                Launch
              </FormPageLayout.TitleHighlight>
              Your Workspace
            </Trans>
          )}
        </FormPageLayout.Title>
        {subtitle && (
          <FormPageLayout.Subtitle
            fontWeight={styleProps?.subTitleProps?.fontWeight}
            fontColor={styleProps?.subTitleProps?.color}
          >
            {subtitle}
          </FormPageLayout.Subtitle>
        )}
        <FormPageLayout.Description>{description}</FormPageLayout.Description>
      </FormPageLayout.Aside>
      <FormPageLayout.Content>{children}</FormPageLayout.Content>
    </FormPageLayout.Wrapper>
  );
};
export default FormPageLayoutOnboard;
