import { Icon } from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';

import TooltipWrapper from './TooltipWrapper';

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
