import {ContextBlock, DividerBlock, ImageBlock, InputBlock, SectionBlock} from "../..";
import {ActionsBlock} from "../../blocks/layout/ActionsBlock";
import {SurfaceRenderer} from "../SurfaceRenderer";

type ContextualBarSurfaceLayoutBlock =
  | ActionsBlock
  | ContextBlock
  | DividerBlock
  | ImageBlock
  | InputBlock
  | SectionBlock;

export abstract class UiKitParserContextualBar<OutputElement> extends SurfaceRenderer<
  OutputElement,
  ContextualBarSurfaceLayoutBlock
> {
  public constructor() {
    super(['actions', 'context', 'divider', 'image', 'input', 'section']);
  }
}

export type ContextualBarSurfaceLayout = ContextualBarSurfaceLayoutBlock[];
