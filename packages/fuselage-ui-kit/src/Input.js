import React from 'react';
import {
  Field,
  FieldGroup,
  TextAreaInput,
  TextInput,
} from '@rocket.chat/fuselage';
import {
  BLOCK_CONTEXT,
} from '@rocket.chat/ui-kit';

import { Block } from './Block';
import { useBlockContext } from './hooks';

export const Input = ({ label, element, parser, index, hint, context }) => {
  const [{ error }] = useBlockContext(element, context);
  return (
    <Block>
      <FieldGroup>
        <Field>
          {label && <Field.Label>{label}</Field.Label>}
          {parser.renderInputs(element, BLOCK_CONTEXT.FORM, parser, index)}
          {error && <Field.Error>{error}</Field.Error>}
          {hint && <Field.Hint>{hint}</Field.Hint>}
        </Field>
      </FieldGroup>
    </Block>
  );
};

export const PlainInput = ({ element, context, index, parser }) => {
  const [{ loading, value, error }, action] = useBlockContext(element, context);
  const { multiline, actionId, placeholder } = element;
  const Component = multiline ? TextAreaInput : TextInput;
  return (
    <Component
      key={index}
      mod-loading={loading}
      id={actionId}
      name={actionId}
      rows={6}
      error={error}
      value={value}
      onInput={action}
      placeholder={parser.plainText(placeholder)}
    />
  );
};
