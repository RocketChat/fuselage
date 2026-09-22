import { View } from '@tamagui/core';
import type { ComponentProps } from 'react';

/**
 * Tamagui publishes `TextProps` but has no matching `ViewProps` -- the name is
 * taken by an internal React Native type -- so it is derived from the
 * component, the same way a `styled()` component's own props are.
 *
 * @public
 */
export type ViewProps = ComponentProps<typeof View>;

export default View;
