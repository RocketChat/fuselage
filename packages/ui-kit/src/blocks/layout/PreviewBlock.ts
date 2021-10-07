import { LayoutBlockType } from '../LayoutBlockType';
import { TextObject } from '../TextObject';
import { ContextBlockElements } from './ContextBlock';

type Image = {
  url: string;
  dimensions?: {
    width: number;
    height: number;
  };
};

export type PreviewBlock = {
  type: `${LayoutBlockType.PREVIEW}`;
  title: ContextBlockElements[];
  description: TextObject;
  footer?: ContextBlockElements[];
} & (
  | {
      preview: never;
      thumb: never;
    }
  | {
      preview: Image;
      externalUrl?: string;
      oembedUrl?: string;
    }
  | {
      thumb: Image;
    }
);
