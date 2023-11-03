import type { ComponentPropsWithoutRef } from 'react';
import React from 'react';

import WithErrorWrapper from '../../helpers/WithErrorWrapper';
import type { Icon } from '../Icon';
import { LabelInfo } from '../Label/LabelInfo';
import { FieldContext } from './Field';

type FieldLabelInfoProps = {
  title: string;
  id: string;
} & Omit<ComponentPropsWithoutRef<typeof Icon>, 'name'>;

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
