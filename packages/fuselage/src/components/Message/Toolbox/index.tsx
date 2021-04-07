import React, { ComponentProps, FC } from 'react';

import { ActionButton, ButtonGroup } from '../../';

import './styles.scss';

export const Toolbox: FC<ComponentProps<typeof ButtonGroup>> & {
  Item: FC;
} = function ToolBox(props) {
  return (
    <div className='rcx-box rcx-box--full rcx-message-toolbox'>
      <ButtonGroup {...{ small: true }} {...props} />
    </div>
  );
};

const Item: FC<ComponentProps<typeof ActionButton>> = function Item(props) {
  return <ActionButton {...{ ...props, small: true, ghost: true }} />;
};

Toolbox.Item = Item;
