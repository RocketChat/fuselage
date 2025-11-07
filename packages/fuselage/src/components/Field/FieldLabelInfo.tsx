import type { ComponentProps } from 'react';

import WithErrorWrapper from '../../helpers/WithErrorWrapper.js';
import { LabelInfo } from '../Label/LabelInfo.js';

import { FieldContext } from './Field.js';

export type FieldLabelInfoProps = ComponentProps<typeof LabelInfo>;

const FieldLabelInfo = (props: FieldLabelInfoProps) => {
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

export default FieldLabelInfo;
