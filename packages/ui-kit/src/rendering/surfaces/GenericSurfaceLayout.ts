import { LayoutBlockMap } from '../../blocks/LayoutBlock';

type Override<T1, T2> = Omit<T1, keyof T2> & T2;

export type OverrideLayout<
  T extends Partial<LayoutBlockMap>,
  D = Override<LayoutBlockMap, T>
> = D;

type AllowedLayoutsFiltered<
  AllowedLayoutsTypes extends keyof LayoutBlockMap,
  D,
  S = { [P in keyof D]: P extends AllowedLayoutsTypes ? D[P] : never },
  R = S[keyof S]
> = R;

export type GenericSurfaceLayout<
  AllowedLayoutsTypes extends keyof LayoutBlockMap,
  T extends Partial<LayoutBlockMap> = LayoutBlockMap
> = AllowedLayoutsFiltered<AllowedLayoutsTypes, OverrideLayout<T>>[];
