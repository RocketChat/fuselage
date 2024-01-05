import React from 'react';
import type { MultiValueProps } from 'react-select';
import { components } from 'react-select';

import { Chip, IconButton } from '../..';
import type { FuselageBoxHTMLAttributes } from '../../types/FuselageBoxHTMLAttributes';

const MultiValue = (props: MultiValueProps) => {
  const { children, removeProps } = props;

  return (
    <components.MultiValue {...props}>
      <Chip
        renderDismissSymbol={() => (
          <IconButton
            mini
            icon='cross'
            aria-label={`Remove ${children || 'option'}`}
            {...(removeProps as FuselageBoxHTMLAttributes<HTMLElement>)}
          />
        )}
      >
        {children}
      </Chip>
    </components.MultiValue>
  );
};

export default MultiValue;
