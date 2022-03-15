import type { ReactNode } from 'react';

import type { SelectOption } from '../../types/SelectOption';

export type SelectValueParams<TValue = SelectOption[0]> =
  | {
      value: TValue;
      label: ReactNode;
      anchorActive: boolean;
    }
  | {
      placeholder: string | undefined;
      anchorActive: boolean;
    };
