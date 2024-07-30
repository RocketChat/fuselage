import React, { createContext } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';
import FieldDescription from './FieldDescription';
import FieldError from './FieldError';
import FieldHint from './FieldHint';
import FieldLabel from './FieldLabel';
import FieldLink from './FieldLink';
import FieldRow from './FieldRow';

export const FieldContext = createContext(false);

/** @public */
export type FieldProps = BoxProps;

/**
 * A `Field` is a wrapper representing an entry in a form.
 *
 * @public
 */
function Field(props: FieldProps) {
  return (
    <FieldContext.Provider value={true}>
      <Box rcx-field {...props} />
    </FieldContext.Provider>
  );
}

/** @public */
// eslint-disable-next-line @typescript-eslint/no-namespace
namespace Field {
  /** @deprecated use `FieldLabel` instead */
  export const Label = FieldLabel;
  /** @deprecated use `FieldDescription` instead */
  export const Description = FieldDescription;
  /** @deprecated use `FieldRow` instead */
  export const Row = FieldRow;
  /** @deprecated use `FieldError` instead */
  export const Error = FieldError;
  /** @deprecated use `FieldHint` instead */
  export const Hint = FieldHint;
  /** @deprecated use `FieldLink` instead */
  export const Link = FieldLink;
}

export default Field;
