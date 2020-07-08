import React from 'react';

import { Avatar } from '../Avatar';
import { Box, Flex } from '../Box';
import { Icon } from '../Icon';
import Margins from '../Margins';

const defaultRenderThumb = ({ url }) => <Avatar size='x20' url={url} />;
const defaultRenderDismissSymbol = () => <Icon name='cross' size='x16' />;

export const Chip = ({
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

Chip.Wrapper = ({ children, width, alignItems = 'center', wrap = 'wrap', ...props }) =>
  <Margins all='neg-x4'>
    <Flex.Container alignItems={alignItems} wrap={wrap}>
      <Box rcx-chip__wrapper is='div' {...props}>
        {children.map((children, i) =>
          <Flex.Item key={i} shrink={1}>
            <Margins all='x4'>
              {children}
            </Margins>
          </Flex.Item>,
        )}
      </Box>
    </Flex.Container>
  </Margins>;
