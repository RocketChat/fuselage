import * as UiKit from '@rocket.chat/ui-kit';
import { ReactElement } from 'react';

import { UiKitBanner, UiKitMessage, UiKitModal } from '../surfaces';

type UiKitComponentProps = {
  render: typeof UiKitBanner | typeof UiKitMessage | typeof UiKitModal;
  blocks: UiKit.LayoutBlock[];
};

export const UiKitComponent = ({
  render,
  blocks,
}: UiKitComponentProps): ReactElement | null => render(blocks);
