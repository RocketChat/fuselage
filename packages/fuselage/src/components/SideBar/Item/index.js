import React from 'react';

import { Flex, Avatar, Icon, Box, Margins, Badge } from '../..';


const viewModeToAvatarSizeMap = {
  condensed: 'x16',
  medium: 'x28',
  extended: 'x36',
};

const Status = ({ status = 'online' }) => <Box is='div' componentClassName='rcx-status' mod-is={status} />;


export function SidebarItem({ viewMode, avatar, status, type, lastMessage, title, unreadCount, ...props }) {
  return <Flex.Container direction='row' {...props}>
    <Box is='div' componentClassName='rcx-sidebar__item' mod-unread={!!unreadCount}>
      <Flex.Item align='center'>
        <Avatar size={viewModeToAvatarSizeMap[viewMode]} {...avatar}/>
      </Flex.Item>


      <Flex.Container direction='column' justifyContent='center'>
        <Box is='div' componentClassName='rcx-sidebar__item__text'>
          <Flex.Container direction='row' alignItems='center'>
            <Box is='div'>
              <Flex.Item>
                <Margins inline='x8'>
                  <Flex.Container alignItems='center'>
                    <Box is='span'>
                      {type === 'd' && <Status status={status} />}
                      {type !== 'd' && <Icon size={16} name={type === 'p' ? 'lock' : 'hashtag'} />}
                    </Box>
                  </Flex.Container>
                </Margins>
                <Margins inlineEnd='x8'>
                  {viewMode !== 'condensed' && <Box textStyle='p1' componentClassName='rcx-sidebar__item__title'>{title}</Box>}
                  {viewMode === 'condensed' && <Box textStyle='c1' componentClassName='rcx-sidebar__item__title'>{title}</Box>}
                </Margins>
              </Flex.Item>
            </Box>
          </Flex.Container>

          {viewMode === 'extended' && <Flex.Item grow={1} shrink={1} >
            <Margins inline='x8'>
              <Box textStyle='p1' componentClassName='rcx-sidebar__item__description'>{`${ lastMessage.username }: ${ lastMessage.text }`}</Box>
            </Margins>
          </Flex.Item>}

        </Box>
      </Flex.Container>

      {(unreadCount || viewMode === 'extended') && <Flex.Container direction='column' alignItems='end' justifyContent={ viewMode === 'extended' ? 'start' : 'space-around' }>
        <Box is='div'>
          {viewMode === 'extended' && <Box is='div' textStyle='p1' textColor='hint'>{lastMessage.time}</Box>}
          {unreadCount && <Badge style={{ width: 'fit-content', display: 'block' }} variant={unreadCount.hasMention ? 'primary' : undefined}>{unreadCount.count}</Badge>}
        </Box>
      </Flex.Container>}
    </Box>
  </Flex.Container>;
}
