import type { Keys } from '@rocket.chat/icons';
import type { Ref } from 'react';
import React, { forwardRef } from 'react';

import { Box } from '../Box';
import { Icon } from '../Icon';

type SelectAddonProps = {
  icon?: Keys;
  closed?: boolean;
};

const SelectAddon = forwardRef(function SelectAddon(
  { icon = 'chevron-down', closed = false }: SelectAddonProps,
  ref: Ref<HTMLDivElement>
) {
  return (
    <Box
      ref={ref}
      rcx-select__addon
      marginInline={4}
      flexGrow={0}
      flexShrink={0}
      display='flex'
      flexDirection='row'
      flexWrap='nowrap'
      alignItems='flex-start'
    >
      {closed ? (
        <Icon name='cross' size={20} />
      ) : (
        <Icon name={icon} size={20} />
      )}
    </Box>
  );
});

export default SelectAddon;
