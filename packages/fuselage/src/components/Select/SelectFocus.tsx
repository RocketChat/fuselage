import { forwardRef } from 'react';

import { styled } from '@tamagui/core';

import { RcxInteractiveText } from '../../primitives';
import type { BoxProps } from '../Box';

// .rcx-select__focus — inline-block button that shows selected value or placeholder
const SelectFocusFrame = styled(RcxInteractiveText, {
  name: 'SelectFocus',
  role: 'button',

  display: 'inline-block',
  minWidth: 'auto',

  userSelect: 'none',
  textAlign: 'start',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',
  textDecoration: 'none',

  backgroundColor: 'inherit',
  // @ts-expect-error appearance is valid CSS
  appearance: 'none',

  fontFamily: '$body',
  fontSize: '$p2m',
  fontWeight: '$p2m',
  lineHeight: '$p2m',
  letterSpacing: '$p2m',

  color: '$fontHint',

  overflow: 'hidden',
  textOverflow: 'ellipsis',
  overflowWrap: 'normal',

  borderWidth: 0,
  borderStyle: 'solid',
  borderColor: 'transparent',
});

type SelectFocusProps = BoxProps;

const SelectFocus = forwardRef<Element, SelectFocusProps>(
  function SelectFocus(props, ref) {
    return (
      <SelectFocusFrame
        ref={ref}
        // pass 'button' type for native button behavior
        {...({ type: 'button' } as any)}
        {...(props as any)}
      />
    );
  },
);

export default SelectFocus;
