import type { ComponentProps, ReactElement } from 'react';

import * as FormPageLayout from '../../components/FormPageLayout/FormPageLayout.styles';

const HorizontalWizardLayoutSubtitle = (
  props: ComponentProps<typeof FormPageLayout.Subtitle>,
): ReactElement => <FormPageLayout.Subtitle {...props} />;

export default HorizontalWizardLayoutSubtitle;
