import React from 'react';

import { useClassName } from '../../hooks';
import { Text } from '../Text';

export const Paragraph = React.forwardRef(function Paragraph({ className, ...props }, ref) {
  const compoundClassName = useClassName('rcx-paragraph', {}, className);

  return <Text className={compoundClassName} is='p' paragraph ref={ref} {...props} />;
});

Paragraph.displayName = 'Paragraph';

Paragraph.Skeleton = function Skeleton({ animated, ...props }) {
  return <Paragraph {...props}>
    <Text.Skeleton animated={animated} />
    <Text.Skeleton animated={animated} />
    <Text.Skeleton animated={animated} width='4/5' />
  </Paragraph>;
};
