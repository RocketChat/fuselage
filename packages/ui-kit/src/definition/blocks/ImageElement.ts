import { ElementType } from './ElementType';

export type ImageElement = {
  type: ElementType.IMAGE;
  imageUrl: string;
  altText: string;
};

// export interface IImageElement extends IBlockElement {
//   type: BlockElementType.IMAGE;
//   imageUrl: string;
//   altText: string;
// }
