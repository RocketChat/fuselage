import React, { FC } from 'react';

import { ActionButton } from '../../';

export const Toolbox: FC & {
  Item: FC;
} = function ToolBox() {
  return <div className='rcx-message-toolbox' />;
};

const Item: FC = function Item() {
  return <ActionButton />;
};

Toolbox.Item = Item;
