import type { ComponentProps, ReactElement } from 'react';

import * as FormPageLayout from '../../components/FormPageLayout/FormPageLayout.styles.js';

const HorizontalWizardLayoutTitle = (
  props: ComponentProps<typeof FormPageLayout.Title>,
): ReactElement => <FormPageLayout.Title {...props} />;

export default HorizontalWizardLayoutTitle;
