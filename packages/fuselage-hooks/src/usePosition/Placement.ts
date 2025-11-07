import type { PlacementVariant } from './PlacementVariant';
import type { Position } from './Position.js';

export type Placement = `${Position}-${PlacementVariant}` | Position;
