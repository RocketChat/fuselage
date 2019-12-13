import React from 'react';

import { Avatar } from '../Avatar';
import { Box, Flex, Margins, MarginsWrapper } from '../Box';
import { Icon } from '../Icon';
import { Text } from '../Text';

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
      {Thumb && thumbUrl && <Margins all={4}>
        <Thumb url={thumbUrl} />
      </Margins>}
      {children && <Flex.Item shrink={1}>
        <Margins all={4}>
          <Text className='rcx-chip__text'>{children}</Text>
        </Margins>
      </Flex.Item>}
      {Remove && (onClick || onMouseDown) && <Margins all={4}>
        <Box>
          <Remove/>
        </Box>
      </Margins>}
    </Container>
  </Flex.Container>
);

Chip.displayName = 'Chip';

Chip.Wrapper = ({ children, width, alignItems = 'center', wrap = 'wrap', ...props }) =>
  <MarginsWrapper all={4}>
    <Flex.Container alignItems={alignItems} wrap={wrap}>
      <Wrapper {...props}>
        {children.map((children, i) =>
          <Flex.Item key={i} shrink={1}>
            <Margins all={4}>
              {children}
            </Margins>
          </Flex.Item>,
        )}
      </Wrapper>
    </Flex.Container>
  </MarginsWrapper>;
