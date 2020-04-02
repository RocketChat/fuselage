import React from 'react';
import PropTypes from 'prop-types';

import { Avatar, Icon, Box, Margins, Badge, UserStatus } from '../..';


const viewModeToAvatarSizeMap = {
  condensed: 'x16',
  medium: 'x28',
  extended: 'x36',
};


export function SidebarRoomItem(props) {
  switch (props.viewMode) {
  case 'medium':
    return <Medium { ...props } />;
  case 'condensed':
    return <Condensed { ...props }/>;
  case 'extended':
  default:
    return <Extended { ...props }/>;
  }
}

export function SidebarRoomItemGeneric({ viewMode = 'medium', avatar, status, roomType, lastMessage, title, unreadCount, children, clicable, ...props }) {
  const extendedView = viewMode === 'extended';

  return <Box display='flex' flexDirection='row' componentClassName='rcx-sidebar-item' p='x4' mod-unread={!!unreadCount} mod-clickable={clicable} {...props}>

    { avatar && <Avatar mi='x4' alignSelf='center' size={viewModeToAvatarSizeMap[viewMode]} {...avatar}/> }

    <Box display='flex' flexDirection={extendedView ? 'column' : 'row'} justifyContent='space-between' componentClassName={'rcx-sidebar-item__container'}>
      {children}
    </Box>

  </Box>;
}

function RoomSymbol({ roomType, status }) {
  if (roomType === 'd') {
    return <UserStatus flexShrink={0} status={status} />;
  }
  return <Icon flexShrink={0} size={16} name={roomType === 'p' ? 'lock' : 'hashtag'} />;
}


export function Condensed(props) {
  const { status, roomType, title, unreadCount } = props;
  return <SidebarRoomItemGeneric { ...props }>
    <Box display='flex' flexDirection='row' alignItems='center' justifyContent='space-between' componentClassName='rcx-sidebar-item__text' flexGrow={1}>
      <Margins inline='x4'>
        <RoomSymbol status={status} roomType={roomType}/>
        <Box data-qa='sidebar-username' textStyle='c1' componentClassName='rcx-sidebar-item__title'>{title}</Box>
        {unreadCount && <Badge flexShrink={0} alignSelf='center' variant={unreadCount.hasMention ? 'primary' : 'ghost'}>{unreadCount.count}</Badge>}
      </Margins>
    </Box>
  </SidebarRoomItemGeneric>;
}

export function Medium(props) {
  const { status, roomType, title, unreadCount } = props;
  return <SidebarRoomItemGeneric { ...props }>
    <Box display='flex' flexDirection='row' alignItems='center' justifyContent='space-between' componentClassName='rcx-sidebar-item__text' flexGrow={1}>
      <Margins inline='x4'>
        <RoomSymbol status={status} roomType={roomType}/>
        <Box data-qa='sidebar-username' textStyle='c1' componentClassName='rcx-sidebar-item__title'>{title}</Box>
        {unreadCount && <Badge flexShrink={0} alignSelf='center' variant={unreadCount.hasMention ? 'primary' : 'ghost'}>{unreadCount.count}</Badge>}
      </Margins>
    </Box>
  </SidebarRoomItemGeneric>;
}

export function Extended(props) {
  const { status, roomType, lastMessage, title, unreadCount } = props;
  return <SidebarRoomItemGeneric { ...props }>
    <Box display='flex' flexDirection='row' alignItems='center' justifyContent='space-between' componentClassName='rcx-sidebar-item__text' flexGrow={1}>
      <Box display='flex' flexDirection='row' alignItems='center' flexGrow={1} flexShrink={1} componentClassName='rcx-sidebar-item__text'>
        <Margins inline='x4'>
          <RoomSymbol status={status} roomType={roomType}/>
          <Box data-qa='sidebar-username' textStyle='c1' componentClassName='rcx-sidebar-item__title'>{title}</Box>
        </Margins>
      </Box>
      <Box mi='x4' textStyle='micro' textColor='hint'>{lastMessage.time}</Box>
    </Box>

    <Box display='flex' flexDirection='row' justifyContent='space-between' componentClassName='rcx-sidebar-item__text' flexShrink={1} flexGrow={1}>
      <Margins inline='x4'>
        <Box flexShrink={1} textStyle='p1' componentClassName='rcx-sidebar-item__description'>{`${ lastMessage.username }: ${ lastMessage.text }`}</Box>
        {unreadCount && <Badge flexShrink={0} alignSelf='center' variant={unreadCount.hasMention ? 'primary' : 'ghost'}>{unreadCount.count}</Badge>}
      </Margins>
    </Box>
  </SidebarRoomItemGeneric>;
}

SidebarRoomItem.propTypes = {
  viewMode: PropTypes.oneOf(['condensed', 'expanded', 'medium']),
  avatar: PropTypes.shape({ url: PropTypes.string, title: PropTypes.string }),
  roomType: PropTypes.oneOf(['d', 'c', 'p']),
  lastMessage: PropTypes.shape({ username: PropTypes.string, text: PropTypes.string, time: PropTypes.string }),
  unreadCount: PropTypes.shape({ count: PropTypes.number, hasMention: PropTypes.bool }),
  title: PropTypes.string,
};
