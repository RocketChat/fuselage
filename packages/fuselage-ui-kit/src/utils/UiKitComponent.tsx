import * as UiKit from '@rocket.chat/ui-kit';
import { ReactElement } from 'react';

import { UiKitBanner, UiKitContextualBar, UiKitMessage, UiKitModal } from '../surfaces';

type UiKitComponentProps = {
  render: typeof UiKitBanner | typeof UiKitMessage | typeof UiKitModal | typeof UiKitContextualBar;
  blocks: UiKit.LayoutBlock[];
};

export const UiKitComponent = ({
  render,
  blocks,
}: UiKitComponentProps): ReactElement | null => render(blocks);
