import React from 'react';

import { ActionButton } from '../Button/ActionButton';
import { ButtonGroup } from '../ButtonGroup';
import { Icon as FuselageIcon } from '../Icon';

const Item = ({
  selected,
  highlighted,
  clickable,
  is: Tag = 'div',
  children,
  ...props
}) => (
  <Tag
    className={[
      'rc-box rcx-box--full rcx-sidebar-item',
      highlighted && 'rcx-sidebar-item--highlighted',
      clickable && 'rcx-sidebar-item--clickable',
      selected && 'rcx-sidebar-item--selected',
    ]
      .filter(Boolean)
      .join(' ')}
    {...props}
  >
    <div
      className='rcx-box rcx-box--full rcx-sidebar-item__wrapper'
      children={children}
    />
  </Tag>
);

const Container = (props) => (
  <div
    className='rc-box rcx-box--full rcx-sidebar-item__container'
    {...props}
  />
);

const Menu = (props) => (
  <div
    className='rc-box rcx-box--full rcx-box--animated rcx-sidebar-item__menu-wraper '
    {...props}
  />
);

const Content = ({ className, ...props }) => (
  <div
    className={`rc-box rcx-box--full rcx-sidebar-item__container rcx-sidebar-item__content ${className}`}
    {...props}
  />
);

const Title = ({ className, ...props }) => (
  <div
    className={`rc-box rcx-box--full rcx-sidebar-item__title ${className}`}
    {...props}
  />
);

const Time = ({ className, ...props }) => (
  <div
    className={`rc-box rcx-box--full rcx-sidebar-item__time ${className}`}
    {...props}
  />
);

const Badge = ({ className, ...props }) => (
  <div
    className={`rc-box rcx-box--full rcx-sidebar-item__badge ${className}`}
    {...props}
  />
);

const Subtitle = ({ className, ...props }) => (
  <div
    className={`rc-box rcx-box--full rcx-sidebar-item__subtitle ${className}`}
    {...props}
  />
);

const Wrapper = ({ className, ...props }) => (
  <div
    className={`rc-box rcx-box--full rcx-sidebar-item__wrapper ${className}`}
    {...props}
  />
);

const Icon = ({ children, className, ...props }) => (
  <div
    className={`rc-box rcx-box--full rcx-sidebar-item__icon ${className}`}
    {...props}
  >
    {children || <FuselageIcon size='x16' {...props} />}
  </div>
);

const Avatar = (props) => (
  <Container>
    <div className='rc-box rcx-box--full rcx-sidebar-item__avatar' {...props} />
  </Container>
);

const Actions = (props) => <ButtonGroup small {...props} />;

const Action = (props) => <ActionButton small {...props} />;

Object.assign(Item, {
  Menu,
  Container,
  Content,
  Title,
  Subtitle,
  Time,
  Wrapper,
  Icon,
  Avatar,
  Actions,
  Action,
  Badge,
});

export default Item;
