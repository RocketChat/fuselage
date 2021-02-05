import { ElementType } from './ElementType';
import { IElement } from './IElement';

export interface IImageElement extends IElement {
  type: ElementType.IMAGE;
  imageUrl: string;
  altText: string;
}

// export interface IImageElement extends IBlockElement {
//   type: BlockElementType.IMAGE;
//   imageUrl: string;
//   altText: string;
// }
