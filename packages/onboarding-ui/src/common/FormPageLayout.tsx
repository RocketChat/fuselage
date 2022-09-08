import {
  FormPageLayout,
  HorizontalWizardLayout,
  HorizontalWizardLayoutAside,
  HorizontalWizardLayoutTitle,
  HorizontalWizardLayoutSubtitle,
  HorizontalWizardLayoutDescription,
  HorizontalWizardLayoutContent,
} from '@rocket.chat/layout';
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
  title,
  subtitle,
  description,
  children,
}: FormPageLayoutProps): ReactElement => {
  useTranslation();
  return (
    <HorizontalWizardLayout>
      <HorizontalWizardLayoutAside>
        <HorizontalWizardLayoutTitle>
          {title || (
            <Trans i18nKey='page.form.title'>
              Let's
              <FormPageLayout.TitleHighlight>
                Launch
              </FormPageLayout.TitleHighlight>
              Your Workspace
            </Trans>
          )}
        </HorizontalWizardLayoutTitle>
        {subtitle && (
          <HorizontalWizardLayoutSubtitle
          // fontWeight={styleProps?.subTitleProps?.fontWeight}
          // fontColor={styleProps?.subTitleProps?.color}
          >
            {subtitle}
          </HorizontalWizardLayoutSubtitle>
        )}
        <HorizontalWizardLayoutDescription>
          {description}
        </HorizontalWizardLayoutDescription>
      </HorizontalWizardLayoutAside>
      <HorizontalWizardLayoutContent>{children}</HorizontalWizardLayoutContent>
    </HorizontalWizardLayout>
  );
};
export default FormPageLayoutOnboard;
