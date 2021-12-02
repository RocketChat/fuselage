import { LayoutBlockType } from '../LayoutBlockType';
import { TextObject } from '../TextObject';

type Image = {
  url: string;
  dimensions?: {
    width: number;
    height: number;
  };
};

export type PreviewBlock = {
  type: `${LayoutBlockType.PREVIEW}`;
  title: TextObject[];
  description: TextObject;
  footer?: TextObject[];
} & (
  | {
      preview: Image;
      externalUrl?: string;
      oembedUrl?: string;
      thumb: undefined;
    }
  | {
      thumb: Image;
    }
  | Record<string, never>
);

type PreviewBlockWithThumb = PreviewBlock & {
  thumb: Image;
};

export const isPreviewBlockWithThumb = (
  previewBlock: PreviewBlock
): previewBlock is PreviewBlockWithThumb => 'thumb' in previewBlock;
