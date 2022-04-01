import type { ButtonHTMLAttributes } from 'react';
import React from 'react';

import { Avatar, Box } from '..';
import { prependClassName } from '../../helpers/prependClassName';
import { Icon } from '../Icon';
import Margins from '../Margins';

type ChipProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
  thumbUrl?: string;
  renderThumb?: (props: { url: string }) => React.ReactNode;
  renderDismissSymbol?: () => React.ReactNode;
};

const defaultRenderThumb = ({ url }: { url: string }) => (
  <Box rcx-avatar>
    <Avatar size='x20' url={url} />
  </Box>
);
const defaultRenderDismissSymbol = () => <Icon name='cross' size='x16' />;

export const Chip = ({
  children,
  className,
  thumbUrl,
  onClick,
  onMouseDown,
  renderThumb = defaultRenderThumb,
  renderDismissSymbol = defaultRenderDismissSymbol,
  ...rest
}: ChipProps) => {
  const onDismiss = onClick || onMouseDown;

  return (
    <button
      type='button'
      className={prependClassName(className, 'rcx-box rcx-chip')}
      disabled={!onDismiss}
      onClick={onDismiss}
      {...rest}
    >
      <Margins all='x4'>
        {thumbUrl && renderThumb && renderThumb({ url: thumbUrl })}
        {children && <span className='rcx-box rcx-chip__text'>{children}</span>}
        {onDismiss && renderDismissSymbol && renderDismissSymbol()}
      </Margins>
    </button>
  );
};

Chip.displayName = 'Chip';
