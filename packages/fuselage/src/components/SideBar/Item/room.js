import React from 'react';
import PropTypes from 'prop-types';

import { Flex, Avatar, Icon, Box, Margins, Badge, UserStatus } from '../..';


const viewModeToAvatarSizeMap = {
  condensed: 'x16',
  medium: 'x28',
  extended: 'x36',
};

export function SidebarItemRoom({ viewMode = 'medium', avatar, status, roomType, lastMessage, title, unreadCount, ...props }) {
  const extendedView = viewMode === 'extended';

  return <Box is='div' display='flex' flexDirection='row' componentClassName='rcx-sidebar__item' mod-unread={!!unreadCount} {...props}>

    <Avatar mi='x4' alignSelf='center' size={viewModeToAvatarSizeMap[viewMode]} {...avatar}/>

    <Box is='div' display='flex' flexDirection={extendedView ? 'column' : 'row'} justifyContent='space-between' componentClassName='rcx-sidebar__item__text'>

      <Box is='div' display='flex' flexDirection='row' alignItems='center' justifyContent='space-between'>
        <Box display='flex' flexDirection='row' alignItems='center'>
          <Margins inline='x4'>
            {roomType === 'd' && <UserStatus status={status} />}
            {roomType !== 'd' && <Icon size={16} name={roomType === 'p' ? 'lock' : 'hashtag'} />}

            {viewMode !== 'condensed' && <Box textStyle='p1' componentClassName='rcx-sidebar__item__title'>{title}</Box>}
            {viewMode === 'condensed' && <Box textStyle='c1' componentClassName='rcx-sidebar__item__title'>{title}</Box>}
          </Margins>
        </Box>

        {extendedView && <Box is='div' mi='x4' textStyle='micro' textColor='hint'>{lastMessage.time}</Box>}
      </Box>

      {(unreadCount || extendedView) && <Box is='div' display='flex' flexDirection='row' justifyContent='space-between'>
        <Margins inline='x4'>
          {extendedView && <Box textStyle='p1' componentClassName='rcx-sidebar__item__description'>{`${ lastMessage.username }: ${ lastMessage.text }`}</Box>}
          {unreadCount && <Badge alignSelf='center' variant={unreadCount.hasMention ? 'primary' : 'ghost'}>{unreadCount.count}</Badge>}
        </Margins>
      </Box>}

    </Box>

  </Box>;
}

SidebarItemRoom.propTypes = {
  viewMode: PropTypes.oneOf(['condensed', 'expanded', 'medium']),
  avatar: PropTypes.shape({ url: PropTypes.string, title: PropTypes.string }),
  roomType: PropTypes.oneOf(['d', 'c', 'p']),
  lastMessage: PropTypes.shape({ username: PropTypes.string, text: PropTypes.string, time: PropTypes.string }),
  unreadCount: PropTypes.shape({ count: PropTypes.number, hasMention: PropTypes.bool }),
  title: PropTypes.string,
};
