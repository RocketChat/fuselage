import { forwardRef } from 'react';

import { styled } from 'tamagui';

import { RcxText } from '../../primitives';

// InputBoxAddon — icon/button addon next to the input
// Original: .rcx-input-box__addon with clickable mixin

const InputBoxAddonFrame = styled(RcxText, {
  name: 'InputBoxAddon',

  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignItems: 'flex-start',
  flexGrow: 0,
  flexShrink: 0,

  cursor: 'pointer',
  outline: 0,
});

export type InputBoxAddonProps = {
  children?: React.ReactNode;
  [key: string]: any;
};

const InputBoxAddon = forwardRef<HTMLSpanElement, InputBoxAddonProps>(
  function InputBoxAddon(props, ref) {
    return <InputBoxAddonFrame ref={ref} {...(props as any)} />;
  },
);

export default InputBoxAddon;
