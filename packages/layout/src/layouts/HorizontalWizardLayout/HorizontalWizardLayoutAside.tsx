import { ReactElement, ReactNode } from 'react';

import { LayoutLogo } from '../../LayoutLogo';
import * as FormPageLayout from '../../components/FormPageLayout/FormPageLayout.styles';

const HorizontalWizardLayoutAside = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => (
  <FormPageLayout.Aside>
    <FormPageLayout.Logo>
      <LayoutLogo />
    </FormPageLayout.Logo>
    {children}
  </FormPageLayout.Aside>
);

export default HorizontalWizardLayoutAside;
