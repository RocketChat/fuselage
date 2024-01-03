import {
  HorizontalWizardLayout,
  HorizontalWizardLayoutAside,
  HorizontalWizardLayoutTitle,
  HorizontalWizardLayoutSubtitle,
  HorizontalWizardLayoutDescription,
  HorizontalWizardLayoutContent,
} from '@rocket.chat/layout';
import type { ReactElement, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  return (
    <HorizontalWizardLayout>
      <HorizontalWizardLayoutAside>
        <HorizontalWizardLayoutTitle>
          {title || t('page.form.title')}
        </HorizontalWizardLayoutTitle>
        {subtitle && (
          <HorizontalWizardLayoutSubtitle>
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
