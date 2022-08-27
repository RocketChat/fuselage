import type { ReactElement, ReactNode } from 'react';

import BackgroundLayer from '../BackgroundLayer';
import * as FormPageLayout from '../FormPageLayout/FormPageLayout.styles';
import { LayoutLogo } from '../LayoutLogo';

export const HorizontalWizardLayout = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => (
  <BackgroundLayer>
    <FormPageLayout.Wrapper>{children}</FormPageLayout.Wrapper>
  </BackgroundLayer>
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
