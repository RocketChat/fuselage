import { useState, useCallback, ReactNode } from 'react';
import { useId } from 'react-aria';

import { FieldContext, LabelTypes, FieldType } from './FieldContext';

function FieldProvider({ children }: { children: ReactNode }) {
  const id = useId();
  const [label, setLabel] = useState<ReactNode | null>(null);
  const [descriptors, setDescriptors] = useState(new Set<LabelTypes>());
  const [fieldType, setFieldType] = useState<FieldType>('referencedByInput');

  const setDescriptor = useCallback(
    (type: LabelTypes, unregister?: boolean) => {
      setDescriptors((labels) => {
        const _labelMap = new Set(labels);

        if (unregister) {
          _labelMap.delete(type);
          return _labelMap;
        }

        _labelMap.add(type);
        return _labelMap;
      });
    },
    [],
  );

  return (
    <FieldContext.Provider
      value={{
        setDescriptor,
        setLabel,
        descriptors,
        label,
        id,
        fieldType,
        setFieldType,
      }}
    >
      {children}
    </FieldContext.Provider>
  );
}

export default FieldProvider;
