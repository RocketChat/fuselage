import { Icon } from '@rocket.chat/fuselage';
import { TooltipWrapper } from '@rocket.chat/layout';
import type { ReactElement } from 'react';

type InformationTooltipTriggerProps = {
  text: string;
};

const InformationTooltipTrigger = ({
  text,
}: InformationTooltipTriggerProps): ReactElement => (
  <TooltipWrapper text={text}>
    <Icon name='info' />
  </TooltipWrapper>
);

export default InformationTooltipTrigger;
