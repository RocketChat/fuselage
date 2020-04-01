import React from 'react';

import { Avatar } from '../Avatar';
import { Box, Flex, Margins } from '../Box';
import { Icon } from '../Icon';

const ThumbDefault = ({ url }) => <Avatar size='x20' url={url}/>;
const RemoveDefault = () => <Icon name='cross' size='x16' />;

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
    <Box componentClassName='rcx-chip' is='button' type='button' disabled={!(onClick || onMouseDown)} onClick={onClick || onMouseDown} {...props}>
      {Thumb && thumbUrl && <Margins all='x4'>
        <Thumb url={thumbUrl} />
      </Margins>}
      {children && <Flex.Item shrink={1}>
        <Margins all='x4'>
          <Box is='span' textStyle='p1' textColor='default' className='rcx-chip__text'>{children}</Box>
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

Chip.Wrapper = ({ children, width, alignItems = 'center', wrap = 'wrap', ...props }) =>
  <Margins all='neg-x4'>
    <Flex.Container alignItems={alignItems} wrap={wrap}>
      <Box componentClassName='rcx-chip__wrapper' is='div' {...props}>
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
