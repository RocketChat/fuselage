import { Box, Margins, Tag } from '..';
import React, { ComponentProps, FC } from 'react';

import './Messages.styles.scss';
import { BoxProps } from '@rocket.chat/fuselage';

import { Metrics } from './Metrics';
import { Toolbox } from './Toolbox';
import { Divider } from '../';

import { prependClassName } from '../../helpers/prependClassName';
import { useArrayLikeClassNameProp } from '../Box';

const Container: FC = function Container(props) {
  return (
    <div className='rcx-box rcx-box--full rcx-message-container' {...props} />
  );
};

const ContainerFixed: FC = function Container(props) {
  return (
    <div
      className='rcx-box rcx-box--full rcx-message-container rcx-message-container--fixed'
      {...props}
    />
  );
};

const LeftContainer: FC = function LeftContainer(props) {
  return (
    <div
      className='rcx-box rcx-box--full rcx-message-container rcx-message-container--left'
      {...props}
    />
  );
};

const Header: FC = function Header({ children }) {
  return (
    <div className='rcx-box rcx-box--full rcx-message-header'>
      <div className='rcx-box rcx-box--full rcx-message-header__wrapper'>
        {children}
      </div>
    </div>
  );
};

const Body: FC<{
  clamp?: 2 | 3 | 4;
  className?: string | string[];
}> = function Body({ clamp, className, ...props }) {
  return (
    <div
      className={
        prependClassName(
          className,
          [
            'rcx-message-body',
            clamp && `rcx-message-body--clamp rcx-message-body--clamp-${clamp}`,
          ]
            .filter(Boolean)
            .join(' ')
        ) as string
      }
      {...props}
    />
  );
};

const Block: FC<{ className?: string }> = function Block({
  className,
  ...props
}) {
  return (
    <div
      className={
        prependClassName(
          className,
          'rcx-box rcx-box--full rcx-message-block'
        ) as any
      }
      {...props}
    />
  );
};

export const Message: FC<{
  is: BoxProps['is'];
  onClick: BoxProps['onClick'];
  className?: string | string[];
  clickable?: true | false;
  sequential?: Boolean;
}> & {
  Toolbox: FC<ComponentProps<typeof Toolbox>>;
  // Thread: FC;
  Metrics: FC;
  Container: FC;
  ContainerFixed: FC;
  LeftContainer: FC;
  Header: FC;
  Body: FC<{ className?: string | string[] }>;
  Block: FC<{ className?: string }>;
  Timestamp: FC<{ children: string }>;
  Name: FC<{ children: string }>;
  Username: FC<{ children: string }>;
  Role: FC<{ children: string }>;
  Roles: FC<{ children: string }>;
  Divider: FC<ComponentProps<typeof Divider>>;
} = function Message({
  is: Tag = 'div',
  className,
  clickable,
  sequential,
  ...props
}) {
  return (
    <Tag
      className={prependClassName(
        useArrayLikeClassNameProp({ className }).className,
        [
          'rcx-message',
          (clickable || props.onClick) && 'rcx-message--clickable',
          sequential && 'rcx-message--sequential',
        ]
          .filter(Boolean)
          .join(' ')
      )}
      {...props}
    />
  );
};

const Timestamp: FC<{ children: string }> = function Timestamp(props) {
  return (
    <span
      className='rcx-box rcx-box--full rcx-message-header__time'
      {...props}
    />
  );
};

const Name: FC<{ children: string }> = function Name(props) {
  return (
    <span
      className='rcx-box rcx-box--full rcx-message-header__name'
      {...props}
    />
  );
};
const Username: FC<{ children: string }> = function Name(props) {
  return (
    <span
      className='rcx-box rcx-box--full rcx-message-header__username'
      {...props}
    />
  );
};

const Role: FC<{ children: string }> = function Role(props) {
  return (
    <Tag
      onClick={() => {}}
      className='rcx-box rcx-box--full rcx-message-header__role'
      {...props}
      small
      disabled={null}
      medium={null}
    />
  );
};

const Roles: FC = function Role(props) {
  return (
    <div
      className='rcx-box rcx-box--full rcx-message-header__roles'
      {...props}
    />
  );
};

Message.Metrics = Metrics;
Message.Toolbox = Toolbox;
Message.Container = Container;
Message.ContainerFixed = ContainerFixed;
Message.LeftContainer = LeftContainer;
Message.Header = Header;
Message.Body = Body;
Message.Block = Block;
Message.Timestamp = Timestamp;
Message.Name = Name;
Message.Username = Username;
Message.Roles = Roles;
Message.Role = Role;
Message.Divider = Divider;
