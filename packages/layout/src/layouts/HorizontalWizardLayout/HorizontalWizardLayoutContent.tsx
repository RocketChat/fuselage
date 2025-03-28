import type { ReactElement, ReactNode } from 'react';

import * as FormPageLayout from '../../components/FormPageLayout/FormPageLayout.styles';

const HorizontalWizardLayoutContent = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => <FormPageLayout.Content>{children}</FormPageLayout.Content>;

export default HorizontalWizardLayoutContent;
