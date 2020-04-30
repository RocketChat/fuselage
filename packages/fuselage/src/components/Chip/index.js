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
          <Box is='span' textStyle='p1' color='default' className='rcx-chip__text'>{children}</Box>
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
  <Margins all={m}>
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
