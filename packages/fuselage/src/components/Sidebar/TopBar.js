import React from 'react';

import { ActionButton, Divider, Box } from '../..';
import { Actions } from './Actions';

const Avatar = { size: 'x24' };

const TopBar = ({ modifier, className, ...props }) => <div className={ `rc-box rc-box--full rcx-sidebar-topbar ${ className }` } {...props} />;

const Wrapper = ({ children }) => <div className='rc-box rc-box--full rcx-sidebar-topbar__wrapper' children={children} />;

TopBar.ToolBox = ({ children, ...props }) =>
  <TopBar className='rcx-sidebar-topbar--toolbox'{...props}>
    <TopBar.Wrapper children={children} />
    <TopBar.Divider />
  </TopBar>;

TopBar.Section = ({ children, ...props }) =>
  <TopBar className='rcx-sidebar-topbar--section' {...props}>
    <TopBar.Wrapper children={children} />
    <TopBar.Divider />
  </TopBar>;

TopBar.Wrapper = Wrapper;
TopBar.Avatar = Avatar;
TopBar.Actions = Actions;
TopBar.Action = (props) => <ActionButton ghost {...props}/>;
TopBar.Divider = () => <Divider mbs='neg-x2' mbe={0} />;
TopBar.Title = (props) => <Box fontScale='p2' color='default' withTruncatedText {...props} />;

export default TopBar;
