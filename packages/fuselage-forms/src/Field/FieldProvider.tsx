import type { ReactNode } from 'react';
import { useState, useCallback } from 'react';
import { useId } from 'react-aria';

import type { LabelTypes, FieldType } from './FieldContext';
import { FieldContext } from './FieldContext';

type FieldProviderProps = { children: ReactNode };

function FieldProvider({ children }: FieldProviderProps) {
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
