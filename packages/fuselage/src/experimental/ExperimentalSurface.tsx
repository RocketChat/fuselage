import { View, styled } from '@tamagui/core';

/**
 * Placeholder so the subpath ships something verifiable. Replace it with the
 * first real experimental component.
 *
 * It is built the way the components that follow it should be: a Tamagui
 * `styled()` primitive resolving `$` tokens and theme values from
 * `tamagui.config`, with nothing imported from the main entry point.
 *
 * @public
 */
export const ExperimentalSurface = styled(View, {
  name: 'ExperimentalSurface',
  borderRadius: '$medium',
  backgroundColor: '$surface-light',
  borderColor: '$stroke-extra-light',
  borderWidth: 1,
  padding: '$x8',
});
