import type { ReactElement, ReactNode } from 'react';

import BackgroundLayer from '../../BackgroundLayer';
import DarkModeProvider from '../../DarkModeProvider';
import * as FormPageLayout from '../../components/FormPageLayout/FormPageLayout.styles';
import type { LayoutContextValue } from '../../contexts/LayoutContext';
import { LayoutContext } from '../../contexts/LayoutContext';

const HorizontalWizardLayout = ({
  children,
  forceDarkMode,
  ...rest
}: LayoutContextValue & {
  children: ReactNode;
}): ReactElement => (
  <DarkModeProvider forcedDarkMode={forceDarkMode}>
    <LayoutContext.Provider value={{ ...rest }}>
      <BackgroundLayer>
        <FormPageLayout.Wrapper>{children}</FormPageLayout.Wrapper>
      </BackgroundLayer>
    </LayoutContext.Provider>
  </DarkModeProvider>
);

export default HorizontalWizardLayout;
