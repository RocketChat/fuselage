import React from 'react';

import { Avatar } from '../Avatar';
import { Box } from '../Box';
import { Icon } from '../Icon';
import Margins from '../Margins';

const defaultRenderThumb = ({ url }) => <Avatar size='x20' url={url} />;
const defaultRenderDismissSymbol = () => <Icon name='cross' size='x16' />;

const Chip = ({
  children,
  thumbUrl,
  onClick,
  onMouseDown,
  renderThumb = defaultRenderThumb,
  renderDismissSymbol = defaultRenderDismissSymbol,
  ...props
}) => {
  const onDismiss = onClick || onMouseDown;

  return <Box
    rcx-chip
    is='button'
    type='button'
    disabled={!onDismiss}
    onClick={onDismiss}
    {...props}
  >
    <Margins all='x4'>
      {thumbUrl && renderThumb && renderThumb({ url: thumbUrl })}
      {children && <span className='rcx-chip__text'>{children}</span>}
      {onDismiss && renderDismissSymbol && renderDismissSymbol()}
    </Margins>
  </Box>;
};

export default Chip;
