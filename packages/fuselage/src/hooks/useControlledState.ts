import type { Dispatch, SetStateAction } from 'react';
import { useCallback, useRef, useState } from 'react';

export function useControlledState<T>(
  value: T | undefined,
  defaultValue: T,
  onChange?: (value: T) => void
): [T, Dispatch<SetStateAction<T>>] {
  const [stateValue, setStateValue] = useState(() => value ?? defaultValue);

  const wasControlledRef = useRef(value !== undefined);
  const wasControlled = wasControlledRef.current;
  const isControlled = value !== undefined;

  if (wasControlled !== isControlled) {
    console.warn(
      `WARN: A component changed from ${
        wasControlled ? 'controlled' : 'uncontrolled'
      } to ${isControlled ? 'controlled' : 'uncontrolled'}.`
    );
  }

  wasControlledRef.current = isControlled;

  const stateRef = useRef(stateValue);

  const setValue = useCallback<Dispatch<SetStateAction<T>>>(
    (value: SetStateAction<T>) => {
      const onChangeCaller = (value: T) => {
        if (!Object.is(stateRef.current, value)) {
          onChange?.(value);
        }

        if (!isControlled) {
          stateRef.current = value;
        }
      };

      if (typeof value === 'function') {
        const updateFunction = (oldValue: T) => {
          const interceptedValue = (value as (prevState: T) => T)(
            isControlled ? stateRef.current : oldValue
          );
          onChangeCaller(interceptedValue);
          if (!isControlled) {
            return interceptedValue;
          }
          return oldValue;
        };
        setStateValue(updateFunction);
        return;
      }

      if (!isControlled) {
        setStateValue(value);
      }

      onChangeCaller(value);
    },
    [isControlled, onChange]
  );

  if (isControlled) {
    stateRef.current = value ?? defaultValue;
    return [value ?? defaultValue, setValue];
  }

  return [stateValue, setValue];
}
