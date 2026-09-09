import type { ReactNode } from 'react';

import { Box } from '..';

/** @public */
export type ExperimentalSurfaceProps = {
  children?: ReactNode;
};

/**
 * Placeholder so the subpath ships something verifiable. Replace it with the
 * first real experimental component -- it exists to demonstrate that importing
 * from `'..'` resolves to the main entry point at runtime rather than bundling
 * a second copy of it.
 *
 * @public
 */
export const ExperimentalSurface = ({ children }: ExperimentalSurfaceProps) => (
  <Box borderRadius='medium'>{children}</Box>
);
