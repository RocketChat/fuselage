import type { ReactNode } from 'react';
import React from 'react';

/** @public */
export type OptionDescriptionBlockProps = {
  children?: ReactNode;
};

/** @public */
const OptionDescriptionBlock = (props: OptionDescriptionBlockProps) => (
  <div className='rcx-option__description-block' {...props} />
);

export default OptionDescriptionBlock;
