import type { ComponentProps } from 'react';
import React from 'react';

import { FieldContext } from './Field';
import WithErrorWrapper from '../../helpers/WithErrorWrapper';
import { LabelInfo } from '../Label/LabelInfo';

type FieldLabelInfoProps = ComponentProps<typeof LabelInfo>;

export const FieldLabelInfo = (props: FieldLabelInfoProps) => {
  const component = <LabelInfo {...props} />;

  if (process.env.NODE_ENV === 'development') {
    return (
      <WithErrorWrapper
        context={FieldContext}
        parentComponent='Field'
        componentName={FieldLabelInfo.name}
      >
        {component}
      </WithErrorWrapper>
    );
  }

  return component;
};
