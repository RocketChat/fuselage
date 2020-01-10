import React from 'react';

import { Avatar } from '../Avatar';
import { Box, Flex, Margins } from '../Box';
import { Icon } from '../Icon';

const Wrapper = Box.extend('rcx-chip__wrapper', 'div');
const Container = Box.extend('rcx-chip', 'button');

const ThumbDefault = ({ url }) => <Avatar size='x20' url={url}/>;
const RemoveDefault = () => <Icon name='cross' size='16' />;

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
    <Container disabled={!(onClick || onMouseDown)} onClick={onClick || onMouseDown} {...props}>
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
    </Container>
  </Flex.Container>
);

Chip.displayName = 'Chip';

Chip.Wrapper = ({ children, width, alignItems = 'center', wrap = 'wrap', ...props }) =>
  <Margins all='neg-x4'>
    <Flex.Container alignItems={alignItems} wrap={wrap}>
      <Wrapper {...props}>
        {children.map((children, i) =>
          <Flex.Item key={i} shrink={1}>
            <Margins all='x4'>
              {children}
            </Margins>
          </Flex.Item>,
        )}
      </Wrapper>
    </Flex.Container>
  </Margins>;
