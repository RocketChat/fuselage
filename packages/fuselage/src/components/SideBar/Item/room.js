import React from 'react';

import { Flex, Avatar, Icon, Box, Margins, Badge, Status } from '../..';


const viewModeToAvatarSizeMap = {
  condensed: 'x16',
  medium: 'x28',
  extended: 'x36',
};

export function SidebarItemRoom({ viewMode, avatar, status, type, lastMessage, title, unreadCount, ...props }) {
  const extendedView = viewMode === 'extended';

  return <Flex.Container direction='row' {...props}>
    <Box is='div' componentClassName='rcx-sidebar__item' mod-unread={!!unreadCount} {...props}>
      <Margins inline='x4'>
        <Flex.Item align='center'>
          <Avatar size={viewModeToAvatarSizeMap[viewMode]} {...avatar}/>
        </Flex.Item>
      </Margins>


      <Flex.Container direction={extendedView ? 'column' : 'row'} justifyContent='space-between'>
        <Box is='div' componentClassName='rcx-sidebar__item__text'>

          <Flex.Container direction='row' alignItems='center' justifyContent='space-between'>
            <Box is='div'>

              <Flex.Container direction='row' alignItems='center'>
                <Box >

                  <Margins inline='x2'>
                    <Flex.Container alignItems='center'>
                      {type === 'd' && <Status status={status} />}
                      {type !== 'd' && <Icon size={16} name={type === 'p' ? 'lock' : 'hashtag'} />}
                    </Flex.Container>
                  </Margins>

                  <Margins inline='x4'>
                    {viewMode !== 'condensed' && <Box textStyle='p1' componentClassName='rcx-sidebar__item__title'>{title}</Box>}
                    {viewMode === 'condensed' && <Box textStyle='c1' componentClassName='rcx-sidebar__item__title'>{title}</Box>}
                  </Margins>

                </Box>
              </Flex.Container>

              <Margins inline='x4'>
                {extendedView && <Box is='div' textStyle='micro' textColor='hint'>{lastMessage.time}</Box>}
              </Margins>
            </Box>
          </Flex.Container>

          {(unreadCount || extendedView) && <Flex.Container direction='row' justifyContent='space-between'>
            <Box is='div'>
              <Margins inline='x4'>
                {extendedView && <Box textStyle='p1' componentClassName='rcx-sidebar__item__description'>{`${ lastMessage.username }: ${ lastMessage.text }`}</Box>}
                {unreadCount && <Flex.Item align='center'><Badge style={{ width: 'fit-content', display: 'block' }} variant={unreadCount.hasMention ? 'primary' : undefined}>{unreadCount.count}</Badge></Flex.Item>}
              </Margins>
            </Box>
          </Flex.Container>}

        </Box>
      </Flex.Container>

    </Box>
  </Flex.Container>;
}
