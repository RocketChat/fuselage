import { styled } from '@tamagui/core';

import { RcxText } from '../../primitives';
import WithErrorWrapper from '../../helpers/WithErrorWrapper';

import { FieldContext } from './Field';

const FieldHintBase = styled(RcxText, {
  name: 'FieldHint',

  display: 'block',

  // c1 font scale
  fontFamily: '$body',
  fontSize: '$c1',
  fontWeight: '$c1',
  lineHeight: '$c1',
  letterSpacing: '$c1',

  marginBlock: '$x2',

  color: '$fontSecondaryInfo',
});

export type FieldHintProps = {
  children?: React.ReactNode;
  [key: string]: any;
};

const FieldHint = (props: FieldHintProps) => {
  const component = <FieldHintBase {...props} />;

  if (process.env['NODE_ENV'] === 'development') {
    return (
      <WithErrorWrapper
        context={FieldContext}
        parentComponent='Field'
        componentName={FieldHint.name}
      >
        {component}
      </WithErrorWrapper>
    );
  }

  return component;
};

export default FieldHint;
