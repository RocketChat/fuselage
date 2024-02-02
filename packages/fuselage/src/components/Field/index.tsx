import { Field } from './Field';
import { FieldDescription } from './FieldDescription';
import { FieldError } from './FieldError';
import { FieldHint } from './FieldHint';
import { FieldLabel } from './FieldLabel';
import { FieldLabelInfo } from './FieldLabelInfo';
import { FieldLink } from './FieldLink';
import { FieldRow } from './FieldRow';

export {
  Field,
  FieldDescription,
  FieldError,
  FieldHint,
  FieldLabel,
  FieldLabelInfo,
  FieldLink,
  FieldRow,
};

export default Object.assign(Field, {
  /**
   * @deprecated Use named import `FieldLabel` instead
   */
  Label: FieldLabel,
  /**
      * @deprecated Use named import `FieldDescription` instead

   */
  Description: FieldDescription,
  /**
      * @deprecated Use named import `FieldRow` instead

   */
  Row: FieldRow,
  /**
      * @deprecated Use named import `FieldError` instead

   */
  Error: FieldError,
  /**
      * @deprecated Use named import `FieldHint` instead

   */
  Hint: FieldHint,
  /**
      * @deprecated Use named import `FieldLink` instead

   */
  Link: FieldLink,
});
