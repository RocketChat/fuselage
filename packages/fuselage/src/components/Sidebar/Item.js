import React from 'react';

import { Icon as FuselageIcon, ButtonGroup } from '../..';

const Item = ({ selected, highlighted, clickable, is: Tag = 'div', ...props }) => <Tag
  className={[
    'rc-box rcx-box--full rcx-sidebar-item',
    highlighted && 'rcx-sidebar-item--highlighted',
    clickable && 'rcx-sidebar-item--clickable',
    selected && 'rcx-sidebar-item--selected',
  ].filter(Boolean).join(' ')} {...props}/>;

const Container = (props) => <div className='rc-box rcx-box--full rcx-sidebar-item__container' {...props}/>;

const Menu = (props) => <div className='rc-box rcx-box--full rcx-sidebar-item__menu-wraper ' {...props}/>;

const Content = ({ className, ...props }) => <div className={`rc-box rcx-box--full rcx-sidebar-item__container rcx-sidebar-item__content ${ className }`} {...props}/>;

const Title = ({ className, ...props }) => <div className={`rc-box rcx-box--full rcx-sidebar-item__title ${ className }`} {...props}/>;

const Time = ({ className, ...props }) => <div className={`rc-box rcx-box--full rcx-sidebar-item__time ${ className }`} {...props}/>;

const Subtitle = ({ className, ...props }) => <div className={`rc-box rcx-box--full rcx-sidebar-item__subtitle ${ className }`} {...props}/>;

const Wrapper = ({ className, ...props }) => <div className={`rc-box rcx-box--full rcx-sidebar-item__wrapper ${ className }`} {...props}/>;

const Icon = (props) => <FuselageIcon w='x12' mi='x4' size='x16' {...props} />;

const Avatar = (props) => <Container><div className='rc-box rcx-box--full rcx-sidebar-item__avatar' {...props}/></Container>;

const Actions = (props) => <ButtonGroup small {...props}/>;

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
});

export default Item;
