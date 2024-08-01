import type { ReactNode } from 'react';

type OptionDescriptionProps = {
  children?: ReactNode;
};

const OptionDescriptionBlock = (props: OptionDescriptionProps) => (
  <div className='rcx-option__description-block' {...props} />
);

export default OptionDescriptionBlock;
