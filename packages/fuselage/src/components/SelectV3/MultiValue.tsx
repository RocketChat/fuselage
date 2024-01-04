// @ts-nocheck

import React from 'react';
import type { MultiValueProps, GroupBase } from 'react-select';
import Select, { components } from 'react-select';

import { Margins, Box, Icon, Chip, IconButton } from '../..';

const MultiValue = (props: MultiValueProps) => {
  const {
    children,
    // components,
    data,
    innerProps,
    // isDisabled,
    removeProps,
    selectProps,
  } = props;

  // const { Container, Label, Remove } = components;

  console.log(removeProps);
  console.log(data);

  return (
    <div {...innerProps} {...selectProps}>
      <Margins all='x2'>
        <Chip
          renderDismissSymbol={() => (
            <IconButton
              tiny
              icon='cross'
              // data={data}
              // innerProps={
              //   {
              //     // ...getStyleProps(props, 'multiValueRemove', {
              //     //   'multi-value__remove': true,
              //     // }),
              //   }
              // }
              aria-label={`Remove ${children || 'option'}`}
              {...removeProps}
              {...selectProps}
            />
          )}
        >
          {children}
        </Chip>
      </Margins>
    </div>
  );
};

export default MultiValue;
