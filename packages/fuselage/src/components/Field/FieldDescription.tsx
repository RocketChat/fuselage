import { styled } from '@tamagui/core';

import { RcxText } from '../../primitives';
import WithErrorWrapper from '../../helpers/WithErrorWrapper';

import { FieldContext } from './Field';

const FieldDescriptionBase = styled(RcxText, {
  name: 'FieldDescription',

  display: 'block',

  // p2 font scale
  fontFamily: '$body',
  fontSize: '$p2',
  fontWeight: '$p2',
  lineHeight: '$p2',
  letterSpacing: '$p2',

  marginBlock: '$x2',

  color: '$fontSecondaryInfo',
});

export type FieldDescriptionProps = {
  children?: React.ReactNode;
  [key: string]: any;
};

const FieldDescription = (props: FieldDescriptionProps) => {
  const component = <FieldDescriptionBase {...props} />;

  if (process.env['NODE_ENV'] === 'development') {
    return (
      <WithErrorWrapper
        context={FieldContext}
        parentComponent='Field'
        componentName={FieldDescription.name}
      >
        {component}
      </WithErrorWrapper>
    );
  }

  return component;
};

export default FieldDescription;
