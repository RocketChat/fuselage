import { memo } from 'react';

import { Box, type BoxProps } from '../Box';
import { Margins } from '../Margins';

/**
 * @deprecated Use `ContextualbarV2HeaderProps` instead.
 */
export type ContextualbarHeaderProps = BoxProps;

const ContextualbarHeader = ({
  children,
  ...props
}: ContextualbarHeaderProps) => (
  <Box
    display='flex'
    alignItems='center'
    height='x56'
    paddingInline={24}
    borderBlockEndWidth='default'
    borderBlockColor='extra-light'
    flexShrink={0}
    {...props}
  >
    <Box
      marginInline='neg-x4'
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      flexGrow={1}
      height='100%'
      overflow='hidden'
    >
      <Margins inline='x4'>{children}</Margins>
    </Box>
  </Box>
);
/**
 * @deprecated Use `ContextualbarV2Header` instead.
 */
export default memo(ContextualbarHeader);
