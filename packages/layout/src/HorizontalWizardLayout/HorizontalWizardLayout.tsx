import { Box } from '@rocket.chat/fuselage';
import type { ReactElement, ReactNode } from 'react';

import BackgroundLayer from '../BackgroundLayer';
import DarkModeProvider from '../DarkModeProvider';
import * as FormPageLayout from '../FormPageLayout/FormPageLayout.styles';
import { LayoutLogo } from '../LayoutLogo';
import type { LayoutContextValue } from '../contexts/LayoutContext';
import { LayoutContext } from '../contexts/LayoutContext';

export const HorizontalWizardLayout = ({
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

export const HorizontalWizardLayoutAside = ({
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

export const HorizontalWizardLayoutTitle = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => <FormPageLayout.Title>{children}</FormPageLayout.Title>;

export const HorizontalWizardLayoutSubtitle = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => (
  <FormPageLayout.Subtitle>{children}</FormPageLayout.Subtitle>
);

export const HorizontalWizardLayoutDescription = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => (
  <FormPageLayout.Description>{children}</FormPageLayout.Description>
);

export const HorizontalWizardLayoutContent = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => <FormPageLayout.Content>{children}</FormPageLayout.Content>;

export const HorizontalWizardLayoutFooter = ({
  children,
}: {
  children: ReactNode;
}) => (
  <Box
    display='flex'
    fontScale='h4'
    flexDirection='column'
    alignItems='center'
    pb='x32'
  >
    {children}
  </Box>
);
