import React, { ComponentProps, FC } from 'react';

import { ButtonGroup } from '../..';

export const MessageToolbox: FC<ComponentProps<typeof ButtonGroup>> =
  function ToolBox(props) {
    return (
      <div className='rcx-box rcx-box--full rcx-message-toolbox'>
        <ButtonGroup {...{ small: true }} {...props} />
      </div>
    );
  };
