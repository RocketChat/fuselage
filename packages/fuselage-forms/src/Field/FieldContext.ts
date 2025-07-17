import type { ReactNode, RefCallback } from 'react';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react';

export const FieldContext = createContext<{
  setDescriptor: (type: LabelTypes, unregister?: boolean) => void;
  setLabel: (label: ReactNode) => void;
  descriptors: Set<LabelTypes>;
  label: ReactNode | null;
  id: string;
  fieldType: FieldType;
  setFieldType: (fieldType: FieldType) => void;
}>({
  setDescriptor: () => {},
  setLabel: () => {},
  descriptors: new Set(),
  label: null,
  id: '',
  fieldType: 'referencedByLabel',
  setFieldType: () => {},
});

export type LabelTypes = 'hint' | 'description' | 'error' | 'placeholder';

export type FieldType =
  | 'wrappedByLabel'
  | 'referencedByLabel'
  | 'referencedByInput';

export const useFieldLabel = (): [RefCallback<HTMLElement>, string] => {
  const { setLabel, id } = useContext(FieldContext);

  const setLabelRef = useCallback(
    (node: HTMLElement) => {
      if (!node || !node.textContent) {
        setLabel(null);
        return;
      }
      const text = [];
      const treeWalker = node.ownerDocument.createTreeWalker(
        node,
        NodeFilter.SHOW_TEXT,
      );

      while (treeWalker.nextNode()) {
        text.push(treeWalker.currentNode.textContent);
      }

      setLabel(text.join(' '));
    },
    [setLabel],
  );

  return [setLabelRef, `${id}-label`];
};

export const useFieldFieldType = () => {
  const { fieldType } = useContext(FieldContext);
  return fieldType;
};

export const useFieldDescriptorId = (type: LabelTypes) => {
  const { setDescriptor, id } = useContext(FieldContext);

  useEffect(() => {
    setDescriptor(type);
    return () => setDescriptor(type, true);
  }, [type, setDescriptor]);

  return `${id}-${type}`;
};

const describedByOrder = ['description', 'error', 'hint'] as const;
const getDescribedBy = (descriptors: Set<LabelTypes>, id: string) => {
  return describedByOrder
    .map((type) => {
      return descriptors.has(type) ? `${id}-${type}` : undefined;
    })
    .filter(Boolean)
    .join(' ');
};

const getInputId = (id: string, descriptors: Set<LabelTypes>) => {
  return `${id}-label${descriptors.has('placeholder') ? ` ${id}-placeholder` : ''}`;
};

const getAriaInvalid = (
  descriptors: Set<LabelTypes>,
): { 'aria-invalid': 'true' | 'false' } => {
  if (descriptors.has('error')) {
    return { 'aria-invalid': 'true' };
  }
  return { 'aria-invalid': 'false' };
};

// Input has id and label is htmlFor
export const useFieldReferencedByInput = () => {
  const { id, descriptors, setFieldType } = useContext(FieldContext);

  useEffect(() => {
    setFieldType('referencedByInput');
  }, [setFieldType]);

  return useMemo(
    () => ({
      'id': getInputId(id, descriptors),
      'aria-describedby': getDescribedBy(descriptors, id),
      ...getAriaInvalid(descriptors),
    }),
    [descriptors, id],
  );
};

// label has id and input is aria-labelledby
export const useFieldReferencedByLabel = () => {
  const { id, descriptors, setFieldType } = useContext(FieldContext);

  useEffect(() => {
    setFieldType('referencedByLabel');
  }, [setFieldType]);

  return useMemo(
    () => ({
      'aria-labelledby': getInputId(id, descriptors),
      'aria-describedby': getDescribedBy(descriptors, id),
      ...getAriaInvalid(descriptors),
    }),
    [descriptors, id],
  );
};

// label is rendered visually hidden inside the inputs wrapper label
export const useFieldWrappedByInputLabel = (): [
  ReactNode,
  { 'aria-describedby': string },
] => {
  const { id, label, descriptors, setFieldType } = useContext(FieldContext);

  useEffect(() => {
    setFieldType('wrappedByLabel');
  }, [setFieldType]);

  return useMemo(
    () => [
      label,
      {
        'aria-describedby': getDescribedBy(descriptors, id),
        'id': getInputId(id, descriptors),
        ...getAriaInvalid(descriptors),
      },
    ],
    [label, id, descriptors],
  );
};
