import React from 'react';

import { Icon as FuselageIcon, ButtonGroup } from '../..';

const Item = ({ selected, highlighted, clickable, ...props }) => <div className={[
  'rc-box rcx-box--full rcx-sidebar-item',
  highlighted && 'rcx-sidebar-item--highlighted',
  clickable && 'rcx-sidebar-item--clickable',
  selected && 'rcx-sidebar-item--selected',
].filter(Boolean).join(' ')} {...props} />;

const Container = (props) => <div className='rc-box rcx-box--full rcx-sidebar-item__container' {...props}/>;

const Content = (props) => <div className='rc-box rcx-box--full rcx-sidebar-item__container rcx-sidebar-item__content' {...props}/>;

const Title = (props) => <div className='rc-box rcx-box--full rcx-sidebar-item__title' {...props}/>;

const Subtitle = (props) => <div className='rc-box rcx-box--full rcx-sidebar-item__subtitle' {...props}/>;

const Wrapper = (props) => <div className='rc-box rcx-box--full rcx-sidebar-item__wrapper' {...props}/>;

const Icon = (props) => <FuselageIcon w='x12' mi='x4' size='x16' {...props} />;

const Avatar = (props) => <Container><div className='rc-box rcx-box--full rcx-sidebar-item__avatar' {...props}/></Container>;

const Actions = (props) => <ButtonGroup small {...props}/>;

Object.assign(Item, {
  Container,
  Content,
  Title,
  Subtitle,
  Wrapper,
  Icon,
  Avatar,
  Actions,
});

export default Item;
