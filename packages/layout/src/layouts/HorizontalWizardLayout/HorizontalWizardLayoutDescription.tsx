import type { ComponentProps, ReactElement } from 'react';

import * as FormPageLayout from '../../components/FormPageLayout/FormPageLayout.styles';

const HorizontalWizardLayoutDescription = (
  props: ComponentProps<typeof FormPageLayout.Description>,
): ReactElement => <FormPageLayout.Description {...props} />;

export default HorizontalWizardLayoutDescription;
