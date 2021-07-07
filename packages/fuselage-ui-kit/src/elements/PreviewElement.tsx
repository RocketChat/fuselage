// import { TextAreaInput, TextInput } from '@rocket.chat/fuselage';
import {
  MessageGenericPreview,
  MessageGenericPreviewContent,
  MessageGenericPreviewDescription,
  MessageGenericPreviewImage,
  MessageGenericPreviewThumb,
  MessageGenericPreviewTitle,
  MessageGenericPreviewFooter,
} from '@rocket.chat/fuselage';
import { BlockContext } from '@rocket.chat/ui-kit';
import { VisibilityTypesInternal } from '@rocket.chat/ui-kit/dist/esm/VisitibilityType';
import { PreviewBlock } from '@rocket.chat/ui-kit/dist/esm/blocks/layout/PreviewBlock';
import { BaseSurfaceRenderer } from '@rocket.chat/ui-kit/dist/esm/rendering/BaseSurfaceRenderer';
import React, { FC } from 'react';

import { ContextElement } from './ContextElement';

export const PreviewElement: FC<{
  element: PreviewBlock<VisibilityTypesInternal>;
  context?: BlockContext;
  parser: BaseSurfaceRenderer<FC>;
}> = ({
  element: { title, description, externalUrl, context, ...args },
  parser,
}) => (
  <MessageGenericPreview>
    {'preview' in args && args.preview !== undefined && (
      <MessageGenericPreviewImage
        width={args.preview.dimensions.width}
        height={args.preview.dimensions.height}
        url={args.preview.url}
      />
    )}
    <MessageGenericPreviewContent
      thumb={
        'thumb' in args && args.thumb ? (
          <MessageGenericPreviewThumb>
            <MessageGenericPreviewImage
              width={args.thumb.dimensions.width}
              height={args.thumb.dimensions.height}
              url={args.thumb.url}
            />
          </MessageGenericPreviewThumb>
        ) : undefined
      }
    >
      <MessageGenericPreviewTitle externalUrl={externalUrl}>
        {title.text}
      </MessageGenericPreviewTitle>
      <MessageGenericPreviewDescription>
        {description.text}
      </MessageGenericPreviewDescription>
      {context && (
        <MessageGenericPreviewFooter>
          <ContextElement elements={context} parser={parser} />
        </MessageGenericPreviewFooter>
      )}
    </MessageGenericPreviewContent>
  </MessageGenericPreview>
);
