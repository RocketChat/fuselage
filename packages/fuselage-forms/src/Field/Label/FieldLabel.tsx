import { FieldLabel as FieldLabelComponent } from '@rocket.chat/fuselage';
import { type ComponentPropsWithoutRef } from 'react';

import { useFieldFieldType } from '../FieldContext';

import HiddenLabel from './HiddenLabel';
import LabelFor from './LabelFor';
import ReferencedLabel from './ReferencedLabel';

const FieldLabel = (
  props: ComponentPropsWithoutRef<typeof FieldLabelComponent>,
) => {
  const fieldType = useFieldFieldType();

  if (fieldType === 'wrappedByLabel') {
    return <HiddenLabel {...props} />;
  }
  if (fieldType === 'referencedByInput') {
    return <ReferencedLabel {...props} />;
  }
  // referencedByLabel
  return <LabelFor {...props} />;
};

export default FieldLabel;
