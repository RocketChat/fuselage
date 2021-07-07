import { Box } from '@rocket.chat/fuselage';
import React, { ReactElement, ReactNode } from 'react';

type OptionCardProps = {
  selected?: boolean;
  onClick: () => void;
  children: ReactNode;
};

const OptionCard = ({
  selected,
  onClick,
  children,
}: OptionCardProps): ReactElement => (
  <Box
    className={[
      'SetupWizard__RegisterServerStep-option',
      selected && 'SetupWizard__RegisterServerStep-option--selected',
    ]
      .filter(Boolean)
      .join(' ')}
    display='block'
    // marginBlock='x8'
    pi='x24'
    pb='x8'
    color={selected ? 'primary' : 'disabled'}
    style={{
      borderColor: 'currentColor',
      borderRadius: 2,
      borderWidth: 2,
      cursor: selected ? 'initial' : 'pointer',
      // ...(disabled && { opacity: 0.25 }),
    }}
    onClick={onClick}
    children={children}
  />
);

export default OptionCard;
