import React, {
  ComponentProps,
  FC,
  forwardRef,
  ForwardRefExoticComponent,
} from 'react';

import { ActionButton, ButtonGroup } from '../..';
import { Menu } from '../../Menu';

import './styles.scss';

export const MessageToolbox: FC<ComponentProps<typeof ButtonGroup>> & {
  Item: FC<ComponentProps<typeof ActionButton>>;
  Wrapper: FC;
  Menu: FC<ComponentProps<typeof Menu>>;
} = function ToolBox(props) {
  return (
    <div className='rcx-box rcx-box--full rcx-message-toolbox'>
      <ButtonGroup {...{ small: true }} {...props} />
    </div>
  );
};

export const ToolboxWrapper: ForwardRefExoticComponent<any> = forwardRef(
  function ToolboxWrapper(props, ref) {
    return (
      <div
        ref={ref}
        className='rcx-box rcx-box--full rcx-message-toolbox__wrapper'
        {...props}
      />
    );
  }
);

const Item: FC<ComponentProps<typeof ActionButton>> = function Item(props) {
  return <ActionButton {...{ ...props, small: true, ghost: true }} />;
};

MessageToolbox.Wrapper = ToolboxWrapper;

MessageToolbox.Item = Item;

MessageToolbox.Menu = Menu;
