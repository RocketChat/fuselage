// import { useTranslation } from '@rocket.chat/ui-contexts';
import type { ComponentProps, ReactElement } from 'react';
import React, { memo } from 'react';

import ContextualBarAction from './ContextualBarAction';

type ContextualBarCloseProps = Partial<
  ComponentProps<typeof ContextualBarAction>
>;

const ContextualBarClose = (props: ContextualBarCloseProps): ReactElement => {
  // const t = useTranslation();
  const t = (text: string) => text;

  return (
    <ContextualBarAction
      data-qa='VerticalBarActionClose'
      {...props}
      title={t('Close')}
      name='cross'
    />
  );
};

export default memo(ContextualBarClose);
