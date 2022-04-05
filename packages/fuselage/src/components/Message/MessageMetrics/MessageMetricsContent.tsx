import type { ReactNode } from 'react';
import React from 'react';

type ContentProps = {
  children?: ReactNode;
};

export const Content = (props: ContentProps) => (
  <div className='rcx-message-metrics__content' {...props} />
);
