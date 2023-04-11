import type { cssFn } from '@rocket.chat/css-in-js';
import { css } from '@rocket.chat/css-in-js';

import { Palette } from '../../../Theme';
import { invariant } from '../../../helpers/invariant';
import type { Utility } from '../Utility';

type Elevation = '0' | '1' | '1nb' | '2' | '2nb';

const elevations: Record<Elevation, cssFn<[value: Elevation]>> = {
  '0': css`
    box-shadow: none;
  `,
  '1': css`
    box-shadow: 0px 0px 12px 0px ${Palette.shadow['shadow-elevation-1']};
    border: 1px solid ${Palette.shadow['shadow-elevation-border']};
  `,
  '1nb': css`
    box-shadow: 0px 0px 12px 0px ${Palette.shadow['shadow-elevation-1']};
  `,
  '2': css`
    box-shadow: 0px 0px 2px 0px ${Palette.shadow['shadow-elevation-2x']},
      0px 0px 12px 0px ${Palette.shadow['shadow-elevation-2y']};
    border: 1px solid ${Palette.shadow['shadow-elevation-border']};
  `,
  '2nb': css`
    box-shadow: 0px 0px 2px 0px ${Palette.shadow['shadow-elevation-2x']},
      0px 0px 12px 0px ${Palette.shadow['shadow-elevation-2y']};
  `,
};

export const elevation: Utility<Elevation> = {
  normalizeValue: (value) => {
    value = String(value);
    invariant(
      value === '0' ||
        value === '1' ||
        value === '1nb' ||
        value === '2' ||
        value === '2nb',
      `Invalid elevation value: ${value}`
    );
    return value;
  },
  name: (value) => `elevation-${value}`,
  cssFn: (value) => elevations[value](value),
};
