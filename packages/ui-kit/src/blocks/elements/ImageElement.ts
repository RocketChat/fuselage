import { BlockElementType } from '../BlockElementType';

export type ImageElement = {
  type: `${BlockElementType.IMAGE}`;
  imageUrl: string;
  altText: string;
};
