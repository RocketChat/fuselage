import React, { ComponentProps, FC, forwardRef } from 'react';

import { ActionButton, ButtonGroup } from '../..';
import { Menu } from '../../Menu';

import './styles.scss';

export const MessageToolbox: FC<ComponentProps<typeof ButtonGroup>> & {
  Item: typeof MessageToolboxItem;
  Wrapper: typeof MessageToolboxWrapper;
  Menu: FC<ComponentProps<typeof Menu>>;
} = function ToolBox(props) {
  return (
    <div className='rcx-box rcx-box--full rcx-message-toolbox'>
      <ButtonGroup {...{ small: true }} {...props} />
    </div>
  );
};

export const MessageToolboxWrapper = forwardRef<HTMLDivElement>(
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

export const MessageToolboxItem = forwardRef<
  HTMLButtonElement,
  ComponentProps<typeof ActionButton>
>(function Item(props, ref) {
  return <ActionButton ref={ref} {...{ ...props, small: true, ghost: true }} />;
});

MessageToolbox.Wrapper = MessageToolboxWrapper;

MessageToolbox.Item = MessageToolboxItem;

MessageToolbox.Menu = Menu;
