import { BlockElementType } from '../../../enums/BlockElementType';

export type ImageElement = {
  type: `${BlockElementType.IMAGE}`;
  imageUrl: string;
  altText: string;
};
