import { useMergedRefs } from '@rocket.chat/fuselage-hooks';
import React, {
  forwardRef,
  useLayoutEffect,
  useRef,
  useCallback,
  ComponentProps,
  ForwardRefExoticComponent,
  FormEventHandler,
} from 'react';

import { Box } from '../Box';
import { Label } from '../Label';

type CheckBoxProps = ComponentProps<typeof Box> & {
  'indeterminate'?: boolean;
  'autoComplete': string;
  'checked': boolean;
  'defaultChecked': boolean;
  'disabled': boolean;
  'form': string;
  'id': string;
  'name': string;
  'required': boolean;
  'tabIndex': number;
  'value': string;
  'qa': string;
  'data-qa': string;
  'onChange': FormEventHandler<HTMLElement>;
  'onInput': () => void;
  'onInvalid': () => void;
};

export const CheckBox: ForwardRefExoticComponent<CheckBoxProps> = forwardRef(
  function CheckBox(
    {
      autoComplete,
      checked,
      defaultChecked,
      disabled,
      form,
      id,
      indeterminate,
      name,
      required,
      tabIndex,
      value,
      qa,
      'data-qa': dataQa,
      onChange,
      onInput,
      onInvalid,
      ...props
    },
    ref
  ) {
    const innerRef = useRef<HTMLInputElement>(null);
    const mergedRef = useMergedRefs(ref, innerRef);

    useLayoutEffect(() => {
      if (innerRef && innerRef.current && indeterminate !== undefined) {
        innerRef.current.indeterminate = indeterminate;
      }
    }, [innerRef, indeterminate]);

    const handleChange = useCallback<FormEventHandler<HTMLElement>>(
      (event) => {
        console.log(event);
        if (innerRef && innerRef.current && indeterminate !== undefined) {
          innerRef.current.indeterminate = indeterminate;
        }
        onChange && onChange.call(innerRef.current, event);
      },
      [innerRef, indeterminate, onChange]
    );

    return (
      <Box is={Label} rcx-check-box {...props}>
        <Box
          is='input'
          rcx-check-box__input
          autoComplete={autoComplete}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          form={form}
          id={id}
          name={name}
          required={required}
          tabIndex={tabIndex}
          type='checkbox'
          value={value}
          data-qa={dataQa || qa}
          ref={mergedRef}
          onChange={handleChange}
          onInput={onInput}
          onInvalid={onInvalid}
        />
        <Box is='i' rcx-check-box__fake aria-hidden='true' />
      </Box>
    );
  }
);
