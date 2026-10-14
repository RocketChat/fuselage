import WithErrorWrapper from '../../helpers/WithErrorWrapper';
import type { LabelResetProps } from '../Label/LabelReset';
import { LabelReset } from '../Label/LabelReset';

import { FieldContext } from './Field';

export type FieldLabelResetProps = LabelResetProps;

const FieldLabelReset = (props: FieldLabelResetProps) => {
  const component = <LabelReset {...props} />;

  if (process.env['NODE_ENV'] === 'development') {
    return (
      <WithErrorWrapper
        context={FieldContext}
        parentComponent='Field'
        componentName={FieldLabelReset.name}
      >
        {component}
      </WithErrorWrapper>
    );
  }

  return component;
};

export default FieldLabelReset;
