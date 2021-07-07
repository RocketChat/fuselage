import {
  VisibilityTypes,
  VisibilityTypesApps,
  VisibilityTypesInternal,
} from '../../VisitibilityType';
import { LayoutBlockType } from '../LayoutBlockType';
import { TextObject } from '../TextObject';
import { PlainText } from '../text/PlainText';
import { ContextBlockElements } from './ContextBlock';

type Image<V extends VisibilityTypes = VisibilityTypesApps> = {
  url: string;
  dimensions: V extends VisibilityTypesInternal
    ? {
        width: number;
        height: number;
      }
    : undefined;
};

export type PreviewBlock<V extends VisibilityTypes = VisibilityTypesApps> =
  | {
      type: `${LayoutBlockType.PREVIEW}`;
      title: PlainText;
      description: TextObject;
      context?: ContextBlockElements[];

      preview: never;
      // downloadUrl?: never;

      externalUrl?: never;
      // embeddedUrl?: never;
    }
  | {
      type: `${LayoutBlockType.PREVIEW}`;
      preview: Image<V>;
      title: PlainText;
      description: TextObject;
      context?: ContextBlockElements[];

      externalUrl?: string;
    }
  | {
      type: `${LayoutBlockType.PREVIEW}`;
      thumb: Image<V>;
      title: PlainText;
      description: TextObject;
      context?: ContextBlockElements[];

      externalUrl?: string;
    };
