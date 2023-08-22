import { Field } from './Field';
import { FieldDescription } from './FieldDescription';
import { FieldError } from './FieldError';
import { FieldHint } from './FieldHint';
import { FieldLabel } from './FieldLabel';
import { FieldLink } from './FieldLink';
import { FieldRow } from './FieldRow';

export {
  Field,
  FieldDescription,
  FieldError,
  FieldHint,
  FieldLabel,
  FieldLink,
  FieldRow,
};

/**
 * @deprecated Avoid default usage, use named imports instead
 */
export default Object.assign(Field, {
  Label: FieldLabel,
  Description: FieldDescription,
  Row: FieldRow,
  Error: FieldError,
  Hint: FieldHint,
  Link: FieldLink,
});
