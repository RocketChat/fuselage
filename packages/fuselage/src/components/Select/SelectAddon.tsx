import { forwardRef } from 'react';

import { styled } from 'tamagui';

import { RcxText } from '../../primitives';

// .rcx-select__addon extends .rcx-input-box__addon + clickable
const SelectAddonFrame = styled(RcxText, {
  name: 'SelectAddon',

  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignItems: 'flex-start',
  flexGrow: 0,
  flexShrink: 0,

  cursor: 'pointer',
  outline: 0,
  padding: 0,
});

type SelectAddonProps = {
  children?: React.ReactNode;
  [key: string]: any;
};

const SelectAddon = forwardRef<HTMLSpanElement, SelectAddonProps>(
  function SelectAddon(props, ref) {
    return <SelectAddonFrame ref={ref} {...(props as any)} />;
  },
);

export default SelectAddon;
