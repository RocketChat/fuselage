import type { ComponentProps } from 'react';

import WithErrorWrapper from '../../helpers/WithErrorWrapper';
import { LabelInfo } from '../Label/LabelInfo';
import { FieldContext } from './Field';

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
