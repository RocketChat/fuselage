import type { AllHTMLAttributes, ReactNode } from 'react';
import React from 'react';

import { Avatar, Box, IconButton, Margins } from '..';
import { prependClassName } from '../../helpers/prependClassName';

type ChipProps = {
  thumbUrl?: string;
  renderThumb?: (props: { url: string }) => ReactNode;
  renderDismissSymbol?: () => ReactNode;
} & AllHTMLAttributes<HTMLSpanElement>;

const defaultRenderThumb = ({ url }: { url: string }) => (
  <Box rcx-avatar>
    <Avatar size='x20' url={url} />
  </Box>
);

const defaultRenderDismissButton = () => <IconButton mini icon='cross' />;

export const Chip = ({
  children,
  className,
  thumbUrl,
  renderThumb = defaultRenderThumb,
  renderDismissSymbol = defaultRenderDismissButton,
  ...props
}: ChipProps) => (
  <span
    role='presentation'
    className={prependClassName(className, 'rcx-box rcx-chip')}
    {...props}
  >
    <Margins all='x4'>
      {thumbUrl && renderThumb && renderThumb({ url: thumbUrl })}
      {children && <span className='rcx-box rcx-chip__text'>{children}</span>}
      {renderDismissSymbol && renderDismissSymbol()}
    </Margins>
  </span>
);
