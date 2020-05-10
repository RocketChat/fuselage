import React from 'react';

import { Avatar } from '../Avatar';
import { Box, Flex, Margins } from '../Box';
import { Icon } from '../Icon';

const ThumbDefault = (props) => <Avatar size='x20' {...props} />;
const RemoveDefault = (props) => <Icon name='cross' size='x16' {...props} />;

export const Chip = ({
  children,
  thumbUrl,
  Thumb = ThumbDefault,
  onClick,
  onMouseDown,
  Remove = RemoveDefault,
  ...props
}) => (
  <Flex.Container>
    <Box rcx-chip is='button' type='button' disabled={!(onClick || onMouseDown)} onClick={onClick || onMouseDown} {...props}>
      {Thumb && thumbUrl && <Margins all='x4'>
        <Thumb url={thumbUrl} />
      </Margins>}
      {children && <Flex.Item shrink={1}>
        <Margins all='x4'>
          <Box is='span' fontScale='p1' color='default' rcx-chip__text>{children}</Box>
        </Margins>
      </Flex.Item>}
      {Remove && (onClick || onMouseDown) && <Margins all='x4'>
        <Box>
          <Remove/>
        </Box>
      </Margins>}
    </Box>
  </Flex.Container>
);

Chip.Wrapper = ({ children, width, alignItems = 'center', wrap = 'wrap', m = 'neg-x4', ...props }) =>
  <Box rcx-chip__wrapper is='div' display='flex' alignItems={alignItems} flexWrap={wrap} m={m} {...props}>
    {children.map((children, i) =>
      <Flex.Item key={i} shrink={1}>
        <Margins all='x4'>
          {children}
        </Margins>
      </Flex.Item>,
    )}
  </Box>;
