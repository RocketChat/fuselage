import { styled } from '@tamagui/core';

import { RcxView } from '../../primitives';
import WithErrorWrapper from '../../helpers/WithErrorWrapper';

import { FieldContext } from './Field';

const FieldRowBase = styled(RcxView, {
  name: 'FieldRow',

  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  alignItems: 'center',

  marginBlockStart: '$x4',
  marginBlockEnd: '$x2',

  color: '$fontSecondaryInfo',
});

export type FieldRowProps = {
  children?: React.ReactNode;
  [key: string]: any;
};

const FieldRow = (props: FieldRowProps) => {
  const component = <FieldRowBase {...props} />;

  if (process.env['NODE_ENV'] === 'development') {
    return (
      <WithErrorWrapper
        context={FieldContext}
        parentComponent='Field'
        componentName={FieldRow.name}
      >
        {component}
      </WithErrorWrapper>
    );
  }

  return component;
};

export default FieldRow;
