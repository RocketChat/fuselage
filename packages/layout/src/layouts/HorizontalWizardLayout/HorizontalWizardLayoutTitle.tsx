import { ComponentProps, ReactElement } from 'react';

import * as FormPageLayout from '../../components/FormPageLayout/FormPageLayout.styles';

const HorizontalWizardLayoutTitle = (
  props: ComponentProps<typeof FormPageLayout.Title>,
): ReactElement => <FormPageLayout.Title {...props} />;

export default HorizontalWizardLayoutTitle;
