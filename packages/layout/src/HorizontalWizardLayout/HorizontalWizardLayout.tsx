import { Box } from '@rocket.chat/fuselage';
import type { ComponentProps, ReactElement, ReactNode } from 'react';

import BackgroundLayer from '../BackgroundLayer';
import DarkModeProvider, { useDarkMode } from '../DarkModeProvider';
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

export const HorizontalWizardLayoutTitle = (
  props: ComponentProps<typeof FormPageLayout.Title>
): ReactElement => <FormPageLayout.Title {...props} />;

export const HorizontalWizardLayoutSubtitle = (
  props: ComponentProps<typeof FormPageLayout.Subtitle>
): ReactElement => <FormPageLayout.Subtitle {...props} />;

export const HorizontalWizardLayoutDescription = (
  props: ComponentProps<typeof FormPageLayout.Description>
): ReactElement => <FormPageLayout.Description {...props} />;

export const HorizontalWizardTextHighlight = (props: {
  children: ReactNode;
}) => {
  const isDark = useDarkMode();
  return <FormPageLayout.TitleHighlight {...props} isDark={isDark} />;
};

export const HorizontalWizardLayoutContent = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => <FormPageLayout.Content>{children}</FormPageLayout.Content>;

export const HorizontalWizardLayoutCaption = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const isDark = useDarkMode();
  return (
    <Box
      display='inline-block'
      flexDirection='row'
      fontScale='c1'
      color={isDark ? 'white' : 'secondary-info'}
      mb={16}
      alignItems='center'
    >
      {children}
    </Box>
  );
};

export const HorizontalWizardLayoutFooter = ({
  children,
}: {
  children: ReactNode;
}) => (
  <Box display='flex' fontScale='h4' flexDirection='column' alignItems='center'>
    {children}
  </Box>
);
