import { css } from 'styled-components';

import box from './box';
import { clickable } from './interactivity';
import { visuallyHidden } from './layout';

export const selectionButton = (Input, Fake) => (states, content) => css`
  ${ box }

  display: inline-flex;

  vertical-align: middle;

  ${ clickable }

  & > ${ Input } {
    ${ visuallyHidden }
  }

  & > ${ Fake } {
    ${ box }

    position: relative;

    height: ${ ({ theme }) => theme.sizes.x20 };

    border-width: ${ ({ theme }) => theme.borders.width.x2 };

    ${ content }
  }

  ${ ['unchecked', 'checked', 'indeterminate'].map((valueState) => {
    if (!states[valueState] || !states[valueState].all) {
      return;
    }

    const valueStateClass = valueState === 'unchecked' ? '' : `.${ valueState }`;
    const valueStatePseudoClass = valueState === 'unchecked' ? '' : `:${ valueState }`;

    return css`
      & > ${ Input }${ valueStateClass } + ${ Fake },
      & > ${ Input }${ valueStatePseudoClass } + ${ Fake } {
        ${ states[valueState].all }
      }
    `;
  }) }

  ${ ['default', 'hover', 'focus', 'active', 'disabled'].map((interactionState) =>
    ['unchecked', 'checked', 'indeterminate'].map((valueState) => {
      if (!states[valueState] || !states[valueState][interactionState]) {
        return;
      }

      const interactionStateClass = interactionState === 'default' ? '' : `.${ interactionState }`;
      const interactionStatePseudoClass = interactionState === 'default' ? '' : `:${ interactionState }`;
      const valueStateClass = valueState === 'unchecked' ? '' : `.${ valueState }`;
      const valueStatePseudoClass = valueState === 'unchecked' ? '' : `:${ valueState }`;

      return css`
        &${ interactionStateClass } > ${ Input }${ valueStateClass } + ${ Fake },
        &${ interactionStateClass } > ${ Input }${ valueStatePseudoClass } + ${ Fake },
        & > ${ Input }${ valueStateClass }${ interactionStatePseudoClass } + ${ Fake },
        & > ${ Input }${ valueStatePseudoClass }${ interactionStatePseudoClass } + ${ Fake } {
          ${ states[valueState][interactionState] }
        }
      `;
    })
  ) }

  &.disabled > ${ Input } + ${ Fake },
  & > ${ Input }:disabled + ${ Fake } {
    cursor: not-allowed;
  }
`;
