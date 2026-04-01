import type { ReactNode } from 'react';
import { Children, isValidElement } from 'react';

import { styled } from '@tamagui/core';

import { RcxView } from '../../primitives';

const FieldGroupFrame = styled(RcxView, {
  name: 'FieldGroup',

  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  justifyContent: 'center',
  alignItems: 'stretch',

  minWidth: 0,
});

const FieldGroupItem = styled(RcxView, {
  name: 'FieldGroupItem',

  flexGrow: 0,
  flexShrink: 0,
  flexBasis: 'auto',

  width: '100%',
});

export type FieldGroupProps = {
  children?: ReactNode;
  [key: string]: any;
};

/**
 * A container for grouping fields that semantically share a common data context.
 */
const FieldGroup = ({ children, ...props }: FieldGroupProps) => (
  <FieldGroupFrame role='group' {...props}>
    {Children.map(children, (child, index) => {
      if (!isValidElement(child)) return child;
      return (
        <FieldGroupItem
          {...(index > 0 && { marginBlockStart: '$x24' })}
        >
          {child}
        </FieldGroupItem>
      );
    })}
  </FieldGroupFrame>
);

export default FieldGroup;
