// import { useTranslation } from '@rocket.chat/ui-contexts';
import type { ReactElement, ComponentProps } from 'react';
import React, { memo } from 'react';

import ContextualBarAction from './ContextualBarAction';

type ContextualBarBackProps = Partial<
  ComponentProps<typeof ContextualBarAction>
>;

const ContextualBarBack = (props: ContextualBarBackProps): ReactElement => {
  // const t = useTranslation();
  const t = (text: string) => text;
  return <ContextualBarAction {...props} title={t('Back')} name='arrow-back' />;
};

export default memo(ContextualBarBack);
