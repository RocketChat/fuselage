import { styled } from '@tamagui/core';

import { RcxText } from '../../primitives';
import WithErrorWrapper from '../../helpers/WithErrorWrapper';

import { FieldContext } from './Field';

const FieldErrorBase = styled(RcxText, {
  name: 'FieldError',

  display: 'block',

  // c1 font scale
  fontFamily: '$body',
  fontSize: '$c1',
  fontWeight: '$c1',
  lineHeight: '$c1',
  letterSpacing: '$c1',

  marginBlock: '$x2',

  color: '$fontDanger',
});

export type FieldErrorProps = {
  children?: React.ReactNode;
  [key: string]: any;
};

const FieldError = (props: FieldErrorProps) => {
  const component = <FieldErrorBase {...props} />;

  if (process.env['NODE_ENV'] === 'development') {
    return (
      <WithErrorWrapper
        context={FieldContext}
        parentComponent='Field'
        componentName={FieldError.name}
      >
        {component}
      </WithErrorWrapper>
    );
  }

  return component;
};

export default FieldError;
