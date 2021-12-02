import {
  MessagePreview,
  MessagePreviewContent,
  MessagePreviewDescription,
  MessagePreviewImage,
  MessagePreviewTitle,
  MessagePreviewFooter,
  MessagePreviewThumb,
} from '@rocket.chat/fuselage';
import * as UiKit from '@rocket.chat/ui-kit';
import React, { memo, ReactElement } from 'react';

import { BlockProps } from '../utils/BlockProps';

type PreviewBlockProps = BlockProps<UiKit.PreviewBlock>;

const PreviewBlock = ({
  block,
  surfaceRenderer,
}: PreviewBlockProps): ReactElement => (
  <MessagePreview>
    <MessagePreviewContent
      thumb={
        block.thumb && (
          <MessagePreviewThumb>
            <MessagePreviewImage
              height={192}
              width={368}
              url={block.thumb.url}
            />
          </MessagePreviewThumb>
        )
      }
    >
      <MessagePreviewTitle>
        {block.title.map((title) =>
          surfaceRenderer.renderTextObject(title, 0, UiKit.BlockContext.NONE)
        )}
      </MessagePreviewTitle>
      <MessagePreviewDescription clamp>
        {surfaceRenderer.renderTextObject(
          block.description,
          0,
          UiKit.BlockContext.NONE
        )}
      </MessagePreviewDescription>
      <MessagePreviewFooter>
        {block.footer?.map((footer, index) =>
          surfaceRenderer.renderTextObject(
            footer,
            index,
            UiKit.BlockContext.NONE
          )
        )}
      </MessagePreviewFooter>
    </MessagePreviewContent>
  </MessagePreview>
);

export default memo(PreviewBlock);
