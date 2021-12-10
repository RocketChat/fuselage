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
import * as UiKit from '@rocket.chat/ui-kit';
import { BLOCK_CONTEXT } from '@rocket.chat/ui-kit';
import React, { FC } from 'react';

import { BlockProps } from '../utils/BlockProps';
import { ContextElement } from './ContextElement';

type PreviewElementProps = BlockProps<UiKit.PreviewBlock>;

export const PreviewElement: FC<PreviewElementProps> = ({
  block: { title, description, externalUrl, context, thumb, ...args },
  surfaceRenderer,
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
      <MessageGenericPreviewDescription
        clamp={'preview' in args && args.preview !== undefined}
      >
        {description.text}
      </MessageGenericPreviewDescription>
      {context && (
        <MessageGenericPreviewFooter>
          <ContextElement
            block={{
              type: 'context',
              elements: context,
            }}
            index={0}
            context={BLOCK_CONTEXT.BLOCK}
            surfaceRenderer={surfaceRenderer}
          />
        </MessageGenericPreviewFooter>
      )}
    </MessageGenericPreviewContent>
  </MessageGenericPreview>
);
